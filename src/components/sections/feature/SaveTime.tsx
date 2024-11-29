"use client";

import styles from "@/style";
import Image from "next/image";
import BgSetLimitsImage from "/public/home-features/bg-feature-3.png";
import MainSetLimitsImage from "/public/home-features/main-feature-3.png";
import ExtraSetLimitsImage from "/public/home-features/extra-feature-3.png";
import MaxWidthWrapper from "@/components/common/MaxWidthWrapper";
import DynamicFramerPos from "@/components/common/DynamicFramerPos";
import MarkImage from "/public/mark.png";

const SaveTime = () => {
  return (
    <section
      className={`time-section bg-neutral-50 ${styles.sectionPadding}`}
    >
      <MaxWidthWrapper>
        <div className="grid grid-cols-12 md:gap-y-0 gap-y-12 items-center">
          <div className={`col-span-12 md:col-span-6 lg:pr-24 md:pr-10`}>
            <span className={`mb-3 ${styles.blueLabel}`}>Manage</span>
            <h2 className={`${styles.heading200} mb-6`}>
              Save time with faster and easier approval process
            </h2>
            <h3 className={`${styles.heading300V} mb-4`}>
              Approve or reject the different invoices.
            </h3>
            <div className="flex flex-col gap-y-3">
              <div className="flex items-center gap-x-3">
                <Image src={MarkImage} alt="The mark icon" />
                <p>Review all invoices before payment, if needed</p>
              </div>
              <div className="flex items-center gap-x-3">
                <Image src={MarkImage} alt="The mark icon" />
                <p>Invite teammates so they can help you</p>
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6">
            <div className="relative">
              <Image
                className="rounded-2xl bg-gray-100 w-full"
                width={568}
                height={524}
                quality={100}
                src={BgSetLimitsImage}
                alt="bacgkround image"
              />
              <Image
                quality={100}
                className="absolute top-0 sm:left-2 left-0"
                width={552}
                height={404}
                src={MainSetLimitsImage}
                alt="A chart to show your budget"
              />

              <div
                // xTransform={40}
                // yTransform={-40}
                className="absolute sm:top-56 top-28 sm:left-1/4 xs:left-48 left-10"
              >
                <div
                  className=" sm:w-[221px] w-[151px] 
                sm:h-[81px] h-[51px] object-cover"
                >
                  <Image
                    src={ExtraSetLimitsImage}
                    alt="a tiny card to show one month revenue"
                    quality={100}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default SaveTime;
