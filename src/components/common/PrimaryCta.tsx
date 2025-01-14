import styles from "@/style";
import Image from "next/image";
import BgCta from "/public/common/CTA.png";
import { Ytransition } from "@/components/common/motion/Transitions";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { BlackButton } from "./Buttons";

const PrimaryCta = () => {
  return (
    <>
      <section
        className={`primary-cta-section lg:py-32 py-16 bg-primary-100 relative overflow-hidden`}
      >
        <Image fill src={BgCta} alt="The background image of CTA" />
        <MaxWidthWrapper>
            <div
              className={`${styles.flexCenter} flex-col gap-y-10 text-center`}
            >
              <Ytransition>
              <h2 className={`${styles.heading200L} text-white max-w-[900px]`}>
                Switch to smarter spending across your company.
              </h2>
              </Ytransition>
              <Ytransition>
              <BlackButton
                className="text-[18px] py-[12px]"
                title="Get Early Access"
                href="/log-in"
              />
              </Ytransition>
             
            </div>
       
        </MaxWidthWrapper>
      </section>
      <div
        className="bottom-slide w-full h-6 bg-gradient-to-r 
  from-neutral-100 via-purple-500 to-primary-300 "
      />
    </>
  );
};

export default PrimaryCta;
