"use client";
import Image from 'next/image';
import { motion } from 'framer-motion';
import ReactLogo from '../../assets/TechStack/react.png';
import next from '../../assets/TechStack/next.png';
import django from '../../assets/TechStack/django.png';
import flutter from '../../assets/TechStack/flutter.png';
import node from '../../assets/TechStack/node.png';
import springboot from '../../assets/TechStack/springboot.png';
import Vimeo from "@u-wave/react-vimeo";
import "./techstack.css";
import { useState, useEffect, useRef } from 'react';

const scaleUpVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const moveUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Techstack = () => {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect(); // Stop observing after the element is in view
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div className="grid md:grid-cols-2 grid-cols-1 md:pb-40 " ref={sectionRef}>
      <div className='flex justify-center'>
        <div className="circle2 md:scale-100 scale-75">
          <div className='ray4'></div>
          <div className="tech-icon react techlogos">
            <div className='ray3'></div>
            <motion.div variants={scaleUpVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}>
              <Image src={ReactLogo} alt="React" width={100} height={100} />
            </motion.div>
          </div>
          <div className="tech-icon tailwind techlogos">
            <div className='ray3'></div>
            <motion.div variants={scaleUpVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}>
              <Image src={next} alt="Tailwind" width={100} height={100} />
            </motion.div>
          </div>
          <div className="tech-icon wordpress techlogos">
            <div className='ray3'></div>
            <motion.div variants={scaleUpVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}>
              <Image src={django} alt="WordPress" width={100} height={100} />
            </motion.div>
          </div>
          <div className="tech-icon mysql techlogos">
            <div className='ray3'></div>
            <motion.div variants={scaleUpVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}>
              <Image src={flutter} alt="MySQL" width={100} height={100} />
            </motion.div>
          </div>
          <div className="tech-icon aws techlogos">
            <div className='ray3'></div>
            <motion.div variants={scaleUpVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}>
              <Image src={node} alt="AWS" width={100} height={100} />
            </motion.div>
          </div>
          <div className="tech-icon laravel techlogos">
            <div className='ray3'></div>
            <motion.div variants={scaleUpVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}>
              <Image src={springboot} alt="Laravel" width={100} height={100} />
            </motion.div>
          </div>
          <div className="tech-icon middleIcon flex items-center justify-center">
            <motion.div variants={scaleUpVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.7 }}>
              <p className='text-xl text-center scale-150'>Technical Mastery</p>
            </motion.div>
          </div>
        </div>
      </div>
      <div className='flex justify-center items-center'>
        <motion.div variants={moveUpVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}>
          <div className='rounded-2xl overflow-hidden shadow-2xl shadow-slate-600'>
            <Vimeo
              video="347119375"
              autoplay
              loop
              width={600}
              muted={false}
              showPortrait
              background
              controls={false}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Techstack;
