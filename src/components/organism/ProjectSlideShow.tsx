import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import Link from "next/link";

interface ProjectSlideShowProps {
  title: string,
  description: string,
  imageName: string,
  imageAlt: string,
  url: string,
};

function ProjectSlideShow(props: ProjectSlideShowProps) {
  const { title, description, imageName, imageAlt, url } = props; 

  return (
    <Link href={url}>
      <div className="h-[200vh] mx-auto w-full p-12 md:w-2/3">
          <div className="sticky -z-10 top-44 h-[80vh]">
            <h1 className="heading-1 text-on-surface">{title}</h1>
            <p className="w-[250px] body text-on-surface">{description}</p>
          </div>
        </div>

        <div className="h-[400vh] mt-[-300vh]">
          <div className="sticky -z-20 top-32 w-full h-[80vh] mx-auto flex justify-center md:w-2/3">
            <Image
              src={`/images/${imageName}`}
              alt={imageAlt}
              fill
              style={{objectFit:"cover"}} 
              />
          </div>
        </div>

        <div className="h-[100vh] mt-[-100vh] bg-surface-dim" />
    </Link>
  )
}

export default ProjectSlideShow