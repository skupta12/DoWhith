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

export type ButtonProps = {
  title: string;
  className?: string;
  href?: string;
  type: "button" | "submit" | "reset" | undefined;
};
