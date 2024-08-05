"use client";
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const WhyUs = () => {
  const [isInView, setIsInView] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const refs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (!hasAnimated) {
            setHasAnimated(true);
          }
        }
      },
      { threshold: 0.5 } // Adjust threshold as needed
    );

    refs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => {
      refs.current.forEach(ref => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [hasAnimated]);

  return (
    <div>
      <div className="md:h-screen flex-col items-center justify-center ">
        <motion.p
          ref={el => refs.current[0] = el}
          className="text-center text-7xl font-extralight gradient-text"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isInView && hasAnimated ? 1 : 0, y: isInView && hasAnimated ? 0 : 50 }}
          transition={{ duration: 1, delay: 0.1 }}
        >
          We Offer Tech Therapy
        </motion.p>
        <motion.p
          ref={el => refs.current[1] = el}
          className="text-center text-7xl mt-8 gradient-text"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isInView && hasAnimated ? 1 : 0, y: isInView && hasAnimated ? 0 : 50 }}
          transition={{ duration: 1, delay: 0.5}}
        >
          You Talk. We Listen.
        </motion.p>
        <motion.p
          ref={el => refs.current[2] = el}
          className="text-center text-8xl font-bold mt-4 gradient-text"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isInView && hasAnimated ? 1 : 0, y: isInView && hasAnimated ? 0 : 50 }}
          transition={{ duration: 1, delay: 0.7}}
        >
          We Solve.
        </motion.p>
      </div>
    </div>
  );
};

export default WhyUs;
