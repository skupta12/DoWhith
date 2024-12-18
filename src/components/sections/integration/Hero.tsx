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


const Hero = () => {
  return (
    <section
      className={`feature-hero-section ${styles.routeSectionPadding} relative`}
    >
      <MaxWidthWrapper>
        <div className="grid grid-cols-12">
          <div className="lg:col-span-6 col-span-12">
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

            <div className="flex flex-col gap-y-5">
              <h1 className={`${styles.heading100L} lg:text-[64px]`}>
                Apps integrate all the tools you use to run your business
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
            </div>
          </div>
          <div className="lg:col-span-6 col-span-12">
            <div className="integration-box gap-6">
              <div className="integration-box-wrapper">
              <div className="integration-card">
                <Image src={HeroIcon1} width={40} height={40} alt={`The hero icon`} />
                <h6 className="sm:text-[20px] text-[18px] font-semibold mt-4 mb-2">Pricing Generator</h6>
                <p className="text-base">Generate multi-currencies prices at current exchange rate in one click</p>
              </div>
              <div className="integration-card">
                <Image src={HeroIcon1} width={40} height={40} alt={`The hero icon`} />
                <h6 className="sm:text-[20px] text-[18px] font-semibold mt-4 mb-2">Invoice & Customer Uploader</h6>
                <p className="text-base">Create an online store to sell your products with AI</p>
              </div>
              </div>
                    <div className="integration-box-wrapper second-column">
                    <div className="integration-card">
                <Image src={HeroIcon1} width={40} height={40} alt={`The hero icon`} />
                <h6 className="sm:text-[20px] text-[18px] font-semibold mt-4 mb-2">Reetail</h6>
                <p className="text-base">Create an online store to sell your products with AI</p>
              </div>
              <div className="integration-card flex-center">
                <Image src={HeroIcon1} width={40} height={40} alt={`The hero icon`} />
                <h6 className="sm:text-[20px] text-[18px] font-semibold mt-4 mb-2">Reetail</h6>
                {/* <p className="text-base">Create an online store to sell your products with AI</p> */}
               
              </div>
                    </div>
              
            </div>
        </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Hero;
