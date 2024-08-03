"use client"
import Image from 'next/image';
import "./techstack.css";
import ReactLogo from '../../assets/TechStack/react.png';  // Update the path to your actual logo files
import next from '../../assets/TechStack/next.png'; 
import django from '../../assets/TechStack/django.png'; 
import flutter from '../../assets/TechStack/flutter.png'; 
import node from '../../assets/TechStack/node.png'; 
import springboot from '../../assets/TechStack/springboot.png'; 
import Vimeo from "@u-wave/react-vimeo";


const Techstack = () => {
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 md:pt-40 md:mt-40">
      <div className='flex justify-center'>
        <div className="circle2 md:scale-100 scale-75">
          <div className='ray4'></div>
          <div className="tech-icon react techlogos">
            <div className='ray3'></div>
            <Image src={ReactLogo} alt="React" width={100} height={100} />
          </div>
          <div className="tech-icon tailwind techlogos">
            <div className='ray3'></div>
            <Image src={next} alt="Tailwind" width={100} height={100} />
          </div>
          <div className="tech-icon wordpress techlogos">
            <div className='ray3'></div>
            <Image src={django} alt="WordPress" width={100} height={100} />
          </div>
          <div className="tech-icon mysql techlogos">
            <div className='ray3'></div>
            <Image src={flutter} alt="MySQL" width={100} height={100} />
          </div>
          <div className="tech-icon aws techlogos">
            <div className='ray3'></div>
            <Image src={node} alt="AWS" width={100} height={100} />
          </div>
          <div className="tech-icon laravel techlogos">
            <div className='ray3'></div>
            <Image src={springboot} alt="Laravel" width={100} height={100} />
          </div>
          <div className="tech-icon middleIcon flex items-center justify-center">
            <p className='text-xl text-center scale-150'>Experts In</p>
          </div>
        </div>
      </div>
      <div className='flex justify-center items-center'>
        <div className=' rounded-2xl overflow-hidden shadow-2xl shadow-slate-600' >
          <Vimeo video="347119375" autoplay loop
            width={600}
            muted={false}
            showPortrait
            background={true}
            controls={false} onEnd={() => myCallback()} />
        </div>
      </div>
    </div>
  );
}

export default Techstack;
