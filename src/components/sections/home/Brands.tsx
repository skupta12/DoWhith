"use client";

import MaxWidthWrapper from "@/components/common/MaxWidthWrapper";
import styles from "@/style";
import { animate, motion, useMotionValue } from "framer-motion";
import { useEffect, useState } from "react";
import useMeasure from "react-use-measure";
import { brands } from "@/data/placeholder-data";
import InfinitiveScroller from "@/components/common/InfinitiveScroller";

const Brands = () => {
  
  const FAST_DURATION = 25;
  const SLOW_DURATION = 75;

  const [duration, setDuration] = useState(FAST_DURATION);
  let [ref, { width }] = useMeasure();

  const xTranslation = useMotionValue(0);

  const [mustFinish, setMustFinish] = useState(false);
  const [rerender, setRerender] = useState(false);

  useEffect(() => {
    let controls;
    let finalPosition = -width / 2 - 8;

    if (mustFinish) {
      controls = animate(xTranslation, [xTranslation.get(), finalPosition], {
        ease: "linear",
        duration: duration * (1 - xTranslation.get() / finalPosition),
        onComplete: () => {
          setMustFinish(false);
          setRerender(!rerender);
        },
      });
    } else {
      controls = animate(xTranslation, [0, finalPosition], {
        ease: "linear",
        duration: duration,
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 0,
      });
    }
  }, [mustFinish, rerender, xTranslation, width, duration]); // Also make sure dependencies are defined here

  return (
    <>
      <section className="brands-section pb-24 overflow-hidden bg-primary-100 relative">
        {" "}
        {/* убран overflow-hidden */}
        <MaxWidthWrapper className="pt-24 border-t border-white/10">
          <div className="effects">
            <div className="white-line absolute -top-[1px] left-1/2 transform -translate-x-1/2 w-48 h-[1px]" />
            <div className="spotlight absolute w-52 h-24 bg-primary-300 -top-20 left-1/2 transform -translate-x-1/2 blur-xl opacity-35 rounded-full" />
          </div>
          <div className="common-block flex flex-col gap-y-10">
            <div className="text-center">
              <h2
                className={`${styles.heading200} max-w-[750px] mx-auto text-white`}
              >
                Building the future of financial services with leading brands
              </h2>
            </div>

            <div className="relative w-full overflow-hidden">
              <motion.div
                className="flex gap-4 w-max"
                style={{ x: xTranslation }}
                ref={ref}
              >
                {[...brands, ...brands].map((item, idx) => (
                  <InfinitiveScroller image={`${item}`} key={idx} />
                ))}
              </motion.div>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      <div
        className="bottom-slide w-full h-6 bg-gradient-to-r 
    from-neutral-100 via-purple-500 to-primary-300 "
      />
    </>
  );
};

export default Brands;
