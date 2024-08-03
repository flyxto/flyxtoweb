"use client"
import { motion } from 'framer-motion';
import '@/app/home/header.css';
import Container from '@/layout/container';
import LogoSlider from './brands';

const Header = () => {
  return (
    <Container>
      <div>
        <div className="ray"></div>
        <div className='md:mt-56 mt-40'>
          <div>
            <div className='h-14 absolute shine'></div>
            <motion.div
              className="gradient-text md:text-6xl font-semibold text-3xl text-center"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Build Software To Make Things Easier
            </motion.div>
          </div>
        </div>
        <div>
          <motion.p
            className="gradient-text md:text-[20px] text-[16px] text-center mt-[25px] prevent-select"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Partner with our visionary team of experts to transform your <br />digital product dreams into reality.
          </motion.p>
        </div>
        <div className='flex justify-center md:pt-20 pt-16'>
          <motion.button
            className="button md:scale-100 scale-90"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="blob1"></div>
            <div className="blob2"></div>
            <div className="inner ">
              <p className="px-4 text-lg">Schedule a Meeting</p>
            </div>
          </motion.button>
        </div>
        <div className="md:pt-36 pt-20">
          <motion.p
            className='text-center text-lg gradient-text mb-4'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            Trusted By
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <LogoSlider />
          </motion.div>
        </div>
      </div>
    </Container>
  );
}

export default Header;
