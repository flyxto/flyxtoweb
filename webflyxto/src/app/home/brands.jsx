"use client"
import Slider from 'react-infinite-logo-slider'
import Logo from '@/assets/logo.png'
import Image from 'next/image'


const Component = () => {

  return (
    <Slider
      width="250px"
      duration={40}
      pauseOnHover={true}
      blurBorders={false}
      blurBoderColor={'#fff'}
    >
      <Slider.Slide>
        <Image
          src={Logo}
          width={80}
          height={500}
          alt="Picture of the author"
        />
      </Slider.Slide>
      <Slider.Slide>
        <Image
          src={Logo}
          width={80}
          height={500}
          alt="Picture of the author"
        />
      </Slider.Slide>
      <Slider.Slide>
        <Image
          src={Logo}
          width={80}
          height={500}
          alt="Picture of the author"
        />
      </Slider.Slide>
      <Slider.Slide>
        <Image
          src={Logo}
          width={80}
          height={500}
          alt="Picture of the author"
        />
      </Slider.Slide>
    </Slider>
  )
}

export default Component