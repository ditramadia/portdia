import Image from "next/image";

interface ProjectThumbnailProps {
  image: string,
  alt: string
};

function ProjectThumbnail(props: ProjectThumbnailProps) {
  const { image, alt } = props;

  return (
    <div className="relative w-full h-[200px] overflow-hidden mx-auto mb-8 md:h-[100vh] md:mb-24">
      <Image 
        src={`/images/${image}`}
        alt={alt}
        fill
        style={{
          objectFit: 'cover',
        }}
      />
    </div>
  );
};

export default ProjectThumbnail;