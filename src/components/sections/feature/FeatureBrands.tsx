"use client";

import InfinitiveScroller from "@/components/common/InfinitiveScroller";
import { featureBrands } from "@/constants";
import { motion } from "framer-motion";
import Image from "next/image";

const FeatureBrands = () => {
  return (
    <section className={`lg:py-16 py-10 overflow-hidden bg-primary-100 relative`}> 
      <div className="">
        <InfinitiveScroller Sduration={20} className="overflow-hidden">
          {[...featureBrands, ...featureBrands].map((item, i) => (
            <motion.div
              key={i}
              className="relative overflow-hidden min-w-[200px] flex justify-center items-center"
            >
              <Image className="mr-4" src={item.src} alt={`${item.alt} ${i}`} width={20} height={20} />
              <p className="text-white">{item.title}</p>
              </motion.div>
          ))}
        </InfinitiveScroller>
      </div>
    </section>
  );
};

export default FeatureBrands;
