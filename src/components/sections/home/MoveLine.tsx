"use client";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Image from "next/image";
import MoveLineImage from "/public/mov-sec/move-lines.png";
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import { movingIcons } from "@/data/placeholder-data";
import DynamicFramerPos from "@/components/DynamicFramerPos";
import { Icons } from "@/types/types";

const MoveLine = () => {

  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    // for purple lines
    target: ref,
    offset: ["0 1", "5 1"],
  });

  return (
    <section className="lg:pb-32 pb-16 lg:block hidden">
      <MaxWidthWrapper>
        <div className="relative">
          {/* Анимация фиолетовых линий */}
          <motion.div
            initial={{ opacity: 0 }}
            ref={ref}
            style={{ opacity: scrollYProgress }}
          >
            <Image src={MoveLineImage} alt="move line image" />
          </motion.div>

          {/* Анимация иконок */}
          {movingIcons.map((icon: Icons) => (
            <motion.div
              key={icon.id}
              className="icon-box absolute transform -translate-x-1/2"
              initial={{ opacity: 0, y: 20 }} // Начальное состояние: скрытые иконки ниже по оси Y
              animate={{ opacity: 1, y: 0 }} // Конечное состояние: иконки видны и на своей позиции
              transition={{ duration: 0.6, delay: icon.id * 0.2 }} // Длительность анимации и задержка для каждого элемента
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
            </motion.div>
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default MoveLine;
