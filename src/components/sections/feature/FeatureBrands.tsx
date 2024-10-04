"use client";

import InfinitiveScroller from "@/components/common/InfinitiveScroller";
import InfinitiveScrollerWrapper from "@/components/common/InfinitiveScrollerWrapper";
import { featureBrands } from "@/data/placeholder-data";
import Image from "next/image";

const FeatureBrands = () => {
  return (
    <section className={`lg:py-16 py-10 overflow-hidden bg-primary-100 relative`}> 
      <div className="">
        <InfinitiveScrollerWrapper Sduration={20} className="overflow-hidden">
          {[...featureBrands, ...featureBrands].map((item, i) => (
            <InfinitiveScroller
              image={`${item}`}
              key={i}
            >
              <Image className="mr-4" src={item.src} alt={`${item.alt} ${i}`} width={20} height={20} />
              <p className="text-white">{item.title}</p>
            </InfinitiveScroller>
          ))}
        </InfinitiveScrollerWrapper>
      </div>
    </section>
  );
};

export default FeatureBrands;
