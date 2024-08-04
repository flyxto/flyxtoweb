"use client";
import { useEffect, useState } from 'react';
import { Parallax } from 'react-parallax';
import Header from "./header";
import Container from '@/layout/container';
import WhatWeDo from "./WhatWeDo";
import Techstack from "./techstack";
import Projects from "./projects";
import Contact from "./contact";
import WhyUs from "./whyus";

const Home = () => {
 
  return (
    <Container className="container">
      <div className="header">
        <Header />
      </div>
      <div className='h-screen'></div>
      <div className="why-us">
        <Parallax
          strength={500}
          className=""
        >
          <WhyUs />
        </Parallax>
      </div>

      <div className="parallax-layer h-auto">
        <Techstack />
        <WhatWeDo />
        <Projects />
        <Contact />
      </div>
      
    </Container>
  );
}

export default Home;
