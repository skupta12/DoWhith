"use client";

import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const Home = () => {
  // Контроллер анимации
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false, // Повторяющаяся анимация при выходе и повторном входе в зону видимости
  });

  // Управление анимацией при входе в зону видимости
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  // Эффект движения влево и вправо
  const motionVariants = {
    hidden: { opacity: 0, x: 0 },
    visible: i => ({
      opacity: 1,
      x: i % 2 === 0 ? -50 : 50,
      transition: {
        duration: 0.6,
        delay: i * 0.2,
      },
    }),
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8">Dynamic List with Animation</h1>
      <div className="space-y-8">
        {['Payment', 'Approval', 'Invoice', 'Budget', 'Treasury'].map((item, i) => (
          <motion.div
            ref={ref}
            key={i}
            custom={i}
            initial="hidden"
            animate={controls}
            variants={motionVariants}
            className="bg-blue-500 text-white p-4 rounded-lg shadow-md"
          >
            {item}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Home;
