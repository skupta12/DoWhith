import React from "react";
import { motion } from "framer-motion";
import { brands } from "@/data/placeholder-data";
import Image from "next/image";
// Define the array of slides with numbers

const InfinitiveSlider = () => {

  const duplicatedSlides = [...brands, ...brands];

  return (
    <div className="relative w-full overflow-hidden">

      <motion.div
        className="flex"
        animate={{
          x: ["0", "-100%"],
          transition: {
            ease: "linear",
            duration: 30,
            repeat: Infinity,
          },
        }}
      >

        {duplicatedSlides.map((slide, index) => (
          <div
            key={index}
            className={`flex-shrink-0`}
            style={{ width: `${100 / brands.length}%` }}
            // style={{ width: `${100 / brands.length}%` }}
          >
            <div className="flex flex-col items-center justify-center h-full p-5">
              <Image width={150} height={40} src={slide.src} alt={`${slide.alt} ${slide.id}`} />
            </div>
            
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default InfinitiveSlider;
