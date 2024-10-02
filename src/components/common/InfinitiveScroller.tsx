import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
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
      {/* Hover overlay */}
      <AnimatePresence>
        {/* <motion.div
          className="absolute left-0 top-0 bottom-0 right-0 z-10 flex justify-center items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        ></motion.div> */}
      </AnimatePresence>
      <Image
        src={image}
        alt={image}
        width={169}
        height={40}
      />
    </motion.div>
  );
};

export default InfinitiveScroller;
