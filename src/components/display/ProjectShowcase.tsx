import MobileProjectCard from "@/components/card/MobileProjectCard";
import WebProjectCard from "@/components/card/WebProjectCard";

interface ProjectShowcaseProps {
  name: string,
  company: string,
  releaseDate: string,
  type: string,
  summary: string,
  description: string,
  url: string,
  thumbnail: string,
  thumbnail2?: string
};

const ProjectShowcase = (props: ProjectShowcaseProps) => {
  const { name, company, releaseDate, type, summary, description, url, thumbnail, thumbnail2 } = props;

  return (
    <div
      className="w-full flex flex-col justify-center items-center" 
    >
      <div className="mb-8 text-center lg:mb-14">
        <h2 className="heading-2 text-light md:heading-1">
          {name}
        </h2>
        <p className="body-m text-dim">
          {company} - {releaseDate}
        </p>
      </div>
      {
        type === 'webapp' &&
        <WebProjectCard
          cardTitle={summary}
          cardSubtitle={description}
          url={url}
          thumbnail={thumbnail}
        />
      }
      {
        type === 'mobileapp' && thumbnail2 &&
        <MobileProjectCard
          cardTitle={summary}
          cardSubtitle={description}
          url={url}
          thumbnail={thumbnail}
          thumbnail2={thumbnail2}
        />
      }
    </div>
  );
};

export default ProjectShowcase;