"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserSchema = void 0;
const zod_1 = require("zod");
exports.CreateUserSchema = zod_1.z.object({
    firstName: zod_1.z.string().trim().min(1, {
        message: "O primeiro nome e obrigatorio",
    }),
    lastName: zod_1.z.string().trim().min(1, {
        message: "O sobrenome e obrigatorio",
    }),
    email: zod_1.z.string().trim().email({
        message: "O e-mail e invalido",
    }),
    phoneNumber: zod_1.z
        .string()
        .trim()
        .min(10, "Número muito curto")
        .max(15, "Número muito longo")
        .regex(/^\+?[0-9]+$/, "Número inválido"),
    message: zod_1.z.string().trim().optional(),
});
