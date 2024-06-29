import Image from 'next/image';
import '../projects.css';

const ProjectCard = ({ imageSrc, title, description, tags, projectTypes }) => {
  return (
    <article className="card5">
      <div className='card-content'>
        <div className="card-img relative">
          <div className="project-hover absolute flex justify-center items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="4em" height="4em" color="black" strokeLinejoin="round" strokeLinecap="round" viewBox="0 0 24 24" strokeWidth="1" fill="none" stroke="#ffffff">
              <line y2="12" x2="19" y1="12" x1="5"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </div>
          <div className="card-imgs pv overflow-hidden">
            <Image src={imageSrc} width={310} height={100} alt='' />
          </div>
        </div>

        <div className="project-info">
          <div className="flex-col">
            <div className="project-title">{title}</div>
            <span className="tag">Web Application</span>
          </div>
          <span className="lighter text-justify">
            {description}
          </span>
          <div className="types pt-2">
            {projectTypes.map((type, index) => (
              <span key={index} className="project-type">#{type}</span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
