"use client"
import Slider from 'react-infinite-logo-slider'
import SILC from '@/assets/brands/silc.png'
import Image from 'next/image'
import MetaX from '@/assets/brands/MetaX.png'
import LionC from '@/assets/brands/lionsc.png'
import Tea from '@/assets/brands/agad-2.png'



const Component = () => {

  return (
    <Slider
      width="200px"
      duration={40}
      pauseOnHover={true}
      blurBorders={false}
      blurBoderColor={'#fff'}
    >
      <Slider.Slide>
        <Image
          src={SILC}
          width={75}
          height={500}
          alt="Picture of the author"
        />
      </Slider.Slide>
      <Slider.Slide>
        <Image
          src={MetaX}
          width={150}
          height={500}
          alt="Picture of the author"
        />
      </Slider.Slide>
      <Slider.Slide>
        <Image
          src={LionC}
          width={80}
          height={500}
          alt="Picture of the author"
        />
      </Slider.Slide>
      <Slider.Slide>
        <Image
          src={Tea}
          width={100}
          height={500}
          alt="Picture of the author"
        />
      </Slider.Slide>
    </Slider>
  )
}

export default Component