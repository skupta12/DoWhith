"use client";

import MaxWidthWrapper from "@/components/common/MaxWidthWrapper";
import Image from "next/image";
import MoveLineImage from "/public/home/mov-sec/move-lines.png";
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import { movingIcons } from "@/constants";
import DynamicFramerPos from "@/components/common/motion/DynamicFramerPos";
import { Icons } from "@/types";

const MovingIcons = () => {

  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    // for purple lines
    target: ref,
    offset: ["0 1", "5 1"],
  });

  return (
    <section className="icons-section lg:pb-32 pb-16 lg:block hidden">
      <MaxWidthWrapper>
        <div className="relative">
          <motion.div
            initial={{ opacity: 0 }}
            ref={ref}
            style={{ opacity: scrollYProgress }}
          >
            <Image src={MoveLineImage} alt="move line image" />
          </motion.div>

          {movingIcons.map((icon: Icons) => (
            <div
              key={icon.id}
              className="icon-box absolute transform -translate-x-1/2"         
              style={{
                left: `${icon.left}%`,
                top: `${icon.top}%`,
                zIndex: icon.zIndex,
                right: `${icon.right}%`,
              }}
            >
              <DynamicFramerPos
                elStartOffset={icon.elStartOffset}
                elEndOffset={icon.elEndOffset}
                xTransform={icon.translateX}
                yTransform={icon.translateY}
              >
                <div className="bg-white p-2 rounded-lg">
                  <Image
                    width={33}
                    height={32}
                    className="text-center mx-auto mb-1"
                    src={icon.src}
                    alt={icon.alt}
                  />
                  <span className="font-semibold">{icon.title}</span>
                </div>
              </DynamicFramerPos>
            </div>
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default MovingIcons;
