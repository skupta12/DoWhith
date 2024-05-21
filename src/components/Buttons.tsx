import Link from "next/link";
import React from "react";

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
}: {
  className?: string;
  href: string;
  type: string;
  title: string;
}) {
  return (
    <Link
      className="bg-background-100 text-white py-[10px] 
      px-[32px] rounded-md text-base font-bold overflow-hidden relative z-[5]"
      href={""}
    >
      <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-20 h-full bg-primary-200 blur-xl z-[10]"/>
      <button className="z-[20] relative">{title}</button>
    </Link>
  );
}

export function WhiteButton({
  className,
  href = "/",
  type,
  title,
}: {
  className?: string;
  href: string;
  type: string;
  title: string;
}) {
  return (
    <Link
      className="bg-white text-black py-[10px] 
      px-[32px] rounded-md text-base font-bold overflow-hidden relative z-[5]"
      href={""}
    >
      <button className="z-[20] relative">{title}</button>
    </Link>
  );
}
