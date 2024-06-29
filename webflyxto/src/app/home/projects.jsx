import ProjectCard from './cards/projectcard';
import MetaXPre from "../../assets/metaXPrev.png";

const Projects = () => {
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
    <div>
      <p className='text-center gradient-text text-4xl mb-8 font-semibold'>Case Studies</p>
      <div className="projects-container">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
