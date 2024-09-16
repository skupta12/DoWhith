import { BlackButton } from "@/components/common/Buttons";
import MaxWidthWrapper from "@/components/common/MaxWidthWrapper";
import styles from "@/style";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import HeroFeatureImage from "/public/hero-feature.jpg";
const Hero = () => {
  return (
    <section
      className="feature-section lg:pt-20 pt-10
    lg:pb-24 pb-20 relative"
    >
      <div className="object-cover w-[46vw] h-full absolute top-0 bottom-0 left-auto right-0">
        <Image
          className="object-cover w-full h-full"
          src={HeroFeatureImage}
          alt="The Feature Image"
        />
      </div>
      <MaxWidthWrapper>
        <div className="grid grid-cols-12 gap-0">
          <div className="col-span-6">
            <div
              className="inline-block rounded-full bg-gradient-to-r 
          from-neutral-100 to-primary-300 p-[1px] mb-4"
            >
              <div className="rounded-full bg-white px-4 py-[6px]">
                <span className="text-[14px] font-medium flex items-center gap-x-3">
                  Watch our investment series{" "}
                  <span
                    className="bg-gradient-to-r from-primary-300 to-neutral-100 
                rounded-full px-[10px] py-[2px]"
                  >
                    <ArrowRight color="white" />
                  </span>
                </span>
              </div>
            </div>
            
            <div className="flex flex-col gap-y-5">
              <h1 className={styles.heading100}>
                Employee expense reimbursements
              </h1>
              <p className={styles.paragraph100}>
                Reimburse employee expenses seamlessly, without paperwork.
                Consolidate expense reimbursements alongside all other company
                spending.
              </p>
              <div className="overflow-hidden">
                <BlackButton
                  className="text-[18px] py-[12px]"
                  title="Get Early Access"
                  type="button"
                />
              </div>
              <div className="overflow-hidden">
                <BlackButton
                  className="text-[18px] py-[12px]"
                  title="Get Early Access"
                  type="button"
                />
              </div>
            </div>
          </div>
          <div className="col-span-6"></div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Hero;
