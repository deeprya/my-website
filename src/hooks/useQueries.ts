import { useMutation } from "@tanstack/react-query";

export function useSubmitLead() {
  return useMutation({
    mutationFn: async (data: {
      name: string;
      email: string;
      phone: string;
      message: string;
    }) => {
      console.info("Lead submitted:", data);
      await new Promise((r) => setTimeout(r, 600));
    },
  });
}
