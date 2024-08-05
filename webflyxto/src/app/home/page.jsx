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
import HeaderMobile from './header mobile';

const Home = () => {

  return (
    <Container className="container">
      <div className="md:block hidden header">
        <Header />
      </div>
      <div className='hidden md:block h-screen'></div>
      <div className="">
        <div className='md:hidden block'>
          <HeaderMobile />
        </div>
        <WhyUs />

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
