
import { loginForm } from "@/constants";
import { CSSProperties, ReactNode } from "react";
import { z } from "zod";
import { LoginFormSchema, RegisterFormSchema } from "./validators";

export type NavbarProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
  closeMenu: () => void;
}

export type PosTypes = {
  children: ReactNode;
  xTransform?: number;
  yTransform?: number;
  className?: string;
  style?: CSSProperties;
  elStartOffset?: number;
  elEndOffset?: number;
};

export type ButtonProps = {
  className?: string;
  href?: string;
  title: string;
  style?: string;
  onClick?: () => void;
  disabled?: boolean
}

export type Icons = {
  id: number;
  left?: number;
  right?: number;
  top: number;
  translateX: number;
  translateY: number;
  src: string;
  title?: string;
  zIndex?: number;
  alt: string;
  elStartOffset?: number;
  elEndOffset?: number;
};

export type AccordionProps = {
  id?: string;
  title: string;
  content: string;
  isActive?: boolean;
  onToggle?: () => void;
  className?: string;
  color: string;
  bgColor: string;
  activeBgColor?: string;
  style?: CSSProperties;
}

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

