import projects from "@/data/projectBrief";

import ProjectShowcase from "../display/ProjectShowcase";

const ProjectSection = () => {
  return (
    <div className="container-base mx-auto flex flex-col gap-28 items-center lg:gap-24">
      {
        projects.map((project, i) => (
          <ProjectShowcase
            key={i}
            name={project.name}
            company={project.company}
            releaseDate={project.releaseDate}
            type={project.type}
            summary={project.summary}
            description={project.description}
            url={project.url}
            thumbnail={project.thumbnail}
          />
        ))
      }
      
    </div>
  );
};

export default ProjectSection;