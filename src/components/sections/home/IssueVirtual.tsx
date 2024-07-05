"use client";

import styles from "@/style";
import Image from "next/image";
import { LinkButton } from "../../Buttons";
import BgGetControlImage from "/public/home-features/bg-feature-2.png";
import MainControlImage from "/public/home-features/main-feature-2.png";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

const ShowCase = () => {
  return (
    <section className={styles.sectionPaddingV1}>
      <MaxWidthWrapper>
        <div className="grid grid-cols-12 md:gap-y-0 gap-y-12 items-center">     
          <div className={`col-span-12 md:col-span-6 lg:pr-24 md:pr-10`}>
            <div className="bg-primary-200 text-white font-semibold px-3 
            py-1 rounded-full inline-block mb-3">
              Expense Card
            </div>
            <h2 className={`${styles.heading2V} mb-3`}>
                Issue virtual & physical cards with built-in rules
            </h2>
            <p className={`${styles.paragraph} mb-3`}>
              Establish a request and approval process to increase spend
              accountability without blocking employees.
            </p>
            <LinkButton title="Learn More" type="button" />
          </div>
          <div className="col-span-12 md:col-span-6">
            <div className="relative overflow-hidden">
              <Image
                className="rounded-2xl bg-gray-100 w-full"
                width={568}
                height={577}
                quality={85}
                src={BgGetControlImage}
                alt="bg part image"
              />
              <Image
                quality={85}
                className="absolute bottom-0 sm:left-20 lg:w-[369px] w-[289px] lg:h-[488px] h-[408px] object-contain"
                // width={369}
                // height={488}
                src={MainControlImage}
                alt="main part image"
              />
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default ShowCase;