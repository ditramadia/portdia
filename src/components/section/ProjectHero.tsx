import { motion } from "framer-motion";

import SlideUp from "@/transitions/SlideUp";
import fadeIn from "@/transitions/FadeIn";

import GlassBrowserWindow from "@/components/display/GlassBrowserWindow";

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
      <motion.div 
        className="absolute top-20 -z-10 w-80 h-28 bg-neutral-100/20 rounded-[100%] blur-3xl"
        variants={fadeIn}
        custom={0.2}
        initial="initial"
        animate="animate"
      />
      
      <div className="text-center">
        <motion.h1
          className="heading-2 text-light tracking-[0.25em]"
          variants={SlideUp}
          custom={0}
          initial="initial"
          animate="animate"
        >
          {name}
        </motion.h1>
        <motion.h2 
          className="body-m text-dim"
          variants={SlideUp}
          custom={0.1}
          initial="initial"
          animate="animate"
        >
          {company} - {releaseDate}
        </motion.h2>
      </div>

      <motion.div 
        className="mt-10 md:mt-20"
        variants={SlideUp}
        custom={0.2}
        initial="initial"
        animate="animate"
      >
        <GlassBrowserWindow 
          image={image}
          imageAlt={imageAlt}
        />
      </motion.div>
    </div>
  );
};

export default ProjectHero;