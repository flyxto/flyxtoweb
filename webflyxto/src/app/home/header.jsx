import '@/app/home/header.css'
import Container from '@/layout/container';
import LogoSlider from './brands';

const Header = () => {
  return (
    <Container>
      <div>
        <div class="ray"></div>
        <div className='md:mt-64 mt-40'>
          <div>
            <div className="gradient-text md:text-6xl font-semibold text-3xl text-center">Build Software To Make Things Easier</div>
          </div>

        </div>
        <div>
          <p class="gradient-text md:text-[20px] text-[16px] text-center mt-[25px] prevent-select">Partner with our visionary team of experts to transform your <br />digital product dreams into reality.</p>
        </div>
        <div className='flex justify-center md:pt-20 pt-16'>
          <button className="button md:scale-100 scale-90">
            <div className="blob1"></div>
            <div className="blob2"></div>
            <div className="inner ">
              <p className="px-4 text-lg">Schedule a Meeting</p>
            </div>
          </button>
        </div>
        <div className="md:pt-36 pt-20">
          <p className='text-center text-lg gradient-text mb-4'>Trusted By</p>
          <LogoSlider />
        </div>
      </div>
    </Container>
  );
}

export default Header;