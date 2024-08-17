import { BlackButton } from "@/components/Buttons";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import styles from "@/style";
import React from "react";

const Steps = () => {
  return (
    <section className="pb-24 bg-primary-100 overflow-hidden">
      <MaxWidthWrapper className="pt-24 border-t border-white/20">
        <div className="effects">
          <div
            className="white-line absolute -top-[1px] left-1/2 
          transform -translate-x-1/2 w-48 h-[1px]"
          />
          <div
            className="spotlight absolute w-52 h-24 bg-primary-400 -top-20 left-1/2 
          transform -translate-x-1/2 blur-xl opacity-35 rounded-full"
          />
        </div>
        <div className="grid grid-cols-12 gap-0">
          <div className="col-span-5 text-white">
            <div className="text mb-7">
              <div className={`mb-3 ${styles.blueLabel}`}>Approval</div>
              <h2 className={styles.heading2V}>
                Three steps to smarter spending
              </h2>
            </div>
            <div className="overflow-hidden">
              <BlackButton
                className="text-[18px] py-[12px] border border-white/20"
                href=""
                title="Get Early Access"
                type="button"
              />
            </div>
          </div>
          <div className="col-span-7 text-white">Heelo</div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Steps;
