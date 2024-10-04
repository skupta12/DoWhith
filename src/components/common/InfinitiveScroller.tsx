import { motion } from "framer-motion";
import React, { ReactNode } from "react";

interface ImageProps {
  image: string;
  children?: ReactNode;
}

const InfinitiveScroller = ({ children }: ImageProps) => {
  return (
    <motion.div
      className="relative overflow-hidden min-w-[200px] flex justify-center items-center"
    >
     {children}
    </motion.div>
  );
};

export default InfinitiveScroller;
