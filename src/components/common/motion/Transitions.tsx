"use client";

import { motion } from "framer-motion";

export const Ytransition = ({
  children,
  className,
  delay,
  y = 60,
  margin,
  scale,
  x,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number,
  y?: number;
  margin?: string;
  scale?: number;
  x?: number;

}) => {
  
  return (
    <motion.div
      className={className}
      initial={{ y: y, x: x, opacity: 0, scale: scale }}
      transition={{ 
        ease: "easeOut", 
        duration: 0.5, 
        delay: delay,
      }}
      whileInView={{ opacity: 1, y: 0, scale: 1, x: 0 }}
      viewport={{ once: true, margin: margin }}
    >
      {children}
    </motion.div>
  );
};

export const Stransition = ({
  children,
  className,
  delay = 0.2,
  scale,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number,
  scale?: number;
}) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, scale: scale }}
      transition={{ 
        ease: "easeOut", 
        duration: 0.5, 
        delay: delay,
      }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};

