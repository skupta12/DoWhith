import { motion, useScroll, useTransform } from "framer-motion";
import { ReactNode, useRef } from "react";

const DynamicFramerPos = ({
  children,
  xTransform,
  yTransform,
  className,
}: {
  children: ReactNode;
  xTransform?: number;
  yTransform?: number;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["1 1", "10 1"],
  });

  const Xtranslate = useTransform(scrollYProgress, [0, 1], [0, xTransform]);
  const Ytranslate = useTransform(scrollYProgress, [0, 1], [0, yTransform]);

  return (
    <motion.div
    className={`${className} transition ease-linear duration-75`}
      initial={{ translateX: 0, translateY: 0 }}
      ref={ref}
      style={{
        translateX: Xtranslate,
        translateY: Ytranslate,
      }}
    >
      {children}
    </motion.div>
  );
};

export default DynamicFramerPos;
