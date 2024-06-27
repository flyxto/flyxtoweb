import React from 'react';
import RoundCard from './cards/roundcard';
import './whatwedo.css';

const WhatWeDo = () => {
  return (

    <div className='flex-col justify-center my-40'>
      <p className='text-center gradient-text text-4xl mb-8 font-semibold'>What We Do</p>
      <div className="grid md:grid-cols-4 grid-cols-1 md:gap-5">
        <RoundCard
          title="Web Applications"
          description="Transforming your web concepts into interactive, user-centric dependable experiences."
        />
        <RoundCard
          title="Interactive Products"
          description="Creating mobile solutions that are both functional and visually appealing."
        />
        <RoundCard
          title="AI Solutions"
          description="Building robust e-commerce platforms to scale your business online."
        />
        <RoundCard
          title="Mobile Applications"
          description="Enhancing your online presence with strategic digital marketing solutions."
        />
      </div>
    </div>
  );
}

export default WhatWeDo;
