import { z } from "zod";
import { LoginFormSchema, RegisterFormSchema } from "../../../lib/validators";


export type LoginFormFieldsProps = {
  id: number;
  label: string;
  name: keyof z.infer<typeof LoginFormSchema>;
  type: 'text' | 'email' | 'password';
  placeholder: string;
};

export type RegisterFormFieldsProps = {
  id: number;
  label: string;
  name: keyof z.infer<typeof RegisterFormSchema>;
  type: 'text' | 'email' | 'password';
  placeholder: string;
};

