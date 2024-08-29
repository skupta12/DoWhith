"use client";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { testimonial } from "@/data/placeholder-data";
import styles from "@/style";
import Image from "next/image";
// import Testimonial1 from "/public/testimonial/testimonial-1.png";
// import Testimonial2 from "/public/testimonial/testimonial-2.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonial = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    // adaptiveHeight: true,
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />,
    // responsive: [
    //   {
    //     breakpoint: 1300,
    //     settings: {
    //       slidesToShow: 1,
    //     },
    //   },
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       slidesToShow: 2,
    //     },
    //   },
    //   {
    //     breakpoint: 640,
    //     settings: {
    //       slidesToShow: 1,
    //     },
    //   },
    // ],
  };

  return (
    <section className={`${styles.sectionPaddingV1} bg-primary-100`}>
      <MaxWidthWrapper>
        <div className="border border-white/10 rounded-3xl bg-[#0b091f]">
          <Slider {...settings}>
            {testimonial.map((item, i) => (
              <div
                className="overflow-hidden md:py-[70px] py-[60px] md:px-[50px] px-[30px]"
                key={i}
              >
                <div className="grid grid-cols-12 gap-x-5 gap-y-3">
                  <div className="md:col-span-8 col-span-12 order-1">
                    <h2
                      className={`${styles.heading200} text-white lg:text-[42px] 
                      md:text-[34px] sm:text-[28px] text-[24px]`}
                    >
                      <q>{item.title}</q>
                    </h2>{" "}
                    {"extra media queries"}
                  </div>
                  <div className="md:order-2 md:col-span-4 col-span-12 
                  md:justify-self-end">
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
                      <div className="text-white">Arrows</div>
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
