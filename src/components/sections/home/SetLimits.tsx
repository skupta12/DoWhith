"use client";

import styles from "@/style";
import Image from "next/image";
import { LinkButton } from "../../common/Buttons";
import BgSetLimitsImage from "/public/home-features/bg-feature-3.png";
import MainSetLimitsImage from "/public/home-features/main-feature-3.png";
import ExtraSetLimitsImage from "/public/home-features/extra-feature-3.png";
import MaxWidthWrapper from "@/components/common/MaxWidthWrapper";
import DynamicFramerPos from "@/components/common/DynamicFramerPos";

const SetLimits = () => {
  return (
    <section className={`setlimits-section ${styles.sectionPaddingV1}`}>
      <MaxWidthWrapper>
        <div className="grid grid-cols-12 md:gap-y-0 gap-y-12 items-center">
          <div className="col-span-12 md:col-span-6">
            <div className="relative">
              <Image
                className="rounded-2xl bg-gray-100 w-full"
                width={568}
                height={524}
                // quality={85}
                src={BgSetLimitsImage}
                alt="bacgkround image"
              />
              <Image
                quality={85}
                className="absolute top-0 sm:left-2 left-0"
                width={552}
                height={404}
                src={MainSetLimitsImage}
                alt="A chart to show your budget"
              />

              <DynamicFramerPos
                xTransform={40}
                yTransform={-40}
                className="absolute sm:top-56 top-28 sm:left-1/4 xs:left-48 left-10"
              >
                <div
                  className="sm:w-[221px] w-[151px] 
                sm:h-[81px] h-[51px] object-contain"
                >
                  <Image
                    quality={100}
                    src={ExtraSetLimitsImage}
                    alt="a tiny card to show one month revenue"
                  />
                </div>
              </DynamicFramerPos>
            </div>
          </div>
          <div className={`col-span-12 md:col-span-6 lg:pl-24 md:pl-10`}>
            <div className={`mb-3 ${styles.blueLabel}`}>Approval</div>
            <h2 className={`${styles.heading200V} mb-3`}>
              Set limits to help you stick to your budget
            </h2>
            <p className={`${styles.paragraph100} mb-3`}>
              We&apos;ll calculate limits to recommend you based on your
              spending predictions, or simply tell us how much you want to spend
            </p>
            <LinkButton title="Learn More" type="button" />
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default SetLimits;
