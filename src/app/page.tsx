"use client";

import { useRef } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";

import Navbar from "@/components/organism/Navbar";

export default function Home() {
  const planet = useRef(null);
  const { scrollYProgress } = useScroll({
    target: planet
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log(latest);
  });

  return (
    <>
      <main>
        <div className="relative">
          <div className="relative w-11/12 h-[200vh] mx-auto md:h-[250vh] ">
            <div className="sticky top-0 w-full h-screen pt-32 pb-14 flex flex-col justify-center">
              <div className="mb-20">
                <motion.h1 
                  className="heading-1 text-center tracking-[0.25em] leading-tight text-on-surface"
                >
                  Explore my Projects
                </motion.h1>
                <motion.h5
                  className="mt-10 display-5 text-center text-on-surface"
                >
                  I am a full stack developer specialized in <br />
                  <span className="text-tertiary abril-fatface italic">Front-End</span> and <span className="text-tertiary abril-fatface italic">Motion</span>
                </motion.h5>
              </div>

              <div className="absolute bottom-5 inset-x-0 flex flex-col items-center md:gap-2">
                <div className="h-10 w-[1px] bg-on-surface" />
                <p className="body text-on-surface">Scroll</p>
              </div>
            </div>
          </div>

          <div className="absolute top-36 -z-10 w-full h-[800px] flex justify-center md:top-44">
            <div className="absolute w-[800px] h-[800px] rounded-full md:w-[1100px] md:h-[1100px]">
              <div className="absolute -inset-6 rounded-full bg-primary/30 blur-2xl" />
              <div className="absolute inset-0 rounded-full bg-gradient-to-b from-primary to-black to-70%" />
            </div>
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
