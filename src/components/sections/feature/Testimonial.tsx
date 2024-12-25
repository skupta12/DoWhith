"use client";

import Carousel from "@/components/common/Carousel";
import MaxWidthWrapper from "@/components/common/MaxWidthWrapper";
import { featureTestimonial } from "@/constants";
import styles from "@/style";
import Image from "next/image";

const Testimonial = () => {
  return (
    <section
      className={`feature-testimonial-section border-t ${styles.sectionPadding}`}
    >
      <MaxWidthWrapper>
        <div
          className="feature-text text-center flex flex-col 
        gap-y-6 lg:mb-20 sm:mb-16 mb-10"
        >
          <h2 className={`${styles.heading200L} max-w-[800px] mx-auto`}>
            Turn your spend management into a fast, secure
          </h2>
          <p className={`${styles.paragraph100} max-w-[750px] mx-auto`}>
            Reimburse employee expenses seamlessly, without paperwork.
            Consolidate expense reimbursements alongside all other company
            spending.
          </p>
        </div>
      </MaxWidthWrapper>

      <Carousel
        className="carousel mx-auto w-full max-w-[1920px] select-none"   
        space={20}
        centeredSlides      
        effect="coverflow"
        mdBreakpoint={5}
        smBreakpoint={2}
        xsBreakpoint={2}
      >
        {featureTestimonial.map(({ src, id, alt }) => (
            <div key={id}>
              <Image
                quality={100}
                className="rounded-2xl mx-auto object-cover"
                width={370}
                height={486}
                src={src}
                alt={`${id} ${alt}`}
              />
            </div>
        ))}
      </Carousel>
    </section>
  );
};

export default Testimonial;