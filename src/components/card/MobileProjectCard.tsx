import Link from "next/link";
import { motion } from "framer-motion";

import SlideUp from "@/transitions/SlideUp";

import WhiteButton from "@/components/button/WhiteButton";
import DarkPhoneFrame from "../display/DarkPhoneFrame";

interface MobileProjectCardProps {
  cardTitle: string,
  cardSubtitle: string,
  url: string,
  thumbnail: string,
};

const MobileProjectCard = (props: MobileProjectCardProps) => {
  const { cardTitle, cardSubtitle, url, thumbnail} = props;
  
  return (
    <div className="relative max-w-[900px] w-full h-fit mb-52 overflow-hidden flex flex-col items-center lg:h-[500px] lg:rounded-3xl lg:flex-row lg:gap-0">
      {/* Thumbnail */}
      <div className="flex gap-4">
        <motion.div 
          className="left-[32%] top-[16%] lg:absolute lg:w-[240px]"
          variants={SlideUp}
          custom={0}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <DarkPhoneFrame 
            image={thumbnail}
            imageAlt={`${cardTitle} thumbnail`}
          />
        </motion.div>
        <motion.div 
          className="left-[3%] top-[40%] lg:absolute lg:w-[240px]"
          variants={SlideUp}
          custom={.25}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <DarkPhoneFrame 
            image={thumbnail}
            imageAlt={`${cardTitle} thumbnail`}
          />
        </motion.div>
      </div>

      {/* Gradient background */}
      <div className="w-5/12 h-full bg-gradient-to-br from-40% from-primary via-secondary to-tertiary" />

      <div className="w-7/12 h-full p-8 flex flex-col justify-center items-center lg:p-12 lg:pl-44 lg:bg-surface-container lg:items-end">
        <h2 className="hidden heading-3 text-light text-end leading-tight lg:block">{cardTitle}</h2>

        <p className="hidden mt-5 body-m text-light text-end lg:block">{cardSubtitle}</p>

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

    </div>
  );
};

export default MobileProjectCard;