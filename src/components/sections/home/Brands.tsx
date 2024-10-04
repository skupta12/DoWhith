"use client";

import MaxWidthWrapper from "@/components/common/MaxWidthWrapper";
import styles from "@/style";
import { brands } from "@/data/placeholder-data";
import InfinitiveScroller from "@/components/common/InfinitiveScroller";
import Image from "next/image";
import InfinitiveScrollerWrapper from "@/components/common/InfinitiveScrollerWrapper";
import { motion } from "framer-motion";

const Brands = () => {
  return (
    <>
      <section className="brands-section pb-24 overflow-hidden bg-primary-100 relative">
        <MaxWidthWrapper className="pt-24 border-t border-white/10">
          <div className="effects">
            <div className="white-line absolute -top-[1px] left-1/2 transform -translate-x-1/2 w-48 h-[1px]" />
            <div
              className="spotlight absolute w-52 h-24 bg-primary-300 -top-20 left-1/2 
            transform -translate-x-1/2 blur-xl opacity-35 rounded-full"
            />
          </div>
          <div className="flex flex-col gap-y-10">
            <div className="text-center">
              <h2
                className={`${styles.heading200} max-w-[750px] mx-auto text-white`}
              >
                Building the future of financial services with leading brands
              </h2>
            </div>

            <div className="relative w-full overflow-hidden">
              <InfinitiveScrollerWrapper Sduration={25}>
                {[...brands, ...brands].map((item, i) => (
                  <motion.div
                   className="relative overflow-hidden min-w-[200px] flex justify-center items-center"
                    key={i}
                  >
                    <Image
                      src={item.src}
                      alt={item.alt}
                      width={159}
                      height={40}
                    />
                  </motion.div> 
                ))}
              </InfinitiveScrollerWrapper>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      <div
        className="bottom-slide w-full h-6 bg-gradient-to-r 
    from-neutral-100 via-purple-500 to-primary-300 "
      />
    </>
  );
};

export default Brands;
