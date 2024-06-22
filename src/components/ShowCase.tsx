"use client";

import styles from "@/style";
import Image from "next/image";
import { LinkButton } from "./Buttons";

const ShowCase = ({
  label,
  title,
  text,
  mainSrc,
  bgSrc,
  extraSrc,
  isReverse,
}: {
  label?: string;
  title?: string;
  text?: string;
  mainSrc: string;
  bgSrc: string;
  extraSrc?: string;
  isReverse?: boolean;
}) => {
  return (
    <div className="grid grid-cols-12 items-center">
      <div className={`col-span-12 md:col-span-6 ${isReverse ? "order-2" : ""}`}>
        <div className="relative">
          <Image
            className="rounded-2xl bg-gray-100"
            width={568}
            height={524}
            quality={100}
            src={bgSrc}
            alt="bg part image"
          />
          <Image
            quality={100}
            className="absolute bottom-0 left-0"
            width={472}
            height={524}
            src={mainSrc}
            alt="main part image"
          />
          <Image
            className="absolute bottom-5 sm:left-10 left-5"
            width={304}
            height={147}
            src={extraSrc}
            alt="extra part image"
          />
        </div>
      </div>
      <div className={`col-span-12 md:col-span-6 ${isReverse ? "lg:pr-24 pr-10 order-1" : "lg:pl-24 pl-10"}`}>
        <div className="bg-primary-200 text-white font-semibold px-3 py-1 rounded-full inline-block mb-3">
          {label}
        </div>
        <h2 className={`${styles.heading2V} mb-3`}>
          {title}
        </h2>
        <p className={`${styles.paragraph} mb-3`}>{text}</p>
        <LinkButton title="Learn More" type="button" />
      </div>
    </div>
  );
};

export default ShowCase;
