import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Enter your name"),
  email: z.string().email("Enter a valid email address"),
  company: z.string().optional(),
  service: z.string().min(1, "Please choose a service"),
  message: z.string().min(20, "Please give us at least 20 characters"),
  consent: z.literal(true, {
    errorMap: () => ({ message: "Please confirm your consent to proceed" }),
  }),
  // honeypot field — must be empty
  website: z.string().max(0).optional(),
});

export type Contact = z.infer<typeof contactSchema>;
