import { useScroll, useTransform } from "framer-motion";
import { ReactNode, useRef } from "react";

const DynamicFramerPos = ({
  children,
  initialTransform,
  finalTransform,
  opacity,
}: {
  initialTransform: string;
  finalTransform: string;
  children: ReactNode;
}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["1.7 1", "10 1"],
  });

  const transformStyles = {
    translateX: useTransform(
      scrollYProgress,
      [0, 1],
      initialTransform.translateX
    ),
    translateY: useTransform(
      scrollYProgress,
      [0, 1],
      initialTransform.translateY
    ),
  };

  if (finalTransform) {
    transformStyles.translateX = useTransform(
      scrollYProgress,
      [0, 1],
      finalTransform.translateX
    );
    transformStyles.translateY = useTransform(
      scrollYProgress,
      [0, 1],
      finalTransform.translateY
    );
  }

  const opacityStyle = opacity ? { opacity: scrollYProgress } : {};

  return (
    <motion.div
      className="transition ease-linear duration-75"
      initial={{ translateX: 0, translateY: 0, opacity: 0 }}
      ref={ref}
      style={{ ...transformStyles, ...opacityStyle }}
    >
      <div className="bg-white p-2 rounded-lg">
        <Image
          width={33}
          height={32}
          className="text-center mx-auto mb-1"
          src={icon}
          alt={`${label} icon`}
        />
        <span className="font-semibold">{label}</span>
      </div>
    </motion.div>
  );
};
export default DynamicFramerPos;
