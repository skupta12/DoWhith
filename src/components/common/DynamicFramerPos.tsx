import { PosTypes } from "@/types/types";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const DynamicFramerPos = ({
  children,
  xTransform,
  yTransform,
  className,
  style,
  elStartOffset = 2,
  elEndOffset = 8,

}: PosTypes) => {
  
  const ref = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  // const elStartOffset2 = 2; // Значение должно быть числом
  // const elEndOffset2 = 10;
  

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [`${elStartOffset} 1`, `${elEndOffset} 1`],
  });

  const Xtranslate = useTransform(scrollYProgress, [0, 1], [0, xTransform]);
  const Ytranslate = useTransform(scrollYProgress, [0, 1], [0, yTransform]);

  // Add opacity transform based on scrollYProgress
  // const animatedOpacity = useTransform(scrollYProgress, [0, 1], [0, opacity ?? 1]);

  return (
    <motion.div
      className={`${className} transition ease-linear duration-100`}
      initial={{ translateX: 0, translateY: 0 }}
      ref={ref}
      style={{
        ...style,
        ...(isMobile
          ? { translateX: 0, translateY: 0 }
          : {
              translateX: Xtranslate,
              translateY: Ytranslate,
            }),
      }}
    >
      {children}
    </motion.div>
  );
};

export default DynamicFramerPos;