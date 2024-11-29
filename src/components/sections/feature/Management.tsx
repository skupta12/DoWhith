// проблема с картинкой при открытии аккордиона

"use client";

import Accordion from "@/components/common/Accordion";
import MaxWidthWrapper from "@/components/common/MaxWidthWrapper";
import { managementAccordion } from "@/constants";
import styles from "@/style";
import { useState } from "react";
import Image from "next/image";
import ManagementImage from "/public/management.jpg";

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
        <div className="text-center mb-20">
          <span className={`${styles.blueLabel} mb-3`}>Management</span>
          <h2
            className={`text-white max-w-[800px] mx-auto ${styles.heading200V}`}
          >
            Smarter management with real-time insights
          </h2>
        </div>
        <div className="grid lg:grid-cols-[1.25fr,1fr] grid-cols-1 lg:gap-[78px] gap-10">
          <div className="">
            <Image
              quality={90}
              className="object-cover w-full rounded-2xl"
              width={620}
              height={520}
              src={ManagementImage}
              alt="The management image"
            />
          </div>
          <div className="">
            {managementAccordion.map((item, i) => (
              <Accordion
                key={item.id}
                title={item.title}
                content={item.text}
                isActive={activeIndex === i}
                onToggle={() => handleToggle(i)}
              />
            ))}
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Management;
