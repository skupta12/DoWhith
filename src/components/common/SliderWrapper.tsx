import { DragControls } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { ReactNode, useRef } from "react";
import Slider from "react-slick";

const SliderWrapper = ({
  dots,
  slidesToShow,
  arrows,
  children,
  className,
  infinite,
  autoplay
}: {
  dots?: boolean;
  slidesToShow: number;
  arrows?: boolean;
  children: ReactNode;
  className?: string;
  infinite?: boolean;
  autoplay?: boolean;
}) => {
  const sliderRef = useRef<any>(null);

  // type ArrowsProps = {
  //   className?: string;
  //   style?: string;
  // };

  // const SamplePrevArrow = ({ className, style }: ArrowsProps) => {
  //   return (
  //     <div
  //       onClick={() => sliderRef.current.slickPrev()}
  //       className="arrow prev-arrow"
  //     >
  //       <ArrowLeft
  //         absoluteStrokeWidth
  //         size={64}
  //         className={`arrows ${className}`}
  //       />
  //     </div>
  //   );
  // };

  // const SampleNextArrow = ({ className, style }: ArrowsProps) => {
  //   return (
  //     <div
  //       onClick={() => sliderRef.current.slickNext()}
  //       className="arrow next-arrow"
  //     >
  //       <ArrowRight
  //         absoluteStrokeWidth
  //         size={64}
  //         className={`arrows ${className}`}
  //       />
  //     </div>
  //   );
  // };

  const settings = {
    dots: dots,
    infinite: infinite,
    autoplay: autoplay,
    speed: 600,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    arrows: arrows,  // Если arrows = true, стрелки будут отображаться

  };

  return (
    <Slider ref={sliderRef} {...settings} className={className}>
        {children}    
    </Slider>
  );
};

export default SliderWrapper;
