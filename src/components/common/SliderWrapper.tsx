import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderWrapper = ({
  dots,
  slidesToShow,
  arrows,
  children,
  className,
  infinite,
  autoplay,
  lgBreakpoint,
  mdBreakPoint
}: {
  dots?: boolean;
  slidesToShow: number;
  arrows?: boolean;
  children: React.ReactNode;
  className?: string;
  infinite?: boolean;
  autoplay?: boolean;
  lgBreakpoint?: number;
  mdBreakPoint?: number;
}) => {
  const sliderRef = useRef<any>(null);

  const settings = {
    dots: dots,
    infinite: infinite,
    autoplay: autoplay,
    slidesToShow: slidesToShow,
    arrows: arrows,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: lgBreakpoint || slidesToShow,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: mdBreakPoint || slidesToShow,
        },
      },
    ],
  };

  return (
    <div className={className}>
      <Slider ref={sliderRef} {...settings}>
        {children}
      </Slider>
    </div>
  );
};

export default SliderWrapper;
;