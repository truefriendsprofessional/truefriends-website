import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';


const bottles = [
  {
    name: 'Keratin',
    img: '/assets/bbottle1.png',
    feature: 'Intense Repair',
    text: 'Rich in nature, free from silicones. Our light and smooth shampoo strengthens brittle hair. Your locks are left 3x stronger and better protected with split ends 3x more repaired.*',
  },
  {
    name: 'Nanoplast',
    img: '/assets/13.png',
    feature: 'Ultimate Smoothness',
    text: 'Experience ultra-smooth, frizz-free hair with our advanced nanoplast formula. Perfect for lasting shine and manageability.',
  },
  {
    name: 'Kerabotox',
    img: '/assets/7.png',
    feature: 'Deep Nourishment',
    text: 'Revitalize and rejuvenate your hair with kerabotox. Deep nourishment for visibly healthier, fuller hair.',
  },
];

const About = () => {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);


  // No longer using GSAP for single image, will use for carousel

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setIndex((prev) => (prev + 1) % bottles.length);
    }, 3000);
    return () => clearTimeout(timeoutRef.current);
  }, [index]);

  // Carousel positions for 3 bottles
  const getPosition = (i) => {
    if (i === index) return { scale: 1.15, x: 0, zIndex: 2, filter: 'drop-shadow(0 8px 32px #fff6)' };
    if ((i + 1) % bottles.length === index) return { scale: 0.85, x: -140, zIndex: 1, filter: 'blur(1px) brightness(0.7)' };
    return { scale: 0.85, x: 140, zIndex: 1, filter: 'blur(1px) brightness(0.7)' };
  };

  return (
    <section
      id="about"
      className="min-h-[70vh] w-full flex flex-col md:flex-row justify-center items-center bg-[#0b111c] px-6 py-12 transition-colors duration-700 mt-20"
    >
      <div className="flex-1 flex justify-center items-center relative min-h-[340px]">
        {/* Carousel of bottles */}
        <div className="relative w-[340px] h-[340px] flex items-center justify-center">
          {bottles.map((bottle, i) => {
            const pos = getPosition(i);
            return (
              <motion.img
                key={bottle.img}
                src={bottle.img}
                alt={bottle.name}
                initial={false}
                animate={{
                  scale: pos.scale,
                  x: pos.x,
                  zIndex: pos.zIndex,
                  filter: pos.filter,
                  opacity: 1,
                }}
                transition={{ duration: 0.7, ease: 'easeInOut' }}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[180px] md:max-w-[220px] select-none cursor-pointer"
                style={{ pointerEvents: i === index ? 'auto' : 'none' }}
              />
            );
          })}
        </div>
      </div>
      <div className="flex-1 flex flex-col items-start justify-center pl-0 md:pl-12 mt-8 md:mt-0">
        <AnimatePresence mode="wait">
          <motion.span
            key={bottles[index].name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="inline-block bg-[#222] text-[#ffe082] px-4 py-1 rounded-full text-xs font-bold mb-4 tracking-widest uppercase shadow"
          >
            {bottles[index].name}
          </motion.span>
        </AnimatePresence>
        <AnimatePresence mode="wait">
          <motion.h2
            key={bottles[index].feature}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-extrabold text-[#ffe082] mb-4 leading-tight drop-shadow"
          >
            {bottles[index].feature}
          </motion.h2>
        </AnimatePresence>
        <AnimatePresence mode="wait">
          <motion.p
            key={bottles[index].text}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-[#ffe082] text-lg mb-6 max-w-lg opacity-90"
          >
            {bottles[index].text}
          </motion.p>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default About