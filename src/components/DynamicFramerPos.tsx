import { motion, useScroll, useTransform } from "framer-motion";
import { ReactNode, useRef, useState, useEffect } from "react";

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
      style={
        isMobile
          ? { translateX: 0, translateY: 0 }
          : {
              translateX: Xtranslate,
              translateY: Ytranslate,
            }
      }
    >
      {children}
    </motion.div>
  );
};

export default DynamicFramerPos;
