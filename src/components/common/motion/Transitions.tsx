"use client";

import { motion } from "framer-motion";

export const YStransition = ({
  children,
  className,
  delay = 0,
  y,
  margin,
  scale,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number,
  y?: number;
  margin?: string; // for absolute elements
  scale?: number;
}) => {
  return (
    <motion.div
      className={className}
      initial={{ y: y, opacity: 0, scale: scale }}
      transition={{ 
        ease: "easeOut", 
        duration: 0.5, 
        delay: delay,
      }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: margin }}
    >
      {children}
    </motion.div>
  );
};
