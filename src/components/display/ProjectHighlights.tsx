import Image from "next/image";

interface ProjectHighlightsProps {
  title: string,
  subtitle: string,
  images: {
    url: string,
    alt: string
  }[]
}

function ProjectHighlights(props: ProjectHighlightsProps) {
  const { title, subtitle, images } = props;

  return (
    <>
      <div className="max-w-[800px] w-11/12 mb-24">
        <h2 className="heading-4 text-on-surface text-center leading-none tracking-wider mb-5">{title}</h2>
        <h3 className="max-w-[600px] w-full mx-auto body text-on-surface-variant text-center leading-relaxed mb-14">{subtitle}</h3>
        
        {
          images.map((image, index) => (
            <div className="relative w-full h-[200px] mx-auto mb-7 rounded-xl overflow-hidden md:h-[500px]">
              <Image src={`/images/${image.url}`} alt={image.alt} fill style={{ objectFit: 'cover' }}/>
            </div>
          ))
        }
      </div>
    </>
  );
};

export default ProjectHighlights;