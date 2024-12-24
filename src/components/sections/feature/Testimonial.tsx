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
        className="carousel mx-auto w-full max-w-[1920px]"
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        speed={1000}
        loop={true}
        centeredSlides={true}
        spaceBetween={20}
        slidesPerView={4}
        lazyPreloadPrevNext={1}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
      >
        {featureTestimonial.map(({ src, id, alt }) => (
          <SwiperSlide key={id}>
            <div className="outline-none">
              <Image
                className="rounded-2xl w-full"
                width={370}
                height={486}
                src={src}
                alt={`${id} ${alt}`}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonial;