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

export const AssignmentSchema = z.object({
  id: z.number().int().positive(),
  title: z.string(),
  description: z.string(),
  startDate: z.date().optional(),
  endDate: z.date().optional(),
  duration: z.string().optional(),
  priority: z.string().default('medium'),
  status: z.string().default('planned'),
  assignee: z.string().optional(),
  tags: z.array(z.string()),
  budget: z.number().default(0),
  location: z.string().optional(),
  attachments: z.array(z.string()),
  milestones: z.array(z.string()),
  dependencies: z.array(z.string()),
  resources: z.array(z.string()),
  client: z.string().optional(),
  objectives: z.array(z.string()),
  risks: z.array(z.string()),
  completionCriteria: z.string().optional(),
  notes: z.string().optional(),
  createdAt: z.date().optional(), // Datum och tid då uppgiften skapades
  updatedAt: z.date().optional(), // Datum och tid då uppgiften senast uppdaterades
  userId: z.string(), // Användarens ID som skapade uppgiften
});