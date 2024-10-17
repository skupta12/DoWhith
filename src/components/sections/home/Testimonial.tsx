"use client";

import MaxWidthWrapper from "@/components/common/MaxWidthWrapper";
import { testimonial } from "@/constants";
import styles from "@/style";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderWrapper from "@/components/common/SliderWrapper";

const Testimonial = () => {
  return (
    <section className={`py-2 bg-primary-100`}>
      <MaxWidthWrapper>
        <SliderWrapper
          slidesToShow={1}
          className="border border-white/10 rounded-3xl bg-[#0b091f] relative"
        >
          {testimonial.map((item, i) => (
            <div
              className="overflow-hidden md:py-[70px] py-[60px] md:px-[50px] px-[30px]"
              key={i}
            >
              <div className="grid grid-cols-12 gap-x-5 gap-y-10">
                <div className="md:col-span-8 col-span-12 order-1">
                  <h2
                    className={`text-white lg:text-[42px] 
                      sm:text-[34px] text-[26px] leading-[1.2] font-semibold`}
                  >
                    <q>{item.title}</q>
                  </h2>
                </div>
                <div
                  className="md:order-2 md:col-span-4 col-span-12 
                  md:justify-self-end"
                >
                  <div
                    className="relative overflow-hidden rounded-full 
                      w-[170px] h-[170px] bg-gradient-to-r 
                      from-neutral-100 to-primary-300"
                  >
                    <Image
                      width={166}
                      height={190}
                      src={item.src}
                      alt={item.alt}
                    />
                  </div>
                </div>
                <div className="col-span-12 order-3">
                  <div className="flex justify-between items-center">
                    <div className="flex gap-4">
                      <Image
                        width={46}
                        height={30}
                        src={item.quote}
                        alt="the quotes image"
                      />
                      <div className="title">
                        <h3 className={`${styles.heading300} text-white`}>
                          {item.name}
                        </h3>
                        <span className="sm:text-[18px] font-semibold text-white">
                          {item.position}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </SliderWrapper>
      </MaxWidthWrapper>
    </section>
  );
};

export default Testimonial;
