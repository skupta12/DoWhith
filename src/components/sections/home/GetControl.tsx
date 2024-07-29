"use client";

import styles from "@/style";
import Image from "next/image";
import { LinkButton } from "../../Buttons";
import BgGetControlImage from "/public/home-features/bg-feature-1.png";
import MainControlImage from "/public/home-features/main-feature-1.png";
import ExtraControlImage from "/public/home-features/extra-feature-1.png";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
// import { motion } from "framer-motion";

const ShowCase = () => {
  return (
    <section className={styles.sectionPaddingV1}>
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
                alt="bg part image"
              />
              <Image
                quality={85}
                className="absolute bottom-0 left-0"
                width={472}
                height={524}
                src={MainControlImage}
                alt="main part image"
              />
              {/* <motion.div> */}
              <Image
                className="absolute bottom-5 sm:left-10 left-5 lg:w-[304px] 
                md:w-[287px] w-[267px] lg:h-[147px] md:h-[127px] h-[107px] object-contain"
                quality={85}
                src={ExtraControlImage}
                alt="extra part image"
              />
              {/* </motion.div> */}
            
            </div>
          </div>
          <div className={`col-span-12 md:col-span-6 lg:pl-24 md:pl-10`}>
            <div className={`mb-3 ${styles.blueLabel}`}>
              Approval
            </div>
            <h2 className={`${styles.heading2V} mb-3`}>
              Get control & visibility over every payment
            </h2>
            <p className={`${styles.paragraph} mb-3`}>
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
