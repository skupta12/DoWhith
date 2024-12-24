"use client";

import MaxWidthWrapper from "@/components/common/MaxWidthWrapper";
import { featureTestimonial } from "@/constants";
import styles from "@/style";
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


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

      <Swiper
        speed={1000}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        centeredSlides={true}
        spaceBetween={20}
        slidesPerView={5}
        className="swiper-container"
        lazyPreloadPrevNext={1}
        
      >
        {featureTestimonial.map(({ src, id, alt }) => (
          <SwiperSlide key={id}>
            <div className="outline-none">
              <Image
                className="rounded-2xl"
                width={370}
                height={485}
                src={src}
                alt={`${id}`}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonial;