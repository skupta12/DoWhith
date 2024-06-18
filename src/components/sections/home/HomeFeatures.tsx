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
            bgSrc="/home-features/bg-feature-1.png"
            mainSrc="/home-features/main-feature-1.png"
            extraSrc="/home-features/extra-feature-1.png"
          />
        </MaxWidthWrapper>
      </section>
      <section className={styles.sectionPadding}>
        <MaxWidthWrapper>
          <ShowCase
            bgSrc="/home-features/bg-feature-1.png"
            mainSrc="/home-features/main-feature-1.png"
            extraSrc="/home-features/extra-feature-1.png"
          />
        </MaxWidthWrapper>
      </section>
    </>
  );
};

export default HomeFeatures;
