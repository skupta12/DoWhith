import styles from "@/style";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { ButtonProps } from "@/lib/definitions";
import Image from "next/image";

export function BlackButton({
  className,
  href = "/",
  title,
  style
}: ButtonProps) {

  return (
    <Link
      className="relative overflow-hidden group transform hover:-translate-y-1 duration-500"  
      href={href}
    >
      <div className={`${styles.blackButton} ${className}`}>
        <span className="relative z-[5]">{title}</span>
      </div>
      <div
        className="absolute -bottom-3 left-1/2 transform 
      -translate-x-1/2 w-24 h-full bg-primary-300 blur-2xl group-hover:blur-xl duration-200"
      />
    </Link>
  );
}

export function WhiteButton({
  className,
  href = "/",
  title,
}: ButtonProps) {

  return (
    <Link
      className="transform hover:-translate-y-1 duration-500"
      href={href}
    >
      <div className={styles.whiteButton}>
        {title}
      </div>
    </Link>
  );
}

export function LinkButton({ href = "/", title }: ButtonProps) {

  return (
    <Link
      href={href}
    >
      <div className={`${styles.flexItems} inline-flex group gap-x-2`}>
        <div
          className={`${styles.linkButton}`}
        >
          {title}
        </div>
        <div className="duration-500 group-hover:translate-x-1 group-hover:-translate-y-[2px]">
          <ArrowUpRight size={24} className="text-primary-300" />
        </div>
       
      </div>
    </Link>
  );
}

export function SubmitButton({
  className,
  title,
  style,
}: ButtonProps) {

  return (
    <div
      className="relative overflow-hidden group transform hover:-translate-y-1 duration-500"  
    >
      <button className={`${styles.blackButton} ${className}`}>
        <span className="relative z-[5]">{title}</span>
      </button>
      <div
        className="absolute -bottom-3 left-1/2 transform cursor-pointer
      -translate-x-1/2 w-24 h-full bg-primary-300 blur-2xl group-hover:blur-xl duration-200"
      />
    </div>
  );
}

export function SocialButton({
  className,
  title,
  src,
  href = "/",
}: {
  className?: string;
  title: string;
  src: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="flex gap-x-3 w-full justify-center items-center 
  border border-gray-300 focus:outline-none p-3 rounded-md font-semibold"
    >
      <Image width={24} height={24} src={src} alt={`The ${title} icon`} />
      Sign up with {title}
    </Link>
  );
}

