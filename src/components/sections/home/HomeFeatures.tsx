import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import ShowCase from "@/components/ShowCase";
import styles from "@/style";
import React from "react";

const HomeFeatures = () => {
  return (
    <>
      <section className={styles.sectionPadding}>
        <MaxWidthWrapper>
          <ShowCase
            label="Approval"
            title="Get control & visibility over every payment"
            text="Establish a request and approval process to increase spend accountability without blocking employees."
            bgSrc="/home-features/bg-feature-1.png"
            mainSrc="/home-features/main-feature-1.png"
            extraSrc="/home-features/extra-feature-1.png"
          />
        </MaxWidthWrapper>
      </section>
      <section className={styles.sectionPadding}>
        <MaxWidthWrapper>
          <ShowCase
              isReverse
              label="Expense Card"
              title="Issue virtual & physical cards with built-in rules"
              text="Enable faster purchasing by giving every employee access to the funds they need in a safe and secure manner."
              bgSrc="/home-features/bg-feature-2.png"
              mainSrc="/home-features/main-feature-2.png"
              // extraSrc="/home-features/extra-feature-2.png"
          />
        </MaxWidthWrapper>
      </section>
      <section className={styles.sectionPadding}>
        <MaxWidthWrapper>
          <ShowCase
           label="Budget"
           title="Set limits to help you stick to your budget"
           text="We&apos;ll calculate limits to recommend you based on your spending predictions, or simply tell us how much you want to spend"
           bgSrc="/home-features/bg-feature-3.png"
           mainSrc="/home-features/main-feature-3.png"
           extraSrc="/home-features/extra-feature-3.png"
          />
        </MaxWidthWrapper>
      </section>
    </>
  );
};

export default HomeFeatures;
