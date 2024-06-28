import Image from 'next/image';
import "./techstack.css";
import ReactLogo from '../../assets/reactlogo.svg';  // Update the path to your actual logo files

const Techstack = () => {
  return (
    <div className=" grid md:grid-cols-2 grid-cols-1 md:pt-40 md:mt-40">
      <div className=' flex justify-center'>
        <div className="circle2 md:scale-100 scale-75">
          <div className='ray4'></div>
          <div className="tech-icon react techlogos">
            <div className='ray3'></div>
            <Image src={ReactLogo} alt="React" width={100} height={100} />
          </div>
          <div className="tech-icon tailwind techlogos  ">
            <div className='ray3'></div>
            <Image src={ReactLogo} alt="Tailwind" width={100} height={100} />

          </div>
          <div className="tech-icon wordpress techlogos ">
            <div className='ray3'></div>
            <Image src={ReactLogo} alt="WordPress" width={100} height={100} />
          </div>
          <div className="tech-icon mysql techlogos">
            <div className='ray3'></div>
            <Image src={ReactLogo} alt="MySQL" width={100} height={100} />
          </div>
          <div className="tech-icon aws techlogos">
            <div className='ray3'></div>
            <Image src={ReactLogo} alt="AWS" width={100} height={100} />
          </div>
          <div className="tech-icon laravel techlogos">
            <div className='ray3'></div>
            <Image src={ReactLogo} alt="Laravel" width={100} height={100} />
          </div>
          <div className="tech-icon middleIcon flex items-center justify-center ">

            <p className='text-xl text-center scale-150'>Experts In</p>
          </div>
        </div>
      </div>
      <div>
        <p className='text-4xl  text-center pt-8'>Modern Tech Era</p>
        <p className=' text-justify md:text-xl pt-8 px-4'>At Flyxto Technologies, we embrace the modern tech era by leveraging cutting-edge technologies to deliver innovative solutions across web, mobile, and digital platforms, empowering businesses to succeed in a dynamic digital landscape.</p>
      </div>
    </div>
  );
}

export default Techstack;
