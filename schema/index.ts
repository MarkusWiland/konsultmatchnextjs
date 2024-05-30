import * as z from "zod";

export const LoginSchema = z.object({
  email: z.string().email({
    message: "Email saknas",
  }),
  password: z.string().min(1, {
    message: "Lösenord är reqired",
  }),
});

export const RegisterSchema = z.object({
  email: z.string().email({
    message: "Email saknas",
  }),
  password: z.string().min(6, {
    message: "Lösenord är reqired",
  }),
  name: z.string().min(1, {
    message: "Namn saknas",
  }),
  role: z.enum(["CONSULT", "BUSINESS", "ADMIN"]),
  businessName: z.string().optional(),
  businessAddress: z.string().optional(),
  businessPhone: z.string().optional(),
});



export const JobApplicationSchema = z.object({
  title: z.string(),
  description: z.string(),
  category: z.string(),
  startDate: z.date(), // Konverterad från string till date
  endDate: z.date(), // Konverterad från string till date
  salary: z.string(), // Lagt till fält för salary
  requirements: z.string(), // Lagt till fält för requirements
 
});

