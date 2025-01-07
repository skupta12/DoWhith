"use client";

import Accordion from "@/components/common/Accordion";
import MaxWidthWrapper from "@/components/common/MaxWidthWrapper";
import { managementAccordion } from "@/constants";
import styles from "@/style";
import { useState } from "react";
import Image from "next/image";
import ManagementImage from "/public/feature/management.jpg";
import { Ytransition } from "@/components/common/motion/Transitions";

const Management = () => {
  
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section
      className={`management-section bg-primary-100 ${styles.sectionPadding}`}
    >
      <MaxWidthWrapper>
        <div className="text-center lg:mb-20 sm:mb-16 mb-10">
          <Ytransition delay={0}>
            <span className={`${styles.blueLabel} mb-3`}>Management</span>
          </Ytransition>
          <Ytransition delay={0.04}>
            <h2
              className={`text-white max-w-[800px] mx-auto ${styles.heading200L}`}
            >
              Smarter management with real-time insights
            </h2>
          </Ytransition>
        </div>

        <Ytransition delay={0.08}>
          <div className="grid lg:grid-cols-[1.25fr,1fr] grid-cols-1 lg:gap-[78px] gap-10">
            <div>
              <Image
                quality={90}
                className="object-cover w-full rounded-2xl"
                width={620}
                height={520}
                src={ManagementImage}
                alt="The management image"
              />
            </div>
            <div>
              {managementAccordion.map((item, i) => (
                <Accordion
                  key={item.id}
                  style={{ marginBottom: "24px" }}
                  bgColor="#0b091f"
                  color="white"
                  title={item.title}
                  content={item.text}
                  isActive={activeIndex === i}
                  onToggle={() => handleToggle(i)}
                />
              ))}
            </div>
          </div>
        </Ytransition>
      </MaxWidthWrapper>
    </section>
  );
};

export default Management;
