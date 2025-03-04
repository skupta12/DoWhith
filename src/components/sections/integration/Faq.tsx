"use client";

import MaxWidthWrapper from "@/components/common/MaxWidthWrapper";
import { faqAccodion } from "@/constants";
import styles from "@/style";
import { useState } from "react";
import Accordion from "@/components/common/Accordion";
import { Ytransition } from "@/components/common/motion/Transitions";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section
      className={`integration-accordion-section ${styles.sectionPaddingV1}`}
    >
      <MaxWidthWrapper className="max-w-[990px]">
        <Ytransition delay={0}>
          <h2 className={styles.heading200M}>Still have questions?</h2>
        </Ytransition>
        <Ytransition delay={0.04}>
          <div className="mt-6">
            {faqAccodion.map(({ id, text, title }, i) => (
              <Accordion
                bgColor="white"
                activeBgColor="#fafafa"
                color="black"
                title={title}
                content={text}
                key={id}
                isActive={activeIndex === i}
                onToggle={() => handleToggle(i)}
              />
            ))}
          </div>
        </Ytransition>
      </MaxWidthWrapper>
    </section>
  );
};

export default Faq;
