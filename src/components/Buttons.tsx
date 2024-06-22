"use client";

import styles from "@/style";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

type ButtonProps = {
  title: string;
  className?: string;
  href?: string;
  type: "button" | "submit" | "reset" | undefined;
};

export function BlackButton({
  className,
  href = "/",
  type,
  title,
}: ButtonProps) {
  const router = useRouter();

  return (
    <Link
      className="relative overflow-hidden group transform hover:-translate-y-1 duration-500"
      onClick={() => router.push(href)}
      href={href}
    >
      <button type={type} className={`${styles.blackButton} ${className}`}>
        <span className="relative z-[5]">{title}</span>
      </button>
      <div
        className="absolute -bottom-3 left-1/2 transform 
      -translate-x-1/2 w-24 h-full bg-primary-200 blur-2xl group-hover:blur-xl duration-200"
      />
    </Link>
  );
}

export function WhiteButton({
  className,
  href = "/",
  type,
  title,
}: ButtonProps) {
  const router = useRouter();

  return (
    <Link
      className="transform hover:-translate-y-1 duration-500"
      onClick={() => router.push(href)}
      href={href}
    >
      <button type={type} className={styles.whiteButton}>
        {title}
      </button>
    </Link>
  );
}

export function LinkButton({ href = "/", type, title }: ButtonProps) {
  const router = useRouter();

  return (
    <Link
      className="transform hover:-translate-y-1 duration-500"
      onClick={() => router.push(href)}
      href={href}
    >
      <div className="flex items-center gap-x-3 ">
        <button
          type={type}
          className="sm:text-[20px] font-semibold bg-gradient-to-r from-primary-300 to-primary-200 bg-clip-text text-transparent"
        >
          {title}
        </button>
        <ArrowUpRight className="text-primary-200" />
      </div>
    </Link>
  );
}
