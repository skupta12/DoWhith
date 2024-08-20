import styles from "@/style";
import { ReactNode } from "react";

type TitleProps = {
  // text: string;
  extraSize: number;
  color: string;
  bgColor?: string;
  children: ReactNode;
  className?: string;
};

export const Heading1 = ({
  extraSize,
  color,
  bgColor,
  children,
  className
}: TitleProps) => {
  return (
    <h1
      style={{ fontSize: extraSize, color: color, backgroundColor: bgColor }}
      className={`${className}`}
    >
      {children}
    </h1>
  );
};
