import styles from "@/style";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { BlackButton } from "./Buttons";
import Image from "next/image";
import BgCta from "/public/CTA.png";

const Cta = () => {
  return (
    <>
      <section
        className={`${styles.sectionPaddingV1} bg-primary-100 relative overflow-hidden`}
      >
        <Image fill src={BgCta} alt="the background image of CTA" />
        <MaxWidthWrapper>
          <div className="flex flex-col justify-center items-center gap-y-10 text-center">
            <h2 className={`${styles.heading200V} text-white max-w-[900px]`}>
              Switch to smarter spending across your company.
            </h2>
            <BlackButton
              className="text-[18px] py-[12px]"
              title="Get Early Access"
              type="button"
              href="/"
            />
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

export default Cta;
