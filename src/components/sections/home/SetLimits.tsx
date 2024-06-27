"use client";

import styles from "@/style";
import Image from "next/image";
import { LinkButton } from "../../Buttons";
import BgSetLimitsImage from "/public/home-features/bg-feature-3.png";
import MainSetLimitsImage from "/public/home-features/main-feature-3.png";
import ExtraSetLimitsImage from "/public/home-features/extra-feature-3.png";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

const SetLimits = () => {
  return (
    <section className={styles.sectionPaddingV1}>
      <MaxWidthWrapper>
        <div className="grid grid-cols-12 md:gap-y-0 gap-y-12 items-center">
          <div className="col-span-12 md:col-span-6">
            <div className="relative">
              <Image
                className="rounded-2xl bg-gray-100"
                width={568}
                height={524}
                quality={85}
                src={BgSetLimitsImage}
                alt="bg part image"
              />
              <Image
                quality={85}
                className="absolute bottom-0 left-5"
                width={472}
                height={524}
                src={MainSetLimitsImage}
                alt="main part image"
              />
              <Image
                className="absolute bottom-56 sm:left-1/4 left-3"
                width={221}
                height={81}
                quality={85}
                src={ExtraSetLimitsImage}
                alt="extra part image"
              />
            </div>
          </div>
          <div className={`col-span-12 md:col-span-6 lg:pl-24 md:pl-10`}>
            <div className="bg-primary-200 text-white font-semibold px-3 py-1 rounded-full inline-block mb-3">
              Approval
            </div>
            <h2 className={`${styles.heading2V} mb-3`}>
                Set limits to help you stick to your budget
            </h2>
            <p className={`${styles.paragraph} mb-3`}>
            We&apos;ll calculate limits to recommend you based on 
            your spending predictions, or simply tell us how much you want to spend
            </p>
            <LinkButton title="Learn More" type="button" />
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default SetLimits;
