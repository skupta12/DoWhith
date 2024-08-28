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
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    // adaptiveHeight: true,
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className={styles.sectionPadding}>
      <MaxWidthWrapper>
        <div className="border">
          <Slider {...settings}>
          {testimonial.map((item, i) => (
            <div className="grid grid-cols-12 gap-0" key={i}>
              <div className="col-span-7">
                <h2 className={styles.heading200}>{item.title}</h2>
              </div>
              <div className="col-span-5">
                <div className="relative overflow-hidden">
                  <Image width={200} height={100} src={item.src} alt={item.alt} />
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
