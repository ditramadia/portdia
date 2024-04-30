import Link from "next/link";
import { motion } from "framer-motion";

import SlideLeft from "@/transitions/SlideLeft";

import WhiteButton from "@/components/button/WhiteButton";
import DarkBrowserWindow from "@/components/display/DarkBrowserWindow";

interface WebProjectCardProps {
  cardTitle: string,
  cardSubtitle: string,
  url: string,
  thumbnail: string,
};

const WebProjectCard = (props: WebProjectCardProps) => {
  const { cardTitle, cardSubtitle, url, thumbnail} = props;
  
  return (
    <div className="relative max-w-[900px] w-full h-fit mb-52 overflow-hidden flex flex-col items-center lg:h-[500px] lg:rounded-3xl lg:flex-row lg:gap-0">
      {/* Thumbnail */}
      <motion.div 
        className="-right-[10%] lg:absolute lg:w-[600px]"
        variants={SlideLeft}
        custom={0}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <DarkBrowserWindow 
          image={thumbnail}
          imageAlt={`${cardTitle} thumbnail`}
        />
      </motion.div>

      <div className="w-7/12 h-full p-8 flex flex-col justify-center items-center lg:p-12 lg:pr-44 lg:bg-surface-container lg:items-start">
        <h2 className="hidden heading-3 text-light leading-tight lg:block">{cardTitle}</h2>

        <p className="hidden mt-5 body-m text-light lg:block">{cardSubtitle}</p>

        {/* Button */}
        <div className="w-fit flex justify-center lg:mt-12">
          <Link href={url}>
            <WhiteButton 
              type="contained"
              size="md"
              roundness="full"
              text="Learn more"
            />
          </Link>
        </div>
      </div>

      {/* Gradient background */}
      <div className="w-5/12 h-full bg-gradient-to-br from-40% from-primary via-secondary to-tertiary" />
    </div>
  );
};

export default WebProjectCard;