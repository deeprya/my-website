import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Toaster } from "@/components/ui/sonner";
import { Textarea } from "@/components/ui/textarea";
import {
  BarChart2,
  Loader2,
  Mail,
  MapPin,
  Menu,
  Phone,
  Quote,
  Search,
  Share2,
  Star,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { SiLinkedin, SiUpwork, SiWhatsapp } from "react-icons/si";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { toast } from "sonner";
import { useSubmitLead } from "./hooks/useQueries";

function scrollTo(href: string) {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-bold tracking-widest uppercase mb-3">
      <span className="text-primary font-display">[</span>
      <span className="text-muted-foreground">{children}</span>
      <span className="text-primary font-display">]</span>
    </p>
  );
}

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Results", href: "#results" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMobileOpen(false);
    scrollTo(href);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex flex-col leading-tight">
          <span className="font-display font-bold text-sm tracking-widest text-foreground uppercase">
            Deepanshu Arya
          </span>
          <span className="text-[10px] tracking-wider text-muted-foreground uppercase">
            Digital Marketer
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <button
              type="button"
              key={link.href}
              onClick={() => handleNav(link.href)}
              data-ocid={`nav.${link.label.toLowerCase()}.link`}
              className="text-xs font-semibold tracking-widest text-muted-foreground hover:text-foreground transition-colors uppercase"
            >
              {link.label}
            </button>
          ))}
        </nav>

        <Button
          onClick={() => handleNav("#contact")}
          data-ocid="nav.cta.button"
          className="hidden md:flex border border-primary bg-transparent text-primary hover:bg-primary hover:text-primary-foreground text-xs font-bold tracking-wide rounded-full px-5 transition-all"
        >
          Get a Free Consult
        </Button>

        <button
          type="button"
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          data-ocid="nav.mobile.toggle"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-card border-b border-border px-6 pb-6"
          >
            <nav className="flex flex-col gap-4 pt-4">
              {NAV_LINKS.map((link) => (
                <button
                  type="button"
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  className="text-left text-sm font-semibold tracking-widest text-muted-foreground hover:text-foreground transition-colors uppercase"
                >
                  {link.label}
                </button>
              ))}
              <Button
                onClick={() => handleNav("#contact")}
                className="border border-primary bg-transparent text-primary hover:bg-primary hover:text-primary-foreground text-xs font-bold rounded-full mt-2"
              >
                Get a Free Consult
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-16 px-6"
      style={{
        background:
          "linear-gradient(135deg, oklch(0.96 0.02 220) 0%, oklch(0.98 0.008 200) 40%, oklch(0.97 0.015 38) 100%)",
      }}
    >
      <div className="max-w-[1200px] mx-auto w-full py-20 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="order-2 md:order-1"
        >
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-primary/10 text-primary text-xs font-bold px-4 py-1.5 rounded-full mb-5 tracking-wide uppercase border border-primary/20"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Available for Freelance Projects
          </motion.div>
          <h1 className="font-display font-black uppercase leading-none tracking-tight text-foreground mb-6">
            <span className="block text-5xl md:text-6xl lg:text-7xl">
              Deepanshu
            </span>
            <span className="block text-5xl md:text-6xl lg:text-7xl text-primary">
              Arya.
            </span>
            <span className="block text-lg md:text-2xl mt-3 text-muted-foreground font-semibold tracking-widest">
              Digital Marketing Executive
            </span>
          </h1>
          <p className="text-muted-foreground text-base leading-relaxed mb-8 max-w-lg">
            4+ years driving measurable growth through SEO, Social Media, Google
            Ads & Email Marketing. Let's scale your business together.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button
              onClick={() => scrollTo("#contact")}
              data-ocid="hero.consultation.primary_button"
              className="bg-primary text-primary-foreground hover:opacity-90 font-bold text-sm px-7 rounded-full shadow-lg"
            >
              Get a Free Consult
            </Button>
            <Button
              onClick={() => scrollTo("#services")}
              variant="outline"
              data-ocid="hero.services.secondary_button"
              className="border-border text-foreground hover:bg-card font-bold text-sm px-7 rounded-full"
            >
              Explore Services
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="flex justify-center md:justify-end order-1 md:order-2"
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-primary/20 blur-3xl scale-125" />
            <img
              src="/assets/uploads/1769165790921-019d2b91-d742-7079-a2e7-e803ed302703-1.jpg"
              alt="Deepanshu Arya"
              className="relative w-56 h-56 md:w-72 md:h-72 rounded-full object-cover border-4 border-primary/40 shadow-2xl"
            />
            <motion.div
              animate={{ y: [-6, 6, -6] }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 3,
                ease: "easeInOut",
              }}
              className="absolute -bottom-4 -right-4 bg-card border border-border rounded-2xl px-4 py-2.5 shadow-lg"
            >
              <p className="text-xs font-bold text-foreground">⭐ 5.0 Upwork</p>
              <p className="text-[10px] text-muted-foreground">Top Rated</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

const STATS = [
  { value: "4+", label: "Years Experience" },
  { value: "3", label: "Companies" },
  { value: "15%", label: "Engagement Boost" },
  { value: "30%", label: "Foot Traffic Increase" },
];

function StatsStrip() {
  return (
    <section className="bg-primary py-10 px-6">
      <div className="max-w-[1200px] mx-auto grid grid-cols-2 md:grid-cols-4">
        {STATS.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            data-ocid={`stats.item.${i + 1}`}
            className={`text-center py-4 ${
              i < STATS.length - 1
                ? "border-r border-primary-foreground/20"
                : ""
            }`}
          >
            <div className="text-3xl md:text-4xl font-display font-black text-primary-foreground">
              {stat.value}
            </div>
            <div className="text-xs text-primary-foreground/70 mt-1 tracking-wide uppercase font-semibold">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

// Profile links section
const PROFILE_LINKS = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/deepanshuarya8/",
    icon: SiLinkedin,
    bg: "#0077B5",
    desc: "Connect Professionally",
    ocid: "profiles.linkedin.button",
  },
  {
    label: "Upwork",
    href: "https://www.upwork.com/freelancers/~01efe85ca928c63fb4",
    icon: SiUpwork,
    bg: "#14A800",
    desc: "Hire on Upwork",
    ocid: "profiles.upwork.button",
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/917508844352",
    icon: SiWhatsapp,
    bg: "#25D366",
    desc: "Chat Instantly",
    ocid: "profiles.whatsapp.button",
  },
  {
    label: "Email Me",
    href: "mailto:aryadeeppanshu@gmail.com",
    icon: Mail,
    bg: "#EA4335",
    desc: "aryadeeppanshu@gmail.com",
    ocid: "profiles.email.button",
  },
];

function ProfileLinks() {
  return (
    <section className="py-16 px-6 bg-secondary/30">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <SectionLabel>Connect</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-display font-black uppercase tracking-tight text-foreground">
            Find Me On
          </h2>
          <p className="text-muted-foreground text-sm mt-2">
            Let's connect and discuss how I can grow your business
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4">
          {PROFILE_LINKS.map((pl, i) => {
            const Icon = pl.icon;
            return (
              <motion.a
                key={pl.label}
                href={pl.href}
                target="_blank"
                rel="noopener noreferrer"
                data-ocid={pl.ocid}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.07, y: -3 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="flex items-center gap-3 text-white font-bold px-7 py-4 rounded-full shadow-lg text-sm transition-shadow hover:shadow-xl min-w-[180px] justify-center"
                style={{ backgroundColor: pl.bg }}
              >
                <Icon size={20} />
                <div className="text-left">
                  <div className="font-bold text-sm">{pl.label}</div>
                  <div className="text-xs opacity-80">{pl.desc}</div>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const SERVICES = [
  {
    icon: Search,
    title: "SEO",
    subtitle: "On-page & Off-page",
    description:
      "Boosting organic visibility through keyword research, technical audits, and content optimization to drive sustainable traffic growth.",
  },
  {
    icon: Share2,
    title: "Social Media Management",
    subtitle: "Multi-platform Campaigns",
    description:
      "Creating and executing social campaigns across platforms that increased user engagement by 15%.",
  },
  {
    icon: BarChart2,
    title: "Google Ads",
    subtitle: "PPC & Performance",
    description:
      "Designing and managing performance-driven paid campaigns to maximize ROI and reach target audiences effectively.",
  },
  {
    icon: Mail,
    title: "Email Marketing",
    subtitle: "Klaviyo · Zoho · Mailchimp",
    description:
      "End-to-end email campaigns using Klaviyo, Zoho, and Mailchimp to nurture leads and convert prospects.",
  },
];

function Services() {
  return (
    <section id="services" className="py-24 px-6 bg-background">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <SectionLabel>Services</SectionLabel>
          <h2 className="text-3xl md:text-4xl font-display font-black uppercase tracking-tight text-foreground">
            What I Do Best
          </h2>
        </motion.div>

        <div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
          data-ocid="services.list"
        >
          {SERVICES.map((svc, i) => {
            const Icon = svc.icon;
            return (
              <motion.div
                key={svc.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.03, y: -4 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                data-ocid={`services.item.${i + 1}`}
                className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 hover:shadow-lg transition-all flex flex-col cursor-default"
              >
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center mb-5 shrink-0">
                  <Icon className="text-primary-foreground" size={20} />
                </div>
                <h3 className="text-base font-display font-bold text-foreground mb-1">
                  {svc.title}
                </h3>
                <p className="text-xs text-primary font-semibold mb-3">
                  {svc.subtitle}
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                  {svc.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const PORTFOLIO_GRAPHICS = [
  {
    src: "/assets/uploads/what_we_do_42-019d2d2c-0f62-71bf-bcc8-486e8ed5dcdb-1.png",
    client: "Round Box Estates",
    title: "Moving Costs Graphic",
  },
  {
    src: "/assets/uploads/what_we_do_27-019d2d2c-12b5-73a8-89e4-e4680dd163e1-3.png",
    client: "Round Box Estates",
    title: "Journey to New Home",
  },
  {
    src: "/assets/uploads/pp_april_graphics_2024_38-019d2d2c-1266-7683-8e25-28a3fafc35ac-2.png",
    client: "PropertyPipeline",
    title: "Book Club Campaign",
  },
  {
    src: "/assets/uploads/pp_april_graphics_2024_6-019d2d2c-135e-737f-9cd0-676e72447272-4.png",
    client: "PropertyPipeline",
    title: "Sign Up Creative",
  },
  {
    src: "/assets/uploads/pp_april_graphics_2024_37-019d2d2c-1399-713c-91a5-85e96a9147b2-5.png",
    client: "PropertyPipeline",
    title: "Mobile Phone Creative",
  },
];

function Portfolio() {
  return (
    <section id="portfolio" className="py-24 px-6 bg-background">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <SectionLabel>Portfolio</SectionLabel>
          <h2 className="text-3xl md:text-4xl font-display font-black uppercase tracking-tight text-foreground">
            Client Work
          </h2>
          <p className="text-muted-foreground mt-3 max-w-xl">
            Social media creatives and content produced for real estate clients.
            Each graphic is crafted to drive engagement and brand awareness.
          </p>
        </motion.div>

        {/* Graphics grid */}
        <div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 mb-12"
          data-ocid="portfolio.list"
        >
          {PORTFOLIO_GRAPHICS.map((item, i) => (
            <motion.div
              key={item.src}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                scale: 1.03,
                boxShadow: "0 16px 48px rgba(0,0,0,0.15)",
              }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              data-ocid={`portfolio.item.${i + 1}`}
              className="bg-card border border-border rounded-2xl overflow-hidden shadow-md cursor-default group"
            >
              <div className="overflow-hidden">
                <motion.img
                  src={item.src}
                  alt={`${item.client} — ${item.title}`}
                  className="w-full h-[220px] object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="px-4 py-3 flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-foreground">
                    {item.title}
                  </p>
                  <p className="text-[11px] text-primary font-semibold mt-0.5">
                    {item.client}
                  </p>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider bg-primary/10 text-primary px-2.5 py-1 rounded-full border border-primary/20">
                  Social
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Video reel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-card border border-border rounded-2xl overflow-hidden shadow-md"
          data-ocid="portfolio.panel"
        >
          <div className="px-6 py-4 border-b border-border flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground text-sm">▶</span>
            </div>
            <div>
              <p className="text-sm font-bold text-foreground">
                Reel / Video Content
              </p>
              <p className="text-xs text-muted-foreground">
                Property Owners Campaign — Client Video Ad
              </p>
            </div>
          </div>
          <div className="p-4 flex justify-center">
            <video
              src="/assets/uploads/attention_property_owners_1-019d2d2c-1a97-773c-b171-c9cee1a55f32-1.mp4"
              controls
              muted
              loop
              playsInline
              className="w-full max-w-[480px] rounded-xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

const METRIC_DATA = [
  { metric: "Engagement", value: 15, fill: "#f97316" },
  { metric: "Foot Traffic", value: 30, fill: "#0077B5" },
  { metric: "Organic Traffic", value: 40, fill: "#14A800" },
  { metric: "Lead Conversion", value: 25, fill: "#7c3aed" },
  { metric: "Email Open Rate", value: 35, fill: "#EA4335" },
];

const SEO_EVIDENCE = [
  {
    src: "/assets/uploads/image-019d2d2f-f5a1-76fb-92e9-94f5d646704d-6.png",
    caption: "Google Search Console — 1.5K Clicks & 122K Impressions",
  },
  {
    src: "/assets/uploads/image-019d2d2f-f68b-7661-93ea-8581d13d7e00-7.png",
    caption:
      "SEO Metrics Growth — Domain Authority, Backlinks & Website Health",
  },
];

function ResultsChart() {
  const [animated, setAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimated(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="results" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <SectionLabel>Proof of Work</SectionLabel>
          <h2 className="text-3xl md:text-4xl font-display font-black uppercase tracking-tight text-foreground">
            Results I've Delivered
          </h2>
          <p className="text-muted-foreground mt-3 max-w-xl">
            Real numbers from real campaigns. Every metric represents a client
            success story.
          </p>
        </motion.div>

        <div
          ref={ref}
          className="bg-card border border-border rounded-2xl p-8 mb-12"
        >
          <ResponsiveContainer width="100%" height={320}>
            <BarChart
              data={
                animated
                  ? METRIC_DATA
                  : METRIC_DATA.map((d) => ({ ...d, value: 0 }))
              }
              margin={{ top: 20, right: 20, left: 0, bottom: 20 }}
            >
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="oklch(0.85 0.006 220)"
              />
              <XAxis
                dataKey="metric"
                tick={{ fontSize: 11, fontWeight: 600 }}
                axisLine={false}
                tickLine={false}
              />
              <YAxis
                unit="%"
                tick={{ fontSize: 11 }}
                axisLine={false}
                tickLine={false}
                domain={[0, 50]}
              />
              <Tooltip
                formatter={(value: number) => [`${value}%`, "Growth"]}
                contentStyle={{
                  borderRadius: "8px",
                  border: "1px solid oklch(0.85 0.006 220)",
                  fontSize: "12px",
                }}
              />
              <Bar
                dataKey="value"
                radius={[6, 6, 0, 0]}
                isAnimationActive={animated}
                animationDuration={1200}
                animationEasing="ease-out"
              >
                {METRIC_DATA.map((entry) => (
                  <rect key={entry.metric} fill={entry.fill} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>

          <div className="flex flex-wrap gap-3 mt-4 justify-center">
            {METRIC_DATA.map((d) => (
              <div key={d.metric} className="flex items-center gap-2">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: d.fill }}
                />
                <span className="text-xs text-muted-foreground">
                  {d.metric}: <strong>{d.value}%</strong>
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* SEO Evidence Screenshots */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <SectionLabel>Evidence</SectionLabel>
          <h3 className="text-2xl font-display font-black uppercase tracking-tight text-foreground">
            Real Client SEO Data
          </h3>
          <p className="text-muted-foreground text-sm mt-2">
            Actual screenshots from Google Search Console and SEO tracking
            tools.
          </p>
        </motion.div>

        <div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          data-ocid="seo.list"
        >
          {SEO_EVIDENCE.map((item, i) => (
            <motion.div
              key={item.src}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              data-ocid={`seo.item.${i + 1}`}
              className="bg-card border border-border rounded-2xl overflow-hidden shadow-md"
            >
              <img
                src={item.src}
                alt={item.caption}
                className="w-full h-[180px] object-cover object-top block"
                loading="lazy"
              />
              <div className="px-5 py-4 border-t border-border flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary shrink-0" />
                <p className="text-sm font-semibold text-foreground">
                  {item.caption}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const SKILL_BARS = [
  { label: "SEO (On-page & Off-page)", value: 95 },
  { label: "Analytics & Reporting", value: 92 },
  { label: "Social Media Marketing", value: 90 },
  { label: "Google Ads (PPC)", value: 88 },
  { label: "Email Marketing", value: 85 },
  { label: "Content Marketing", value: 82 },
  { label: "Canva / Content Creation", value: 80 },
  { label: "Conversion Rate Optimization", value: 78 },
];

const SKILL_GROUPS = [
  {
    group: "Analytics",
    tags: ["Google Analytics", "SEMrush", "Ahrefs", "Moz", "Screaming Frog"],
  },
  { group: "Email Tools", tags: ["Klaviyo", "Zoho Mail", "Mailchimp"] },
  { group: "Content & Design", tags: ["Canva", "Filmora", "Strapi"] },
  {
    group: "Project Management",
    tags: ["Jira", "Confluence", "Slack", "Trello"],
  },
];

function SkillBars() {
  const [progress, setProgress] = useState<number[]>(SKILL_BARS.map(() => 0));
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const timers = SKILL_BARS.map((skill, i) =>
            setTimeout(
              () =>
                setProgress((prev) => {
                  const next = [...prev];
                  next[i] = skill.value;
                  return next;
                }),
              i * 100,
            ),
          );
          observer.disconnect();
          return () => timers.forEach(clearTimeout);
        }
      },
      { threshold: 0.2 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div id="skills" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <SectionLabel>Skills</SectionLabel>
        <h2 className="text-2xl md:text-3xl font-display font-black uppercase tracking-tight text-foreground">
          Tools & Expertise
        </h2>
      </motion.div>

      <div className="space-y-5" data-ocid="skills.list">
        {SKILL_BARS.map((skill, i) => (
          <motion.div
            key={skill.label}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.07, duration: 0.4 }}
          >
            <div className="flex justify-between mb-1.5">
              <span className="text-xs font-semibold text-foreground">
                {skill.label}
              </span>
              <span className="text-xs font-bold text-primary">
                {progress[i]}%
              </span>
            </div>
            <Progress
              value={progress[i]}
              className="h-2 transition-all duration-1000 ease-out"
            />
          </motion.div>
        ))}
      </div>

      <div className="mt-8 space-y-4">
        {SKILL_GROUPS.map((group, gi) => (
          <motion.div
            key={group.group}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: gi * 0.07, duration: 0.4 }}
          >
            <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-2">
              {group.group}
            </p>
            <div className="flex flex-wrap gap-2">
              {group.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-card border border-border text-foreground text-xs font-medium px-3 py-1.5 rounded-full hover:border-primary/50 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

const EXPERIENCES = [
  {
    title: "Digital Marketing Executive",
    company: "Lasting Software Pvt. Ltd.",
    period: "Current",
    highlights: [
      "Social Media Management, SEO, Google Ads, Email Marketing, GMB Optimization",
      "Increased local business foot traffic by 30% through GMB optimization",
    ],
  },
  {
    title: "Digital Marketing Executive",
    company: "Business Websoft Pvt. Ltd.",
    period: "Previous",
    highlights: [
      "Social Media campaigns, SEO, PPC",
      "15% increase in user engagement via social media campaigns",
    ],
  },
  {
    title: "Digital Marketing",
    company: "Infobeckons Pvt. Ltd.",
    period: "Earlier",
    highlights: ["SEO, Content Creation, Analytics"],
  },
];

function Testimonial() {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <SectionLabel>Social Proof</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-display font-black uppercase tracking-tight text-foreground">
            What Clients Say
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-card border border-border rounded-2xl p-8 shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            <Quote
              className="text-primary/30 mb-4"
              size={48}
              strokeWidth={1.5}
            />

            <div className="flex items-center gap-1 mb-3">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  size={18}
                  className="text-yellow-400 fill-yellow-400"
                />
              ))}
              <span className="ml-2 text-sm font-bold text-foreground">
                5.0
              </span>
            </div>

            <p className="text-foreground text-base leading-relaxed italic mb-4">
              "Excellent work! Delivered on time with high quality. Great
              communication and attention to detail. Highly recommend!"
            </p>

            <p className="text-sm font-semibold text-muted-foreground mb-1">
              Project:{" "}
              <span className="text-foreground">
                SEO Specialist for New Website
              </span>
            </p>

            <div className="flex items-center gap-2 mt-4 mb-5">
              <span
                className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-full text-white"
                style={{ backgroundColor: "#14A800" }}
              >
                <SiUpwork size={10} />
                Verified on Upwork
              </span>
            </div>

            <div className="flex flex-wrap gap-2">
              {[
                "Committed to Quality",
                "Great Communication",
                "Detail Oriented",
                "Reliable",
              ].map((tag) => (
                <span
                  key={tag}
                  className="bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full border border-primary/20"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<typeof form>>({});
  const submitLead = useSubmitLead();

  const validate = () => {
    const e: Partial<typeof form> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/^[^@]+@[^@]+\.[^@]+$/.test(form.email))
      e.email = "Invalid email";
    if (!form.message.trim()) e.message = "Message is required";
    return e;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    try {
      await submitLead.mutateAsync(form);
      toast.success("Message sent! Deepanshu will get back to you soon.");
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch {
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="space-y-4"
      data-ocid="contact.modal"
    >
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="space-y-1">
          <Label
            htmlFor="contact-name"
            className="text-sm font-semibold text-foreground"
          >
            Full Name *
          </Label>
          <Input
            id="contact-name"
            placeholder="John Smith"
            value={form.name}
            onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
            data-ocid="contact.name.input"
          />
          {errors.name && (
            <p
              className="text-destructive text-xs"
              data-ocid="contact.name.error_state"
            >
              {errors.name}
            </p>
          )}
        </div>
        <div className="space-y-1">
          <Label
            htmlFor="contact-email"
            className="text-sm font-semibold text-foreground"
          >
            Email Address *
          </Label>
          <Input
            id="contact-email"
            type="email"
            placeholder="john@example.com"
            value={form.email}
            onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
            data-ocid="contact.email.input"
          />
          {errors.email && (
            <p
              className="text-destructive text-xs"
              data-ocid="contact.email.error_state"
            >
              {errors.email}
            </p>
          )}
        </div>
      </div>

      <div className="space-y-1">
        <Label
          htmlFor="contact-phone"
          className="text-sm font-semibold text-foreground"
        >
          Phone Number{" "}
          <span className="text-muted-foreground font-normal">(optional)</span>
        </Label>
        <Input
          id="contact-phone"
          type="tel"
          placeholder="+91 7888829332"
          value={form.phone}
          onChange={(e) => setForm((p) => ({ ...p, phone: e.target.value }))}
          data-ocid="contact.phone.input"
        />
      </div>

      <div className="space-y-1">
        <Label
          htmlFor="contact-message"
          className="text-sm font-semibold text-foreground"
        >
          Message *
        </Label>
        <Textarea
          id="contact-message"
          placeholder="Tell me about your project or marketing goals..."
          rows={4}
          value={form.message}
          onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
          className="resize-none"
          data-ocid="contact.message.textarea"
        />
        {errors.message && (
          <p
            className="text-destructive text-xs"
            data-ocid="contact.message.error_state"
          >
            {errors.message}
          </p>
        )}
      </div>

      <Button
        type="submit"
        disabled={submitLead.isPending}
        className="w-full bg-primary text-primary-foreground hover:opacity-90 font-bold rounded"
        data-ocid="contact.submit.button"
      >
        {submitLead.isPending ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...
          </>
        ) : (
          "Send Message"
        )}
      </Button>

      {submitLead.isSuccess && (
        <p
          className="text-center text-sm text-primary font-semibold"
          data-ocid="contact.success_state"
        >
          ✓ Your inquiry was sent successfully!
        </p>
      )}
    </form>
  );
}

function LowerSection() {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-16">
        {/* Left: Experience */}
        <div id="experience">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-10"
          >
            <SectionLabel>Experience</SectionLabel>
            <h2 className="text-2xl md:text-3xl font-display font-black uppercase tracking-tight text-foreground">
              Work History
            </h2>
          </motion.div>

          <div className="relative">
            <div className="absolute left-3.5 top-0 bottom-0 w-0.5 bg-primary/40" />
            <div className="flex flex-col gap-8">
              {EXPERIENCES.map((exp, i) => (
                <motion.div
                  key={exp.company}
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.5 }}
                  data-ocid={`experience.item.${i + 1}`}
                  className="pl-12 relative"
                >
                  <div className="absolute left-0 top-1 w-7 h-7 rounded-full bg-background border-2 border-primary flex items-center justify-center">
                    <div className="w-2.5 h-2.5 rounded-full bg-primary" />
                  </div>
                  <div>
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                      <div>
                        <h3 className="text-sm font-display font-bold text-foreground">
                          {exp.title}
                        </h3>
                        <p className="text-primary text-xs font-semibold">
                          {exp.company}
                        </p>
                      </div>
                      <span className="text-[10px] font-bold text-muted-foreground bg-muted px-2.5 py-1 rounded-full uppercase tracking-wide shrink-0">
                        {exp.period}
                      </span>
                    </div>
                    <ul className="space-y-1.5">
                      {exp.highlights.map((h) => (
                        <li
                          key={h.slice(0, 30)}
                          className="flex gap-2 text-xs text-muted-foreground"
                        >
                          <span className="text-primary mt-0.5 shrink-0">
                            ▸
                          </span>
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Skills + Contact */}
        <div className="flex flex-col gap-14">
          <SkillBars />

          <div id="contact">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <SectionLabel>Contact</SectionLabel>
              <h2 className="text-2xl md:text-3xl font-display font-black uppercase tracking-tight text-foreground">
                Get In Touch
              </h2>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {[
                {
                  icon: Phone,
                  label: "Phone",
                  value: "7888829332",
                  href: "tel:7888829332",
                },
                {
                  icon: Mail,
                  label: "Email",
                  value: "aryadeeppanshu@gmail.com",
                  href: "mailto:aryadeeppanshu@gmail.com",
                },
                {
                  icon: MapPin,
                  label: "Location",
                  value: "Derabassi, Gulabgarh Road",
                  href: undefined,
                },
                {
                  icon: SiLinkedin,
                  label: "LinkedIn",
                  value: "/in/deepanshuarya8",
                  href: "https://www.linkedin.com/in/deepanshuarya8/",
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="flex gap-3 items-start">
                    <div className="w-8 h-8 rounded-full bg-primary/15 flex items-center justify-center shrink-0">
                      <Icon className="text-primary" size={14} />
                    </div>
                    <div>
                      <p className="text-[10px] text-muted-foreground uppercase tracking-wider mb-0.5">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={
                            item.href.startsWith("http") ? "_blank" : undefined
                          }
                          rel="noopener noreferrer"
                          className="text-foreground font-semibold text-xs hover:text-primary transition-colors break-all"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-foreground font-semibold text-xs">
                          {item.value}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}

const QUICK_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Results", href: "#results" },
  { label: "Contact", href: "#contact" },
];

function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";
  return (
    <footer className="bg-card border-t border-border pt-12 pb-6 px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid sm:grid-cols-3 gap-8 pb-8 border-b border-border">
          <div>
            <div className="font-display font-black text-base tracking-widest text-foreground uppercase mb-1">
              Deepanshu Arya
            </div>
            <div className="text-xs text-muted-foreground uppercase tracking-wider mb-3">
              Digital Marketing Executive
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              4+ years driving growth through SEO, Social Media, Google Ads, and
              Email Marketing.
            </p>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">
              Quick Links
            </p>
            <ul className="space-y-2">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <button
                    type="button"
                    onClick={() => scrollTo(link.href)}
                    data-ocid={`footer.${link.label.toLowerCase()}.link`}
                    className="text-xs text-muted-foreground hover:text-primary transition-colors uppercase tracking-wide"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">
              Connect With Me
            </p>
            <div className="flex flex-col gap-2">
              <a
                href="https://www.linkedin.com/in/deepanshuarya8/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                data-ocid="footer.linkedin.link"
                className="inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-primary transition-colors"
              >
                <div className="w-7 h-7 rounded-full bg-[#0077B5]/10 flex items-center justify-center">
                  <SiLinkedin size={13} className="text-[#0077B5]" />
                </div>
                LinkedIn
              </a>
              <a
                href="https://wa.me/917508844352"
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="footer.whatsapp.link"
                className="inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-primary transition-colors"
              >
                <div className="w-7 h-7 rounded-full bg-[#25D366]/10 flex items-center justify-center">
                  <SiWhatsapp size={13} className="text-[#25D366]" />
                </div>
                WhatsApp
              </a>
              <a
                href="https://www.upwork.com/freelancers/~01efe85ca928c63fb4"
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="footer.upwork.link"
                className="inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-primary transition-colors"
              >
                <div className="w-7 h-7 rounded-full bg-[#14A800]/10 flex items-center justify-center">
                  <SiUpwork size={13} className="text-[#14A800]" />
                </div>
                Upwork
              </a>
            </div>
          </div>
        </div>

        <p className="text-xs text-muted-foreground text-center mt-6">
          © {year}. Built with ❤️ using{" "}
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            caffeine.ai
          </a>
        </p>
      </div>
    </footer>
  );
}

function WhatsAppFAB() {
  return (
    <motion.a
      href="https://wa.me/917508844352"
      target="_blank"
      rel="noopener noreferrer"
      data-ocid="whatsapp.button"
      aria-label="Chat on WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.15 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-2xl text-white"
      style={{ backgroundColor: "#25D366" }}
    >
      <SiWhatsapp size={26} />
    </motion.a>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <Toaster position="top-right" />
      <Navbar />
      <main>
        <Hero />
        <StatsStrip />
        <ProfileLinks />
        <Services />
        <Portfolio />
        <ResultsChart />
        <Testimonial />
        <LowerSection />
      </main>
      <Footer />
      <WhatsAppFAB />
    </div>
  );
}
