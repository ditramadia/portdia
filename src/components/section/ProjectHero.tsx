import GlassBrowserWindow from "../display/GlassBrowserWindow";

interface ProjectHeroProps {
  name: string,
  company: string,
  releaseDate: string,
  image: string,
  imageAlt: string
};

const ProjectHero = (props: ProjectHeroProps) => {
  const { name, company, releaseDate, image, imageAlt } = props;

  return (
    <div className="relative container-base mx-auto mt-32 flex flex-col items-center">
      <div className="absolute top-20 -z-10 w-80 h-28 bg-neutral-100/20 rounded-[100%] blur-3xl" />
      
      <div className="text-center">
        <h1 className="heading-2 text-light tracking-[0.25em]">{name}</h1>
        <h2 className="body-m text-dim">{company} - {releaseDate}</h2>
      </div>

      <div className="mt-10 md:mt-20">
        <GlassBrowserWindow 
          image={image}
          imageAlt={imageAlt}
        />
      </div>
    </div>
  );
};

export default ProjectHero;