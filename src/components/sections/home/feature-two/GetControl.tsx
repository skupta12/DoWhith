"use client";

import styles from "@/style";
import Image from "next/image";
import { LinkButton } from "../../../common/Buttons";
import BgGetControlImage from "/public/home/home-features/bg-feature-1.png";
import MainControlImage from "/public/home/home-features/main-feature-1.png";
import ExtraControlImage from "/public/home/home-features/extra-feature-1.png";
import MaxWidthWrapper from "@/components/common/MaxWidthWrapper";
import DynamicFramerPos from "@/components/common/motion/DynamicFramerPos";
import { Stransition, Ytransition } from "@/components/common/motion/Transitions";

const GetControl = () => {
  return (
    <section className={`getcontrol-section ${styles.sectionPaddingV1}`}>
      <MaxWidthWrapper>
        <div className="grid grid-cols-12 md:gap-y-0 gap-y-12 items-center">
          <div className="col-span-12 md:col-span-6">
            <div className="relative overflow-hidden">
              <Image
                className="rounded-2xl bg-gray-100 w-full"
                width={568}
                height={524}
                quality={85}
                src={BgGetControlImage}
                alt="the features glass abstract image"
              />
              <div
                className="absolute bottom-0 left-0
                    lg:w-[472px] sm:w-[392px] w-[312px] h-[324px] sm:h-[415px] lg:h-[524px]"
              >
                <Ytransition>
                  <Image
                    quality={85}
                    className="object-cover"
                    src={MainControlImage}
                    alt="The features main image"
                  />
                </Ytransition>
              </div>

              <DynamicFramerPos
                className="absolute bottom-5 sm:left-10 left-5"
                xTransform={40}
                yTransform={-40}
              >
                <div
                  className="lg:w-[254px] 
                      md:w-[287px] w-[227px] lg:h-[147px] md:h-[127px] 
                      h-[97px] object-contain"
                >
                  <Stransition scale={0.7}>
                    <Image
                      quality={85}
                      src={ExtraControlImage}
                      alt="master account showing image"
                    />
                  </Stransition>
                </div>
              </DynamicFramerPos>
            </div>
          </div>
          <div className={`col-span-12 md:col-span-6 lg:pl-24 md:pl-10`}>
            <Ytransition>
              <span className={`mb-3 ${styles.blueLabel}`}>Approval</span>
              <h2 className={`${styles.heading200L} mb-3`}>
                Get control & visibility over every payment
              </h2>
              <p className={`${styles.paragraph100} mb-3`}>
                Establish a request and approval process to increase spend
                accountability without blocking employees.
              </p>
              <LinkButton title="Learn More" type="button" />
            </Ytransition>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default GetControl;
