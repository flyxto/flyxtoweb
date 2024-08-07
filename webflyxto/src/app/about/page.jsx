"use client"
// pages/avatars.js
import Image from 'next/image';
import styles from '../components/Avatars.module.css';
import aboutHead from "./assets/aboutHead.jpg"
import aboutHead3 from "./assets/aboutHead3.jpeg"
import banner from "./assets/bg-banner3.jpg"
import Container from '../components/Container';
import yasanthpfp from './assets/yasanth.jpg'
import janindupfp from './assets/Janindu.jpg'
import kisalpfp from './assets/Kisal.jpg'
import sudarapfp from './assets/Sudara.jpg'
import sannapfp from './assets/Sanna.jpg'
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import banner2 from '../contact/assets/contactwall3.webp'

const fadeIn = {
  hidden: { opacity: 0 },
  visible: (custom) => ({
    opacity: 1,
    transition: { delay: custom.delay, duration: custom.duration },
  }),
};

const Avatars = () => {
  const avatars = [
    { src: '/about-images/yasanth.jpg', top: '2vh', left: '10vw', duration: '3s', delay: '0s', translateY: '20px' },
    { src: '/about-images/Kisal.jpg', top: '50vh', left: '10vw', duration: '4s', delay: '1s', translateY: '15px' },
    { src: '/about-images/Sanna.jpg', top: '30vh', left: '24vw', duration: '4s', delay: '1s', translateY: '15px' },
    { src: '/about-images/Kisal.jpg', top: '10vh', left: '44vw', duration: '4s', delay: '1s', translateY: '15px' },
    { src: '/about-images/Sudara.jpg', top: '50vh', left: '60vw', duration: '2.5s', delay: '0.5s', translateY: '25px' },
    { src: '/about-images/yasanth.jpg', top: '70vh', left: '14vw', duration: '3.5s', delay: '1.2s', translateY: '30px' },
    { src: '/about-images/Sanna.jpg', top: '80vh', left: '35vw', duration: '3.5s', delay: '1.2s', translateY: '30px' },
    { src: '/about-images/Janindu.jpg', top: '28vh', left: '68vw', duration: '4.5s', delay: '0.8s', translateY: '18px' },
    { src: '/about-images/Janindu.jpg', top: '75vh', left: '60vw', duration: '4.5s', delay: '0.8s', translateY: '18px' }

  ];
  return (
    <div className='relative '>
      <motion.div
        className='absolute inset-0  z-0 overflow-hidden'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 1 }}
      >
        <Image
          src={banner}
          className='brightness-[40%] blur-md'
          layout='fill'
          objectFit='cover'
          alt='Background Banner'
        />
        <div className='absolute inset-0 bg-gradient-to-t from-[#0F0A0A] via-transparent to-transparent opacity-100'></div>
        <div className='absolute inset-0 bg-gradient-to-b from-[#0F0A0A] via-transparent to-transparent opacity-100'></div>
      </motion.div>
      <Container>
        <div className='pt-24 relative z-10 overflow-hidden'>
          <motion.div
            initial="hidden"
            animate="visible"
            custom={{ delay: 0.2, duration: 1 }}
            variants={fadeIn}
            className='px-10 grid grid-cols-2 gap-4 rounded-3xl rounded-tr-[100px] rounded-bl-[100px] items-center justify-center h-full backdrop-blur-md bg-white/10'
          >
            <div>
              <div className='shadow-xl scale-75 rounded-3xl rounded-tr-[100px] rounded-bl-[100px] overflow-hidden mr-5 opacity-80 brightness-125'>
                <Image src={aboutHead} width={1000} height={400} />
              </div>
            </div>
            <div>
              <p className='text-3xl text-center font-semibold'>Expanding Beyond Multimedia</p>
              <p className='text-justify pt-5'>
                Introducing Flyxto Technologies: Our Next Step in Innovation. Following the success of FLY Studios LK, where we revolutionized multimedia solutions, Flyxto Technologies now brings that same passion and expertise to the tech world. Just as we transformed multimedia experiences, we are dedicated to delivering cutting-edge technology solutions tailored to meet diverse needs. At Flyxto Technologies, we blend our creative drive with advanced tech to help our clients achieve their goals and stay ahead in a rapidly evolving digital landscape.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            custom={{ delay: 1, duration: 1 }}
            variants={fadeIn}
            className='px-10 grid grid-cols-2 gap-4 rounded-3xl rounded-tl-[100px] rounded-br-[100px] items-center justify-center h-full backdrop-blur-md bg-white/10 mt-12'
          >
            <div>
              <p className='text-3xl text-center font-semibold mt-12'>Join Our Amazing Team</p>
              <p className='text-justify pt-5'>
                Are you passionate about technology, creativity, and innovation? Join our amazing team at Flyxto Technologies! We transform ideas into impactful digital solutions. Work with talented professionals in a collaborative, creative environment, tackling exciting challenges and driving client success. Shape the future of tech with us. Explore our opportunities and take the next step in your career!
              </p>
              <div className='flex justify-end mt-8 mb-12'>
                <Button className="rounded-full bg-white/20">Explore Careers 🡒</Button>
              </div>
            </div>
            <div>
              <div className='shadow-xl scale-75 rounded-3xl rounded-tl-[100px] rounded-br-[100px] overflow-hidden mr-5 opacity-80 h-[338px] w-[600px] brightness-125'>
                <Image src={aboutHead3} layout='fill' />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            custom={{ delay: 1.5, duration: 1 }}
            variants={fadeIn}
            className='mt-12'
          >
            <p className='text-center text-4xl font-semibold gradient-text'>Leadership Team</p>
            <div className='relative'>
              <div className={styles.container}>
                {avatars.map((avatar, index) => (
                  <div
                    key={index}
                    className={styles.avatar}
                    style={{
                      top: avatar.top,
                      left: avatar.left,
                      '--duration': avatar.duration,
                      '--delay': avatar.delay,
                      '--translateY': avatar.translateY
                    }}
                  >
                    <img className='' src={avatar.src} alt={`Avatar ${index + 1}`} />
                  </div>
                ))}
              </div>
            </div>

          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            custom={{ delay: 2, duration: 1 }}
            variants={fadeIn}
            className='flex justify-center mt-5'
          >
            <div className='flex flex-col justify-center w-[300px] m-12 p-5 rounded-2xl backdrop-blur-md bg-white/10 rounded-tr-[100px]  rounded-bl-[80px] z-10'>
              <div className='flex justify-center'>
                <Image className='rounded-2xl rounded-tr-[100px] rounded-bl-[80px]' src={janindupfp} width={250} />
              </div>
              <p className='text-xl text-center font-semibold pt-4'>Janindu Rajapaksha</p>
              <p className='text-center pb-4'>Chief Executive Officer</p>
            </div>
            <div className='flex flex-col justify-center w-[300px] m-12 p-5 rounded-2xl backdrop-blur-md bg-white/10 rounded-tr-[100px]  rounded-bl-[80px] z-10'>
              <div className='flex justify-center'>
                <Image className='rounded-2xl rounded-tr-[100px] rounded-bl-[80px]' src={yasanthpfp} width={250} />
              </div>
              <p className='text-xl text-center font-semibold pt-4'>Yasanth Dolamulla</p>
              <p className='text-center pb-4'>Chief Growth Officer</p>
            </div>
            <div className='flex flex-col justify-center w-[300px] m-12 p-5 rounded-2xl backdrop-blur-md bg-white/10 rounded-tr-[100px]  rounded-bl-[80px] z-10'>
              <div className='flex justify-center'>
                <Image className='rounded-2xl rounded-tr-[100px] rounded-bl-[80px]' src={sudarapfp} width={250} />
              </div>
              <p className='text-xl text-center font-semibold pt-4'>Sudara Wishwajith</p>
              <p className='text-center pb-4'>Chief Technology Officer</p>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            custom={{ delay: 2.5, duration: 1 }}
            variants={fadeIn}
            className='flex justify-center'
          >
            <div className='flex flex-col justify-center w-[300px] m-12 p-5 rounded-2xl backdrop-blur-md bg-white/10 rounded-tr-[100px]  rounded-bl-[80px] z-10'>
              <div className='flex justify-center'>
                <Image className='rounded-2xl rounded-tr-[100px] rounded-bl-[80px]' src={kisalpfp} width={250} />
              </div>
              <p className='text-xl text-center font-semibold pt-4'>Kisal Weerachandra</p>
              <p className='text-center pb-4'>Chief Project Officer</p>
            </div>
            <div className='flex flex-col justify-center w-[300px] m-12 p-5 rounded-2xl backdrop-blur-md bg-white/10 rounded-tr-[100px]  rounded-bl-[80px] z-10'>
              <div className='flex justify-center'>
                <Image className='rounded-2xl rounded-tr-[100px] rounded-bl-[80px]' src={sannapfp} width={250} />
              </div>
              <p className='text-xl text-center font-semibold pt-4'>Kaveesha Sandeepa</p>
              <p className='text-center pb-4'>Chief Creative Officer</p>
            </div>
          </motion.div>
        </div>
      </Container>

      {/* <motion.div
        initial="hidden"
        animate="visible"
        custom={{ delay: 3, duration: 2 }}
        variants={fadeIn}
        className='absolute inset-0 z-0 blur-md overflow-hidden'
      >
        <Image
          src={banner2}
          className='brightness-[60%]'
          objectFit='cover'
          alt='Background Banner'
        />
        <div className='absolute inset-0 bg-gradient-to-t from-[#0F0A0A] via-transparent to-transparent opacity-100'></div>
        <div className='absolute inset-0 bg-gradient-to-b from-[#0F0A0A] via-transparent to-transparent opacity-100'></div>
      </motion.div> */}
    </div >
  );
};

export default Avatars;
