import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import { ReactNode } from "react";
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import 'swiper/css/effect-coverflow';
import React from "react";

const Carousel = ({ 
    children, 
    className,
    space,
    slidesPerView,
    centeredSlides,
    effect,
    mdBreakpoint,
    smBreakpoint,
    xsBreakpoint,
} : 
{ 
    children: ReactNode;
    className: string
    space?: number;
    slidesPerView?: number;
    centeredSlides?: boolean;
    effect?: string;
    mdBreakpoint?: number;
    smBreakpoint?: number;
    xsBreakpoint?: number;
}) => {
    const settings = {
        modules: [Navigation, Pagination, Autoplay, EffectCoverflow],
        navigation: { nextEl: ".arrow-left", prevEl: ".arrow-right" },
        speed: 800,
        autoplay: { delay: 5000 },
        loop: true,
        spaceBetween: space,
        slidesPerView: slidesPerView,
        centeredSlides: centeredSlides,
        effect: effect,
        ...(effect === "coverflow" && {
            coverflowEffect: {
                rotate: 0,
                stretch: 0,
                depth: 23,
                modifier: 1,
                slideShadows: false,
            }
        }),
        breakpoints: {
            320: {
                slidesPerView: xsBreakpoint,
            },
            640: {
                slidesPerView: smBreakpoint,
            },
            768: {
              slidesPerView: mdBreakpoint,

            },
          },
    };
  
    return (
        <Swiper {...settings} className={className}>
            {React.Children.map(children, (child, index) => (
                <SwiperSlide key={index}>
                    {child}
                </SwiperSlide>
            ))}
        </Swiper>
    );
}

export default Carousel;