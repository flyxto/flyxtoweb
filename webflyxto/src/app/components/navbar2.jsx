"use client";
// components/Header.js
import React, { useEffect, useRef } from 'react';
import Image from "next/image";
import Logo from '@/assets/logo.png';
import { Button } from '@/components/ui/button';
import styles from './navbar2.module.css'; // Import the CSS module

const Navbar2 = () => {
  const logoRef = useRef(null);
  const linkRefs = useRef([]);

  useEffect(() => {
    const logo = logoRef.current;
    const links = linkRefs.current;

    // Animate the logo
    if (logo) {
      logo.classList.add(styles.logoVisible);
    }

    // Animate the links one by one
    links.forEach((link, index) => {
      setTimeout(() => {
        link.classList.add(styles.linkVisible);
      }, 200 * (index + 1)); // Adjust the delay as needed
    });
  }, []);

  return (
    <header className={`sticky md:top-5 top-0 z-50 ${styles.header}`}>
      <nav className="z-10 w-full">
        <div className='max-w-7xl mx-auto  md:px-12 xl:px-6 '>
          <div className={`flex flex-wrap pt-6 pb-2 px-6 items-center justify-between gap-6 md:py-4 md:gap-0 rounded-full md:bg-white/10 backdrop-blur-lg ${styles.nav}`}>
            <input aria-hidden="true" type="checkbox" name="toggle_nav" id="toggle_nav" className="hidden peer" />
            <div className="relative z-20 w-full flex justify-between lg:w-max md:px-0">
              <a href="#home" aria-label="logo" className={`flex space-x-2 items-center md:ml-20 ml-2 ${styles.logo}`} ref={logoRef}>
                <Image src={Logo} width={120} height={160} alt="BCMU" className="scale-75 md:scale-90" />
              </a>
              <div className="relative flex items-center lg:hidden max-h-10">
                <label role="button" htmlFor="toggle_nav" aria-label="humburger" id="hamburger" className="relative p-6 -mr-0">
                  <div aria-hidden="true" id="line" className="m-auto h-0.5 w-5 rounded bg-gray-300 transition duration-300"></div>
                  <div aria-hidden="true" id="line2" className="m-auto mt-2 h-0.5 w-5 rounded bg-gray-300 transition duration-300"></div>
                </label>
              </div>
            </div>
            <div aria-hidden="true" className="fixed z-10 inset-0 h-screen backdrop-blur-sm origin-bottom scale-y-0 transition duration-500 peer-checked:origin-top peer-checked:scale-y-100 lg:hidden bg-gray-900/80"></div>
            <div className={`flex-col z-20 flex-wrap gap-6 p-8 rounded-3xl justify-end w-full invisible opacity-0 translate-y-1 absolute top-full left-0 transition-all duration-300 scale-95 origin-top lg:relative lg:scale-100 lg:peer-checked:translate-y-0 lg:translate-y-0 lg:flex lg:flex-row lg:items-center lg:gap-0 lg:p-0 lg:bg-transparent lg:w-auto lg:visible lg:opacity-100 lg:border-none peer-checked:scale-100 peer-checked:opacity-100 peer-checked:visible lg:shadow-none dark:shadow-none ${styles.navLinks}`}>
              <div className="text-gray-100 dark:text-gray-200 lg:pr-4 lg:w-auto w-full lg:pt-0">
                <ul className="items-center tracking-wide font-medium lg:text-sm flex-col flex lg:flex-row gap-6 lg:gap-0">
                  {['Home', 'About', 'Team', 'Contact', 'Quick Schedule'].map((text, index) => (
                    <li key={text} ref={(el) => (linkRefs.current[index] = el)} className={styles.navLink}>
                      <a href={`/${text.toLowerCase().replace(' ', '')}`} className="block md:px-4 transition hover:text-gray-400">
                        {text === 'Quick Schedule' ? <Button className="rounded-full bg-white/20">{text}</Button> : <span>{text}</span>}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar2;
