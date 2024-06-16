import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { brands } from "@/data/placeholder-data"; // Ensure this path is correct

const InfinitiveSlider = () => {
  // Duplicate the brands array multiple times
  const extendedBrands = [...brands, ...brands];

  return (
    <div className="relative w-full overflow-hidden scroller-box">
      <motion.div
        className="flex scroller-list"
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          ease: "linear",
          duration: 30,   
          repeat: Infinity,
        }}
      >
        {extendedBrands.map((brand, index) => (
          <motion.div key={index} className="scroller-item">
            <Image
              width={150}
              height={50}
              src={brand.src}
              alt={`Brand ${index + 1}`}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default InfinitiveSlider;
