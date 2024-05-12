import Image from "next/image";
import LabelWithIcon from "../display/LabelWithIcon";
import StarIcon from "../icons/StarIcon";

interface ProjectHighlightsProps {
  description: string,
  images: string[],
  type: string
};

const ProjectHighlights = (props: ProjectHighlightsProps) => {
  const { description, images, type } = props;

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

      <div className={`w-full flex ${type === 'mobileapp' ? 'flex-row flex-wrap' : 'flex-col'} items-center justify-center gap-10 md:gap-20`}>
        {
          images.map((image, i) => (
           <div className={` ${type === 'mobileapp' ? 'max-w-[280px]' : ''}`}>
              <Image
                src={`/images/${image}`}
                alt={`Project highlight ${i + 1}`}
                width={0}
                height={0}
                layout="responsive"
              />
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default ProjectHighlights;