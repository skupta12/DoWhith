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
    loop,
    space,
    slidesPerView,
    pagination,
    centeredSlides,
    effect,
    mdBreakpoint,
    smBreakpoint,
    xsBreakpoint,

} : 
{ 
    children: ReactNode;
    className: string
    loop?: boolean;
    space?: number;
    slidesPerView?: number;
    pagination?: boolean;
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
        pagination: pagination ? { clickable: true } : false,
        autoplay: { delay: 5000 },
        loop: loop,
        spaceBetween: space,
        slidesPerView: slidesPerView,
        centeredSlides: centeredSlides,
        effect: effect, // Используем значение пропса effect или значение по умолчанию
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