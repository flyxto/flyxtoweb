"use client";

import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import RoundCard from './cards/roundcard';
import './whatwedo.css';

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.2, // Stagger effect: increase delay for each card
      duration: 0.6,
    },
  }),
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const textVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const WhatWeDo = () => {
  const [inView, setInView] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(containerRef.current);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div className='flex-col justify-center mt-40 mb-40'>
      <motion.p
        className='text-center gradient-text text-7xl mb-40 font-semibold'
        variants={textVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        What We Do
      </motion.p>
      <motion.div
        ref={containerRef}
        className="grid md:grid-cols-4 grid-cols-1 md:gap-5"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        transition={{ duration: 0.6 }}
      >
        {["Web Applications", "Interactive Products", "AI Solutions", "Mobile Applications"].map((title, index) => (
          <motion.div
            key={title}
            variants={cardVariants}
            custom={index}
          >
            <RoundCard
              title={title}
              description={`Description for ${title}`}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default WhatWeDo;
