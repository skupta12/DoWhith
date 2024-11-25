import { BlackButton } from "@/components/common/Buttons";
import MaxWidthWrapper from "@/components/common/MaxWidthWrapper";
import styles from "@/style";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import HeroFeatureImage from "/public/feature/hero-feature.jpg";
import BlackStar from "/public/black-star.png";
import MasterAccount from "/public/feature/master-account.png";
import Spending from "/public/feature/spending.png";

const Hero = () => {
  return (
    <section
      className="feature-hero-section lg:pt-20 pt-10 lg:pb-24 pb-20 relative"
    >
      <div className="object-cover w-[46vw] h-[130%] absolute -top-32 
      bottom-0 left-auto right-0 -z-[1]">
        <Image
          className="object-cover w-full h-full lg:block hidden"
          src={HeroFeatureImage}
          alt="The Feature Image"
          priority
        />
      </div>

      <MaxWidthWrapper>
        <div className="grid grid-cols-12 gap-0">
          <div className="lg:col-span-6 col-span-12">
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
              <div className="flex items-center">
                <div className="inline-flex items-center gap-x-2 p-4">
                  {Array(5)
                    .fill(0)
                    .map((_, index) => (
                      <Image width={16} height={16} key={index} src={BlackStar} alt="The black star" />
                    ))}
                </div>
                <p className={styles.paragraph100}>772+ reviews</p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-6 col-span-12">
            <div className="relative h-full lg:block hidden">
              <Image
                className="absolute left-8 -bottom-4 rounded-lg"
                src={MasterAccount}
                alt="The master account image"
              />
              <Image
                className="absolute left-32 bottom-44 rounded-lg"
                src={Spending}
                alt="The spending image"
              />
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Hero;
