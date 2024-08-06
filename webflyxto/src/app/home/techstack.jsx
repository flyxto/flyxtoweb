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
import banner from '../about/assets/bg-banner.jpg'
import "./cards/dotline.css"

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
    <div>
      <div className='relative z-10' ref={sectionRef}>
        <motion.div variants={moveUpVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ duration: 1, ease: "easeOut", delay: 0.1 }} className=' pb-32'>
          <p className='text-7xl text-center font-semibold gradient-text'>Concept to Engineering</p>
          <p className='text-center text-xl gradient-text'>From concept to engineering, we turn your idea into a great product</p>
        </motion.div>
        <div className="grid md:grid-cols-2 grid-cols-1 md:pb-40 " >
          <motion.div variants={moveUpVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }} className='flex justify-center'>

            <div className="circle2 md:scale-100 scale-75">
              <div className='ray4'></div>
              <div className="tech-icon react techlogos">
                <div className=''></div>
                <motion.div variants={scaleUpVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}>
                  <Image src={ReactLogo} alt="React" width={100} height={100} />
                </motion.div>
              </div>
              <div className="tech-icon tailwind techlogos">
                <div className=''></div>
                <motion.div variants={scaleUpVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}>
                  <Image src={next} alt="Tailwind" width={100} height={100} />
                </motion.div>
              </div>
              <div className="tech-icon wordpress techlogos">
                <div className=''></div>
                <motion.div variants={scaleUpVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}>
                  <Image src={django} alt="WordPress" width={100} height={100} />
                </motion.div>
              </div>
              <div className="tech-icon mysql techlogos">
                <div className=''></div>
                <motion.div variants={scaleUpVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}>
                  <Image src={flutter} alt="MySQL" width={100} height={100} />
                </motion.div>
              </div>
              <div className="tech-icon aws techlogos">
                <div className=''></div>
                <motion.div variants={scaleUpVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}>
                  <Image src={node} alt="AWS" width={100} height={100} />
                </motion.div>
              </div>
              <div className="tech-icon laravel techlogos">
                <div className=''></div>
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
          </motion.div>
          <div className='flex flex-col justify-center items-center md:overflow-visible overflow-hidden  mt-[-60px]'>
            <motion.div variants={moveUpVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}>
              <p className='text-3xl gradient-text'>Until Your Idea Becomes a Great Product</p>
            </motion.div>
            <motion.div variants={moveUpVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ duration: 1, ease: "easeOut", delay: 0.9 }}
              className='flex items-center'
            >
              <p className='text-4xl gradient-text'>Idea</p>
              <div className="pt-12">
                <ul class="centered-list ">
                  <li class="list-item list-item-1"></li>
                  <li class="list-item list-item-2"></li>
                  <li class="list-item list-item-3"></li>
                  <li class="list-item list-item-4"></li>
                  <li class="list-item list-item-5"></li>
                  <li class="list-item list-item-6"></li>
                  <li class="list-item list-item-7"></li>
                </ul>
              </div>
              <p className='text-4xl gradient-text'>Solution</p>

              <div className='rounded-2xl mt-5 overflow-hidden shadow-2xl shadow-slate-600 md:scale-100 scale-50'>
                {/* <Vimeo
                  video="347119375"
                  autoplay={false}
                  loop
                  width={600}
                  muted={false}
                  showPortrait
                  background
                  controls={true}
                /> */}

              </div>
            </motion.div>
            <p className='text-lg gradient-text text-justify'>We specialize in transforming your concept from an initial idea to a fully realized, exceptional product. Leveraging our wide range of experience and expertise, we guide you through every step of the process. From concept development and design to engineering and implementation, our dedicated team ensures that your vision becomes a reality. We are committed to delivering innovative solutions that meet your unique needs, combining creativity and technical excellence to bring your ideas to life</p>
          </div>

        </div>

      </div >
      <div className='absolute inset-0 z-0 blur-md'>

        {/* <Image src={banner}
          // width={300}
          className='brightness-50'
          layout=''
 
          alt='Background Banner' />
       */}
      </div>
    </div>
  );
}

export default Techstack;
