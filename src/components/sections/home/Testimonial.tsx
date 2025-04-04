"use client";

import MaxWidthWrapper from "@/components/common/MaxWidthWrapper";
import { testimonial } from "@/constants";
import styles from "@/style";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Carousel from "@/components/common/Carousel";
import { Ytransition } from "@/components/common/motion/Transitions";

const Testimonial = () => {
  return (
    <section className={`bg-primary-100`}>
      <MaxWidthWrapper>
        <Ytransition className="relative">
          <div className="sm:flex absolute bottom-[72px] right-20 gap-x-5 hidden z-[111]">
            <button
              type="button"
              className="duration-500 arrow-right hover:bg-neutral-50 text-white 
                        hover:text-primary-200 border border-neutral-50 rounded-full p-3"
            >
              <ArrowLeft absoluteStrokeWidth size={24} />
            </button>
            <button
              type="button"
              className="duration-500 arrow-left hover:bg-neutral-50 text-white 
                        hover:text-primary-200 border border-neutral-50 rounded-full p-3"
            >
              <ArrowRight absoluteStrokeWidth size={24} />
            </button>
          </div>
          <Carousel
            className="carousel border border-white/10 rounded-3xl bg-[#0b091f] relative"
            space={20}
            slidesPerView={1}
            mdBreakpoint={1}
            smBreakpoint={1}
            xsBreakpoint={1}
          >
            {testimonial.map((item, i) => (
              <div
                key={i}
                className="overflow-hidden md:py-[70px] py-[60px] md:px-[50px] px-[30px]"
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
                        height={199}
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
                          <h3 className={`${styles.heading300L} text-white`}>
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
          </Carousel>
        </Ytransition>
      </MaxWidthWrapper>
    </section>
  );
};

export default Testimonial;
