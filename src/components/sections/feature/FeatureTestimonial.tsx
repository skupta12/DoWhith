"use client";

import MaxWidthWrapper from "@/components/common/MaxWidthWrapper";
import SliderWrapper from "@/components/common/SliderWrapper";
import { featureTestimonial } from "@/constants";
import styles from "@/style";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const FeatureTestimonial = () => {
  return (
    <section
      className={`feature-testimonial-section border-t ${styles.sectionPadding}`}
    >
      <MaxWidthWrapper>
        <div className="feature-text text-center flex flex-col gap-y-6 mb-20">
          <h2 className={`${styles.heading200V} max-w-[800px] mx-auto`}>
            Turn your spend management into a fast, secure
          </h2>
          <p className={`${styles.paragraph100} max-w-[750px] mx-auto`}>
            Reimburse employee expenses seamlessly, without paperwork.
            Consolidate expense reimbursements alongside all other company
            spending.
          </p>
        </div>
      </MaxWidthWrapper>

      <SliderWrapper
        className="carousel mx-auto w-full max-w-[1920px]"
        dots
        lgBreakpoint={1024}
        mdBreakPoint={768}
        autoplay
        infinite
        slidesToShow={5}
      >
        {featureTestimonial.map((item, i) => (
          <div className="outline-none" key={i}>
            <Image
              className="rounded-2xl"
              width={370}
              height={486}
              src={item.src}
              alt={item.alt}
            />
          </div>
        ))}
      </SliderWrapper>
    </section>
  );
};

export default FeatureTestimonial;
