import { ReactNode, useRef } from "react";
import Slider from "react-slick";

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
  children: ReactNode;
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
    speed: 600,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    arrows: arrows,
    swipe: false,
    responsive: [
      ...(lgBreakpoint
        ? [
            {
              breakpoint: lgBreakpoint,
              settings: {
                slidesToShow: 3
              }
            }
          ]
        : []),
      ...(mdBreakPoint
        ? [
            {
              breakpoint: mdBreakPoint,
              settings: {
                slidesToShow: 1
              }
            }
          ]
        : [])
    ]
  };

  return (
    <Slider ref={sliderRef} {...settings} className={className}>
      {children}
    </Slider>
  );
};

export default SliderWrapper;
