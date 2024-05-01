import projects from "@/data/projectBrief";

import WebProjectCard from "@/components/card/WebProjectCard";
import MobileProjectCard from "@/components/card/MobileProjectCard";

const ProjectSection = () => {
  return (
    <div className="container-base mx-auto flex flex-col gap-28 items-center lg:gap-48">
      {
        projects.map((project, i) => (
          <div
            className="w-full flex flex-col justify-center items-center" 
            key={i}
          >
            <div className="mb-8 text-center lg:mb-14">
              <h2 className="heading-2 text-light md:heading-1">
                {project.name}
              </h2>
              <p className="body-m text-dim">
                {project.company} - {project.releaseDate}
              </p>
            </div>
            {
              project.type === 'webapp' &&
              <WebProjectCard
                cardTitle={project.summary}
                cardSubtitle={project.description}
                url={project.url}
                thumbnail={project.thumbnail}
              />
            }
            {
              project.type === 'mobileapp' &&
              <MobileProjectCard
                cardTitle={project.summary}
                cardSubtitle={project.description}
                url={project.url}
                thumbnail={project.thumbnail}
              />
            }
          </div>
        ))
      }
      
    </div>
  );
};

export default ProjectSection;