import { BlackButton } from "@/components/Buttons";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import styles from "@/style";
import { ArrowRight } from "lucide-react";
import React from "react";

const Hero = () => {
  return (
    <section
      className="hero-section lg:pt-20 pt-10
    lg:pb-24 pb-20 relative overflow-hidden"
    >
      <MaxWidthWrapper>
        <div className="grid grid-cols-12 gap-0">
          <div className="col-span-7">
            <div
              className="inline-block rounded-full bg-gradient-to-r 
          from-neutral-100 to-primary-300 p-[1px]"
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
            <h1 className={styles.heading100}>
              Employee expense reimbursements
            </h1>
            <p className={styles.paragraph100}>
              Reimburse employee expenses seamlessly, without paperwork.
              Consolidate expense reimbursements alongside all other company
              spending.
            </p>
            <BlackButton title="Get Early Access" type="button"  />
          </div>
          <div className="col-span-6"></div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Hero;
