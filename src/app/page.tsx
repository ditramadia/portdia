"use client";

import { useRef } from "react";
import { motion, useMotionValueEvent, useScroll, useTransform } from "framer-motion";

import Navbar from "@/components/organism/Navbar";

export default function Home() {
  const planet = useRef(null);
  const { scrollYProgress: planetScrollYProgress } = useScroll({
    target: planet
  });

  // Handle scroll hint styles based on scroll progress of planet
  const scrollOpacity = useTransform(planetScrollYProgress, [0, .1, 1], [1, 0, 0]);

  // Handle header 5 styles based on scroll progress of planet
  const header5Range = [0, .3, .6, 1];
  const header5YPos = useTransform(planetScrollYProgress, header5Range, ['50px', '50px', '0px', '0px']);
  const header5Opacity = useTransform(planetScrollYProgress, header5Range, [0, 0, 1, 1]);

  // Handle header 1 styles based on scroll progress of planet
  const headerYPos = useTransform(planetScrollYProgress, header5Range, ['50px', '50px', '0px', '0px']);

  useMotionValueEvent(planetScrollYProgress, "change", (latest) => {
    console.log(latest);
  });

  return (
    <>
      <main>

        <div ref={planet} className="w-full h-[800px] mt-48 flex justify-center md:h-[1100px]">
          <div className="absolute w-[800px] h-[800px] md:w-[1100px] md:h-[1100px]">
            <div className="absolute -inset-6 rounded-full bg-primary/30 blur-2xl" />
            <div className="absolute inset-0 rounded-full bg-gradient-to-b from-primary to-black to-70%" />
          </div>
        </div>
        
        <div className="absolute top-0 w-full h-[210vh] mx-auto md:h-[250vh] ">
          <div className="sticky top-0 w-full h-screen pt-32 pb-14 flex flex-col justify-center">
            <div className="mb-20">
              <motion.h1 
                className="heading-1 text-center tracking-[0.25em] leading-tight text-on-surface"
                style={{
                  translateY: headerYPos
                }}
              >
                Explore my Projects
              </motion.h1>
              <motion.h5
                className="mt-10 display-5 text-center text-on-surface"
                style={{
                  opacity: header5Opacity,
                  translateY: header5YPos
                }}
              >
                I am a full stack developer specialized in <br />
                <span className="text-tertiary abril-fatface italic">Front-End</span> and <span className="text-tertiary abril-fatface italic">Motion</span>
              </motion.h5>
            </div>

            <motion.div 
              className="absolute bottom-5 inset-x-0 flex flex-col items-center md:gap-2"
              style={{
                opacity: scrollOpacity
              }}
            >
              <div className="h-10 w-[1px] bg-on-surface" />
              <p className="body text-on-surface">Scroll</p>
            </motion.div>
          </div>
        </div>

        <h1 className="heading-1 text-surface">Rest of the page</h1>
        <h1 className="heading-1 text-surface">Rest of the page</h1>
        <h1 className="heading-1 text-surface">Rest of the page</h1>
        <h1 className="heading-1 text-surface">Rest of the page</h1>
        <h1 className="heading-1 text-surface">Rest of the page</h1>
        <h1 className="heading-1 text-surface">Rest of the page</h1>
        <h1 className="heading-1 text-surface">Rest of the page</h1>
        <h1 className="heading-1 text-surface">Rest of the page</h1>
        <h1 className="heading-1 text-surface">Rest of the page</h1>
        <h1 className="heading-1 text-surface">Rest of the page</h1>
        <h1 className="heading-1 text-surface">Rest of the page</h1>
        <h1 className="heading-1 text-surface">Rest of the page</h1>
        <h1 className="heading-1 text-surface">Rest of the page</h1>
        <h1 className="heading-1 text-surface">Rest of the page</h1>
        <h1 className="heading-1 text-surface">Rest of the page</h1>
        <h1 className="heading-1 text-surface">Rest of the page</h1>
        <h1 className="heading-1 text-surface">Rest of the page</h1>
        <h1 className="heading-1 text-surface">Rest of the page</h1>
        <h1 className="heading-1 text-surface">Rest of the page</h1>
        <h1 className="heading-1 text-surface">Rest of the page</h1>
        <h1 className="heading-1 text-surface">Rest of the page</h1>
        <h1 className="heading-1 text-surface">Rest of the page</h1>

        <Navbar active="work"/>
        
      </main>
    </>
  );
};
