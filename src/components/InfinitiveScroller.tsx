"use client";

import { motion } from "framer-motion";
import { brands } from "@/data/placeholder-data";
import Image from "next/image";

const InfinitiveScroller = () => {

  // Calculate the necessary width for one cycle of slides

  // const slideWidth = 100 / brands.length;

  const duplicatedSlides = [...brands, ...brands]; // Duplicate for looping

  return (
      <div className="relative overflow-hidden">
          <motion.div
              className="flex"
              animate={{
                  x: ['0%', '-100%'],
                  transition: {
                      ease: 'linear',
                      duration: 45,
                      repeat: Infinity,
                  }
              }}
          >
              {duplicatedSlides.map((slide, index) => (
                  <div 
                  key={index} 
                  className="flex-shrink-0 flex justify-center items-center mx-3 py-4" 
                  style={{ width: `auto` }}>
                      <Image src={slide.src} width={150} height={40} alt="" />
                  </div>
              ))}
          </motion.div>
      </div>
  );
}

export default InfinitiveScroller;