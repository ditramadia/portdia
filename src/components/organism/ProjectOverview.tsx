import Image from "next/image";

interface ProjectOverviewProps {
  title: string,
  subtitle: string,
  image: {
    url: string,
    alt: string
  }
};

function ProjectOverview(props: ProjectOverviewProps) {
  const { title, subtitle, image } = props;

  return (
    <div className="w-full mb-24">
      <h2 className="heading-3 text-on-surface text-center leading-none tracking-wider mb-4">{title}</h2>
      <h3 className="text-[1.25rem] poppins text-on-surface-variant text-center leading-none mb-10 ">{subtitle}</h3>
      <div className="relative w-full h-[200px] md:h-[500px]">
        <Image src={`/images/${image.url}`} alt={image.alt} fill style={{ objectFit: 'cover' }}/>
      </div>
    </div>
  );
};

export default ProjectOverview;