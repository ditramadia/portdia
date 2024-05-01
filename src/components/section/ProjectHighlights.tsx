import Image from "next/image";
import LabelWithIcon from "../display/LabelWithIcon";
import StarIcon from "../icons/StarIcon";

interface ProjectHighlightsProps {
  description: string,
  images: string[]
};

const ProjectHighlights = (props: ProjectHighlightsProps) => {
  const { description, images } = props;

  return (
    <div className="container-sm my-24">
      <div className="mb-10">
        <LabelWithIcon 
          icon={<StarIcon width="2rem" />}
          text="HIGHLIGHTS"
        />
      </div>

      <div className="mb-20">
        <h2 className="heading-4 text-light text-center">{description}</h2>
      </div>

      <div className="flex flex-col gap-10 md:gap-20">
        {
          images.map((image, i) => (
            <Image
              src={`/images/${image}`}
              alt={`Project highlight ${i + 1}`}
              width={0}
              height={0}
              layout="responsive"
            />
          ))
        }
      </div>
    </div>
  );
};

export default ProjectHighlights;