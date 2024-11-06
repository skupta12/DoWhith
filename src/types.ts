
import { CSSProperties, ReactNode } from "react";

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
  type: "button" | "submit" | "reset";
  title: string;
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
  title: string;
  content: string;
  isActive: boolean;
  onToggle: () => void;
  className?: string;
}