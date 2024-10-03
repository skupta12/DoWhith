import { AnimatePresence, motion } from "framer-motion";
import React, { ReactNode, useState } from "react";
import Image from "next/image";

interface CardProps {
  image: string;
}

const InfinitiveScroller = ({ image }: CardProps) => {
  return (
    <motion.div
      className="relative overflow-hidden min-w-[200px] flex justify-center items-center"
      key={image}
    >
      <Image
        src={image}
        alt={image}
        width={149}
        height={40}
      />
    </motion.div>
  );
};

export default InfinitiveScroller;
