// pages/avatars.js
import Image from 'next/image';
import styles from '../components/Avatars.module.css';
import aboutHead from "./assets/aboutHead.jpg"
import aboutHead2 from "./assets/aboutHead2.jpg"
import banner from "./assets/bg-banner.jpg"
import Container from '../components/Container';


const Avatars = () => {
  const avatars = [
    { src: '/about-images/yasanth.jpeg', top: '30vh', left: '10vw', duration: '3s', delay: '0s', translateY: '20px' },
    { src: '/about-images/yasanth new.jpeg', top: '50vh', left: '25vw', duration: '4s', delay: '1s', translateY: '15px' },
    { src: '/about-images/yasanth new.jpeg', top: '50vh', left: '60vw', duration: '2.5s', delay: '0.5s', translateY: '25px' },
    { src: '/about-images/yasanth new.jpeg', top: '70vh', left: '80vw', duration: '3.5s', delay: '1.2s', translateY: '30px' },
    { src: '/about-images/yasanth new.jpeg', top: '20vh', left: '70vw', duration: '4.5s', delay: '0.8s', translateY: '18px' }
  ];

  return (
    <div className='relative h-screen'>

      <Container>
        <div className='grid grid-cols-2 gap-4 pt-24 relative z-10'>
          <div>
            <div className='shadow-xl scale-75 rounded-3xl rounded-tr-[100px]  rounded-bl-[100px] overflow-hidden mr-5 opacity-80'>
              <Image src={aboutHead} width={800} height={400} />
            </div>

          </div>
          <div className='px-10 bg-white/10 rounded-3xl rounded-tr-[100px] rounded-bl-[100px] flex flex-col items-center justify-center h-full backdrop-blur-md'>
            <p className='text-3xl text-center'>Expanding Beyond Multimedia</p>
            <p className='text-justify pt-5'>
              Introducing Flyxto Technologies: Our Next Step in Innovation. Following the success of FLY Studios LK, where we revolutionized multimedia solutions, Flyxto Technologies now brings that same passion and expertise to the tech world. Just as we transformed multimedia experiences, we are dedicated to delivering cutting-edge technology solutions tailored to meet diverse needs. At Flyxto Technologies, we blend our creative drive with advanced tech to help our clients achieve their goals and stay ahead in a rapidly evolving digital landscape.
            </p>
          </div>

        </div>
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
              <img className='blur-sm' src={avatar.src} alt={`Avatar ${index + 1}`} />
            </div>
          ))}
        </div>

      </Container >
      <div className='absolute inset-0 z-0 blur-md'>
        <Image src={banner}
          className='brightness-50'
          layout='fill'
          objectFit='cover'
          alt='Background Banner' />
        <div className='absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-100'></div>
        <div className='absolute inset-0 bg-gradient-to-b from-black via-transparent to-transparent opacity-100'></div>
      </div>
    </div>

  );
};

export default Avatars;
