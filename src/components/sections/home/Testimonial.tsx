"use client";

import MaxWidthWrapper from "@/components/common/MaxWidthWrapper";
import { testimonial } from "@/constants";
import styles from "@/style";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useRef } from "react";

const Testimonial = () => {
  const sliderRef = useRef<any>(null);

  type ArrowsProps = {
    className: string;
    style?: string;
  };

  const SamplePrevArrow = ({ className, style }: ArrowsProps) => {
    return (
      <div
        onClick={() => sliderRef.current.slickPrev()}
        className="arrow prev-arrow"
      >
        <ArrowLeft
          absoluteStrokeWidth
          size={64}
          className={`arrows ${className}`}
        />
      </div>
    );
  };

  const SampleNextArrow = ({ className, style }: ArrowsProps) => {
    return (
      <div
        onClick={() => sliderRef.current.slickNext()}
        className="arrow next-arrow"
      >
        <ArrowRight
          absoluteStrokeWidth
          size={64}
          className={`arrows ${className}`}
        />
      </div>
    );
  };

  var settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <section className={`${styles.sectionPaddingV1} bg-primary-100`}>
      <MaxWidthWrapper>
        <div className="border border-white/10 rounded-3xl bg-[#0b091f] relative">
          <Slider ref={sliderRef} {...settings}>
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
                w-[170px] h-[170px] bg-gradient-to-r from-neutral-100 to-primary-300"
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
                          alt="quotes image"
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
                      <div className="sm:flex hidden items-center justify-center gap-4">
                        <SamplePrevArrow
                          className="text-white border w-[50px] h-[50px]
                        rounded-full p-2 cursor-pointer hover:bg-white hover:text-black duration-300"
                        />

                        <SampleNextArrow
                          className="text-white border w-[50px] h-[50px] 
                        rounded-full p-2 cursor-pointer hover:bg-white hover:text-black duration-300"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Testimonial;
