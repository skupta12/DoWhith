"use client";

import styles from "@/style";
import Image from "next/image";
import { LinkButton } from "../../../common/Buttons";
import BgGetControlImage from "/public/home/home-features/bg-feature-2.png";
import MainControlImage from "/public/home/home-features/main-feature-2.png";
import MaxWidthWrapper from "@/components/common/MaxWidthWrapper";
import { Ytransition } from "@/components/common/motion/Transitions";

const IssueVirtual = () => {
  return (
    <section className={`issuevirtual-section ${styles.sectionPaddingV1}`}>
      <MaxWidthWrapper>
        <div className="grid grid-cols-12 md:gap-y-0 gap-y-12 items-center">
          <div
            className={`col-span-12 md:col-span-6 lg:pr-24 md:pr-10 md:order-1 order-2`}
          >
            <Ytransition>
              <span className={`mb-3 ${styles.blueLabel}`}>Expense Card</span>
              <h2 className={`${styles.heading200L} mb-3`}>
                Issue virtual & physical cards with built-in rules
              </h2>
              <p className={`${styles.paragraph100} mb-3`}>
                Establish a request and approval process to increase spend
                accountability without blocking employees.
              </p>
              <LinkButton title="Learn More" href="/feature" />
            </Ytransition>
          </div>
          <div className="col-span-12 md:col-span-6 order-1">
            <div className="relative overflow-hidden">
              <Image
                className="rounded-2xl bg-gray-100 w-full"
                width={568}
                height={577}
                quality={85}
                src={BgGetControlImage}
                alt="The background image"
              />

              <div className="absolute sm:-bottom-20 -bottom-16 md:left-20 left-1/4">
                <div
                  className="lg:w-[369px] 
                xs:w-[289px] w-[200px] lg:h-[488px] xs:h-[408px] 
                h-[300px] object-contain"
                >
                  <Ytransition>
                    <Image
                      className="justify-self-end"
                      quality={85}
                      src={MainControlImage}
                      alt="The mobile image"
                    />
                  </Ytransition>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default IssueVirtual;
