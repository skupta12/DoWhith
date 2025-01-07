import MaxWidthWrapper from "@/components/common/MaxWidthWrapper";
import { steps } from "@/constants";
import styles from "@/style";
import Image from "next/image";
import StepsImage from "/public/feature/steps-image.jpg";
import ReceiveImage from "/public/feature/receive.png";
import { Ytransition } from "@/components/common/motion/Transitions";

const FeatureSteps = () => {
  return (
    <section className={`howitworks-section ${styles.sectionPadding}`}>
      <MaxWidthWrapper>
        <div className="lg:mb-20 sm:mb-16 mb-10 text-center">
          <Ytransition delay={0}>
          <span className={`${styles.blueLabel} mb-3`}>How it works</span>
          </Ytransition>
          <Ytransition delay={0.04}>
          <h2 className={styles.heading200L}>
            Three steps to smarter spending
          </h2>
          </Ytransition>
          
        </div>
        <Ytransition delay={0.08}>
        <ul className="grid grid-cols-12 gap-6 mb-6">
          {steps.map((item, i) => (
            <li
              key={i}
              className={`${
                i === 2 ? "col-span-12" : "sm:col-span-6"
              } lg:col-span-4 col-span-12 flex flex-col gap-y-5`}
            >
              <span
                className="w-[40px] h-[40px] bg-primary-300 rounded-full overflow-hidden 
              flex justify-center font-semibold text-[20px] items-center text-white"
              >
                {item.id}
              </span>
              <h3 className={styles.heading300M}>{item.title}</h3>
              <p className={styles.paragraph100}>{item.text}</p>
            </li>
          ))} 
        </ul>
        </Ytransition>
        <Ytransition delay={0.12}>
        <div className="relative">
            <div>
              <Image
                quality={90}
                className="w-full sm:h-full h-[200px] object-cover rounded-lg"
                src={StepsImage}
                alt="The steps image"
              />
            </div>

            <div
              className="absolute md:bottom-10 bottom-6 md:right-10 
            right-6 md:w-auto md:h-auto w-[200px] h-[65px]"
            >
              <Image src={ReceiveImage} alt="The receive image" />
            </div>
          </div>
        </Ytransition>
      
      </MaxWidthWrapper>
    </section>
  );
};

export default FeatureSteps;
