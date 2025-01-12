import { z } from "zod";

export const LoginFormSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string()
  .min(1, 'Cannot be empty')
  .regex(/^[^\.,\/\(\)\[\]{}"'':;]+$/, 'Incorrect symbols')

});

const NameFieldValidation = z.string()
  .min(1, 'Cannot be empty')
  .max(50, 'Name cannot exceed 50 characters')
  .regex(/^[^\.,\/\(\)\[\]{}"'':;]+$/, 'Incorrect symbols');

export const RegisterFormSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z
    .string()
    .min(4, 'Password must be at least 4 characters long')
    .max(20, 'Password must be less than 20 characters long')
    .regex(/^[^\.,\/\(\)\[\]{}"'':;]+$/, 'Incorrect symbols'),
  firstName: NameFieldValidation,
  lastName: NameFieldValidation,
});
