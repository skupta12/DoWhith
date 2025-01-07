import { BlackButton } from "@/components/common/Buttons";
import MaxWidthWrapper from "@/components/common/MaxWidthWrapper";
import styles from "@/style";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import BlackStar from "/public/feature/hero/black-star.png";
import HeroIcon1 from "/public/integration/hero-icon-1.png";
import HeroIcon2 from "/public/integration/hero-icon-2.png";
import HeroIcon3 from "/public/integration/hero-icon-3.png";
import HeroIcon4 from "/public/integration/hero-icon-4.png";
import { Ytransition } from "@/components/common/motion/Transitions";

const Hero = () => {
  return (
    <section
      className={`feature-hero-section ${styles.routeSectionPadding} relative overflow-hidden`}
    >
      <div className="absolute top-[75%] left-0 right-0 w-[105vw] h-[700px]">
        <Image
          priority
          className="object-cover"
          fill
          quality={90}
          src="https://cdn.prod.website-files.com/65a9f49b837859a8d466af31/65b48cc27db264a75dec9169_glass-abstract-gray.png"
          alt="The details post image"
        />
      </div>
      <MaxWidthWrapper>
        <div className="grid grid-cols-12 lg:gap-10 gap-6">
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
                  New integrations available{" "}
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
              <h1 className={`text-primary-200 lg:text-[64px] 
                md:text-[52px] text-[42px] font-semibold leading-[1.1]`}>
                Apps integrate all the tools you use to run your business
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
                  type="button"
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
          <div className="lg:col-span-6 col-span-12 lg:pl-10">
            <Ytransition>

        
            <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
              <div className="flex gap-6 lg:mb-6" style={{ flexFlow: "column" }}>
                <div
                  className="bg-white flex justify-start 
                  items-start p-7 rounded-lg shadow-sm"
                  style={{ flexFlow: "column" }}
                >
                  <Image
                    src={HeroIcon1}
                    width={40}
                    height={40}
                    alt={`The hero icon 1`}
                  />
                  <h6 className="sm:text-[20px] text-[18px] font-semibold mt-4 mb-2">
                    Pricing Generator
                  </h6>
                  <p className="text-base">
                    Generate multi-currencies prices at current exchange rate in
                    one click
                  </p>
                </div>
                <div
                  className="bg-white flex justify-start 
                  items-start p-7 rounded-lg shadow-sm"
                  style={{ flexFlow: "column" }}
                >
                  <Image
                    src={HeroIcon2}
                    width={40}
                    height={40}
                    alt={`The hero icon 2`}
                  />
                  <h6 className="sm:text-[20px] text-[18px] font-semibold mt-4 mb-2">
                    Invoice & Customer Uploader
                  </h6>
                  <p className="text-base">
                    Create an online store to sell your products with AI
                  </p>
                </div>
              </div>
              <div
                className="flex gap-6 lg:justify-end lg:items-stretch"
                style={{ flexFlow: "column" }}
              >
                <div
                  className="bg-white flex justify-start 
                  items-start p-7 rounded-lg shadow-sm"
                  style={{ flexFlow: "column" }}
                >
                  <Image
                    src={HeroIcon3}
                    width={40}
                    height={40}
                    alt={`The hero icon 3`}
                  />
                  <h6 className="sm:text-[20px] text-[18px] font-semibold mt-4 mb-2">
                    Reetail
                  </h6>
                  <p className="text-base">
                    Create an online store to sell your products with AI
                  </p>
                </div>
                <div
                  className="bg-white flex p-7 justify-center 
                  items-center rounded-lg shadow-sm"
                  style={{ flexFlow: "column" }}
                >
                  <Image
                    src={HeroIcon4}
                    width={144}
                    height={47}
                    alt={`The hero icon`}
                    className="mb-4"
                  />
                  <BlackButton
                  className="text-[18px] py-[12px]"
                  title="Connect"
                  type="button"
                />
                </div>
              </div>
            </div>
            </Ytransition>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Hero;
