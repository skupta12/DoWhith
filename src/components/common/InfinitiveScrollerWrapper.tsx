"use client";

import { animate, motion, useMotionValue } from "framer-motion";
import { ReactNode, useEffect, useState } from "react";
import useMeasure from "react-use-measure";

const InfinitiveScrollerWrapper = ({
  children,
  className,
  Sduration,
  
}: {
  children: ReactNode;
  className?: string;
  Sduration?: number;
}) => {
  let DURATION = Sduration; 

  const [duration, setDuration] = useState(DURATION);
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
        //@ts-expect-error
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
  }, [mustFinish, rerender, xTranslation, width, duration]);
  return (
    <motion.div
      className="flex gap-4 w-max"
      style={{ x: xTranslation }}
      ref={ref}
    >
      {children}
    </motion.div>
  );
};

export default InfinitiveScrollerWrapper;
