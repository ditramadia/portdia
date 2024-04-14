import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Variants, motion, useMotionValue } from "framer-motion";

interface ProjectSlideShowProps {
  title: string,
  description: string,
  imageName: string,
  imageAlt: string,
  url: string,
};

function ProjectSlideShow(props: ProjectSlideShowProps) {
  const { title, description, imageName, imageAlt, url } = props; 

  const [mousePos, setMousePos] = useState({
    x: useMotionValue(0),
    y: useMotionValue(0)
  });

  const [isHovered, setIsHovered] = useState<boolean>(false);

  const mouseMove = (e: any) => {
    const { clientX, clientY } = e;
    mousePos.x.set(clientX - 48);
    mousePos.y.set(clientY - 48);
  };

  useEffect(() => {
    window.addEventListener("mousemove", mouseMove);
    return () => window.removeEventListener("mousemove", mouseMove);
  }, []);

  return (
    <>
      <motion.div
      className="fixed z-50 top-0 left-0 w-[96px] h-[96px] bg-primary/80 rounded-full flex justify-center items-center pointer-events-none"
      initial={{
        scale: 0
      }}
      animate={{
        scale: isHovered ? 1 : 0
      }}
      style={{
        top: mousePos.y,
        left: mousePos.x
      }}
    >
      <p className='text-[1.25rem] abril-fatface text-on-surface'>More</p>
    </motion.div>

      <div className="h-[200vh] mx-auto w-full p-12 pointer-events-none md:w-2/3">
        <div className="sticky z-10 top-44 h-[80vh]">
          <h1 className="heading-1 text-on-surface">{title}</h1>
          <p className="w-[250px] body text-on-surface">{description}</p>
        </div>
      </div>

      <div className="h-[400vh] mt-[-300vh]">
        <Link href={url}>
          <div 
            className="sticky bg-red-500 top-32 w-full h-[80vh] mx-auto flex justify-center cursor-none md:w-2/3"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <Image
              src={`/images/${imageName}`}
              alt={imageAlt}
              fill
              style={{objectFit:"cover"}} 
              />
            </div>  
        </Link>
      </div>

      <div className="relative z-10 h-[100vh] mt-[-100vh] bg-surface-dim" />
    </>
  )
}

export default ProjectSlideShow