"use client";

import InfinitiveScroller from "@/components/common/motion/InfinitiveScroller";
import { featureBrands } from "@/constants";
import styles from "@/style";
import { motion } from "framer-motion";
import Image from "next/image";

const FeatureBrands = () => {
  return (
    <section
      className={`feature-brands-section lg:py-16 py-10 overflow-hidden bg-primary-100 relative`}
    >
      <div>
        <InfinitiveScroller Sduration={20} className="overflow-hidden">
          {[...featureBrands, ...featureBrands].map((item, i) => (
            <motion.div
              key={i}
              className={`relative overflow-hidden min-w-[200px] ${styles.flexCenter}`}
            >
              <Image
                className="mr-4"
                src={item.src}
                alt={`${item.alt} ${i}`}
                width={20}
                height={20}
              />
              <p className="text-white">{item.title}</p>
            </motion.div>
          ))}
        </InfinitiveScroller>
      </div>
    </section>
  );
};

export default FeatureBrands;
