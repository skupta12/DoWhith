"use client";

import styles from "@/style";
import Image from "next/image";
import { LinkButton } from "../../Buttons";
import BgGetControlImage from "/public/home-features/bg-feature-1.png";
import MainControlImage from "/public/home-features/main-feature-1.png";
import ExtraControlImage from "/public/home-features/extra-feature-1.png";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import DynamicFramerPos from "@/components/DynamicFramerPos";

const ShowCase = () => {
  return (
    <section className={`getcontrol-section ${styles.sectionPaddingV1}`}>
      <MaxWidthWrapper>
        <div className="grid grid-cols-12 md:gap-y-0 gap-y-12 items-center">
          <div className="col-span-12 md:col-span-6">
            <div className="relative">
              <Image
                className="rounded-2xl bg-gray-100 w-full"
                width={568}
                height={524}
                quality={85}
                src={BgGetControlImage}
                alt="feature glass abstract image"
              />
              <Image
                quality={85}
                className="absolute bottom-0 left-0"
                width={472}
                height={524}
                src={MainControlImage}
                alt="Feature image"
              />
              <DynamicFramerPos
                className="absolute bottom-5 sm:left-10 left-5"
                xTransform={40}
                yTransform={-40}
              >
                <div
                  className="lg:w-[254px] 
                md:w-[287px] w-[237px] lg:h-[147px] md:h-[127px] 
                h-[107px] object-contain"
                >
                  <Image
                    quality={85}
                    src={ExtraControlImage}
                    alt="master account showing image"
                  />
                </div>
              </DynamicFramerPos>
            </div>
          </div>
          <div className={`col-span-12 md:col-span-6 lg:pl-24 md:pl-10`}>
            <div className={`mb-3 ${styles.blueLabel}`}>Approval</div>
            <h2 className={`${styles.heading200V} mb-3`}>
              Get control & visibility over every payment
            </h2>
            <p className={`${styles.paragraph100} mb-3`}>
              Establish a request and approval process to increase spend
              accountability without blocking employees.
            </p>
            <LinkButton title="Learn More" type="button" />
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default ShowCase;
