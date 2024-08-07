"use client";
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import '@/app/home/header.css'; // Ensure this file includes the blur effect CSS
import Container from '@/layout/container';
import LogoSlider from './brands';

const Header = () => {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate blur and opacity based on scrollY
  const blurAmount = Math.min(scrollY / 50, 10); // Adjust divisor to control blur speed
  const opacityAmount = Math.max(1 - scrollY / 1000, 0); // Adjust divisor to control opacity

  return (
    <Container>
      <div
        className="header-wrapper"
        style={{ filter: `blur(${blurAmount}px)`, opacity: opacityAmount }}
      >
        <div>
          <div

            className="ray"
          ></div>
          <motion.div
            className='md:mt-56 mt-40'
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            <div>

              <motion.div
                className="gradient-text md:text-6xl font-medium text-3xl text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.9 }}
              >
                Build Software To Make Things Easier.
              </motion.div>
            </div>
          </motion.div> <div className='h-14 absolute shine'></div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1 }}
          >
            <p className="gradient-text md:text-[20px] text-[16px] text-center mt-[25px] prevent-select">
              Partner with our visionary team of experts to transform your <br />digital product dreams into reality.
            </p>
          </motion.div>
          <motion.div
            className='flex justify-center md:pt-20 pt-16'
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1.3 }}
          >
            <a href="/contact">
              <button className="button md:scale-100 scale-90">
                <div className="blob1"></div>
                <div className="blob2"></div>
                <div className="inner ">
                  <p className="px-4 text-lg">Schedule a Meeting</p>
                </div>
              </button>
            </a>
          </motion.div>
          <motion.div
            className="md:pt-36 pt-20"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <p className='text-center text-lg gradient-text'>
              Trusted By
            </p>
            <div className='scale-90'>
              <LogoSlider />
            </div>
          </motion.div>
        </div>
      </div>
    </Container>
  );
};

export default Header;
