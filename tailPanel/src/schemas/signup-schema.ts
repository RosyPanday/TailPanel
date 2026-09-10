import { z } from "zod";

export const signupSchema = z.object({
  fullName: z.string().min(5),
  email: z.email(),
  password: z.string().min(8),
});

export type FormFields = z.infer<typeof signupSchema>;