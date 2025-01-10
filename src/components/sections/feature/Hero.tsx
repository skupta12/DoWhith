import { BlackButton } from "@/components/common/Buttons";
import MaxWidthWrapper from "@/components/common/MaxWidthWrapper";
import styles from "@/style";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import HeroFeatureImage from "/public/feature/hero/hero-feature.jpg";
import BlackStar from "/public/feature/hero/black-star.png";
import MasterAccount from "/public/feature/hero/master-account.png";
import Spending from "/public/feature/hero/spending.png";
import { Ytransition } from "@/components/common/motion/Transitions";

const Hero = () => {
  return (
    <section
      className={`feature-hero-section ${styles.routeSectionPadding} relative`}
    >
      <Ytransition
        y={0}
        className="object-cover w-[46vw] h-[130%] absolute -top-32 
      bottom-0 left-auto right-0 -z-[2] lg:block hidden"
      >
        <Image
          className="object-cover w-full h-full"
          src={HeroFeatureImage}
          alt="The Feature Image"
          priority
        />
      </Ytransition>

      <MaxWidthWrapper>
        <div className="grid grid-cols-12">
          <div className="lg:col-span-6 col-span-12">
            <Ytransition delay={0}>
              <div
                className="inline-block rounded-full bg-gradient-to-r 
          from-neutral-100 to-primary-300 p-[1px] mb-4"
              >
                <div className="rounded-full bg-white px-4 py-[6px]">
                  <span
                    className={`text-[14px] font-medium ${styles.flexItems} gap-x-3`}
                  >
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
            </Ytransition>

            <div className="flex flex-col gap-y-5">
              <Ytransition delay={0.04}>
                <h1 className={`${styles.heading100L}`}>
                  Employee expense reimbursements
                </h1>
              </Ytransition>
              <Ytransition delay={0.08}>
                <p className={styles.paragraph100}>
                  Reimburse employee expenses seamlessly, without paperwork.
                  Consolidate expense reimbursements alongside all other company
                  spending.
                </p>
              </Ytransition>
              <Ytransition delay={0.12}>
                <div className="overflow-hidden">
                  <BlackButton
                    className="text-[18px] py-[12px]"
                    title="Get Early Access"
                    href="/log-in"
                  />
                </div>
              </Ytransition>
              <Ytransition delay={0.16}>
                <div className={`${styles.flexItems}`}>
                  <div className="inline-flex items-center gap-x-2 p-4">
                    {Array(5)
                      .fill(0)
                      .map((_, index) => (
                        <Image
                          width={16}
                          height={16}
                          key={index}
                          src={BlackStar}
                          alt="The black star"
                        />
                      ))}
                  </div>
                  <p className={styles.paragraph100}>772+ reviews</p>
                </div>
              </Ytransition>
            </div>
          </div>
          <div className="lg:col-span-6 col-span-12">
            <Ytransition
              x={60}
              y={0}
              className="relative h-full lg:block hidden"
            >
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
            </Ytransition>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Hero;
