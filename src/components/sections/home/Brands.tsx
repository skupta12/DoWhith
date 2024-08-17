"use client";

import InfinitiveScroller from "@/components/InfinitiveScroller";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

import styles from "@/style";

const Brands = () => {
  return (
    <>
      <section
        className={`brands-section pb-24 bg-primary-100 overflow-hidden`}
      >
        <MaxWidthWrapper className="pt-24 border-t border-white/20">
          <div className="effects">
            <div
              className="white-line absolute -top-[1px] left-1/2 
          transform -translate-x-1/2 w-48 h-[1px]"
            />
            <div
              className="spotlight absolute w-52 h-24 bg-primary-400 -top-20 left-1/2 
          transform -translate-x-1/2 blur-xl opacity-35 rounded-full"
            />
          </div>
          <div className="text-center mb-5">
            <h2
              className={`${styles.heading2} max-w-[750px] mx-auto text-white`}
            >
              Building the future of financial services with leading brands
            </h2>
          </div>
          <div>
            <InfinitiveScroller />
          </div>
        </MaxWidthWrapper>
      </section>

      <div
        className="bottom-slide w-full h-6 bg-gradient-to-r 
    from-primary-300 via-primary-200 to-primary-400 "
      />
    </>
  );
};

export default Brands;
