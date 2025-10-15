import { z } from "zod";

export const signupSchema = z
  .object({
    email: z.string().email("Невірний email"),
    password: z.string().min(8, { message: "Пароль не може бути порожнім" }),
    confirmPassword: z.string().min(8, { message: "Паролі не співпадають" }),
    name: z
      .string()
      .min(2, { message: "Ім'я не може бути коротким" })
      .max(50, "Ім'я не може бути таким довгим"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Паролі не збігаються",
    path: ["confirmPassword"],
  });

export const signinSchema = z.object({
  email: z.string().email("Невірний email"),
  password: z.string().min(8, "Пароль не може бути порожнім"),
});

export type SignupFormData = z.infer<typeof signupSchema>;
export type SigninFormData = z.infer<typeof signinSchema>;