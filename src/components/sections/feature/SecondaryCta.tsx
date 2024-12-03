import MaxWidthWrapper from "@/components/common/MaxWidthWrapper";
import styles from "@/style";
import CtaImage from "/public/feature/secondary-cta-image.png";
import Image from "next/image";
import { BlackButton } from "@/components/common/Buttons";

const SecondaryCta = () => {
  return (
    <section className={`${styles.sectionPaddingV1}`}>
      <MaxWidthWrapper>
        <div
          className="bg-primary-100 grid grid-cols-12 lg:px-20 sm:px-10 
        px-6 sm:py-10 py-8 items-center rounded-2xl"
        >
          <div className="cta-text lg:col-span-6 col-span-12 lg:pr-14">
            <h2 className={`text-white mb-3 ${styles.heading200L}`}>
              Contact our award winning team
            </h2>
            <p className={`text-white text-base text-opacity-90 mb-6`}>
              Lorem ipsum dolor sit amet. Qui eaque illum sit saepe repellat aut
              omnis repellat in cupiditate galisum.
            </p>
            <form className="relative">
              <input
                placeholder="Enter your email"
                className="pl-6 pr-[130px] py-[18px] bg-white
                lg:w-full md:w-[280px] w-full rounded-lg placeholder:text-[14px] border-[1px]
                focus:outline-none"
                type="text"
              />
              <div
                className="absolute lg:left-auto md:left-40 
              right-1 top-[10px] overflow-hidden"
              >
                <BlackButton
                  href="/feature"
                  className="rounded-[6px]"
                  type="button"
                  title={"Sign up"}
                />
              </div>
            </form>
          </div>
          <div className="col-span-6 justify-self-end lg:block hidden">
            <Image src={CtaImage} alt="The CTA image" />
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default SecondaryCta;
