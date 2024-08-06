"use client";

import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './cards/projectcard';
import MetaXPre from "../../assets/metaXPrev.png";

const textVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.2, // Stagger effect: increase delay for each card
      duration: 0.6,
    },
  }),
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const Projects = () => {
  const [inView, setInView] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(containerRef.current);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  const projects = [
    {
      imageSrc: MetaXPre,
      title: "MetaX Global",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae voluptas ullam aut incidunt minima.",
      tags: ["Web Application"],
      projectTypes: ["modern", "dashboards"],
      link: "#",
    },
    {
      imageSrc: MetaXPre,
      title: "Another Project",
      description: "Another project description goes here. It is also a web application.",
      tags: ["Web Application"],
      projectTypes: ["innovative", "responsive"],
      link: "#",
    },
    {
      imageSrc: MetaXPre,
      title: "Third Project",
      description: "Description for the third project.",
      tags: ["Web Application"],
      projectTypes: ["creative", "design"],
      link: "#",
    },
    {
      imageSrc: MetaXPre,
      title: "Fourth Project",
      description: "Description for the fourth project.",
      tags: ["Web Application"],
      projectTypes: ["fast", "modern"],
      link: "#",
    },
  ];

  return (
    <div className='pt-40'>
      <motion.p
        className='text-center gradient-text text-7xl mb-24 font-semibold'
        variants={textVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        Case Studies
        <p className='text-center text-xl gradient-text'>See How We have Transformed Visions into Success</p>
      </motion.p>
      
      <motion.div
        ref={containerRef}
        className="projects-container"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        transition={{ duration: 0.6 }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            custom={index}
          >
            <ProjectCard {...project} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Projects;
