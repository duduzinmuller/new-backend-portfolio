import { z } from "zod";

export const CreateUserSchema = z.object({
  firstName: z.string().trim().min(1, {
    message: "O primeiro nome e obrigatorio",
  }),
  lastName: z.string().trim().min(1, {
    message: "O sobrenome e obrigatorio",
  }),
  email: z.string().trim().email({
    message: "O e-mail e invalido",
  }),
  phoneNumber: z
    .string()
    .trim()
    .min(10, "Número muito curto")
    .max(15, "Número muito longo")
    .regex(/^\+?[0-9]+$/, "Número inválido"),
  message: z.string().trim().optional(),
});
