"use client";

import { useEffect, useRef } from "react";
import { Variants, motion, useScroll, useTransform } from "framer-motion";
import Lenis from '@studio-freight/lenis';

import Navbar from "@/components/organism/Navbar";

export default function Home() {
  const planet = useRef(null);
  const { scrollYProgress: planetScrollYProgress } = useScroll({
    target: planet
  });

  // Scroll hint animation
  const scrollOpacity = useTransform(planetScrollYProgress, [0, .1, 1], [1, 0, 0]);
  const scrollBarVariants: Variants = {
    default: {
      height: ['0', '40px', '0'],
      translateY: ['-40px', '0px', '0px'],
      transition: {
        duration: 1.5,
        ease: 'easeInOut',
        repeat: Infinity,
        repeatType: 'loop',
        repeatDelay: 1
      } 
    }
  }
  const scrollTextVariants: Variants = {
    default: {
      opacity: [.2, .2, 1],
      transition: {
        duration: 1.25,
        ease: 'easeInOut',
        repeat: Infinity,
        repeatType: 'reverse'
      }
    } 
  }

  // Header 5 transition
  const header5Range = [0, .3, .9, 1];
  const header5YPos = useTransform(planetScrollYProgress, header5Range, ['50px', '50px', '0px', '0px']);
  const header5Opacity = useTransform(planetScrollYProgress, header5Range, [0, 0, 1, 1]);

  // Header transition
  const headerVariants: Variants = {
    initial: {
      opacity: 0,
      translateY: '70px'
    },
    enter: {
      opacity: 1,
      translateY: '50px',
      transition: {
        duration: 1,
        ease: 'easeInOut',
        delay: 2
      }
    }
  }
  const headerYPos = useTransform(planetScrollYProgress, header5Range, ['50px', '50px', '0px', '0px']);

  // Planet transition
  const planetVariants: Variants = {
    initial: {
      opacity: 0
    },
    enter: {
      opacity: 1,
      transition: {
        duration: 2,
        ease: 'easeInOut',
      }
    }
  }

  useEffect(() => {
    // Lenis smooth scroll
    const lenis = new Lenis()
    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
  }, [])

  return (
    <main>

      <motion.div 
        ref={planet} 
        className="w-full h-[800px] mt-48 flex justify-center md:h-[1100px]"
        variants={planetVariants}
        initial='initial'
        whileInView='enter'
        viewport={{ once: true }}
      >
        <div className="absolute w-[800px] h-[800px] md:w-[1100px] md:h-[1100px]">
          <div className="absolute -inset-6 rounded-full bg-primary/30 blur-2xl" />
          <div className="absolute inset-0 rounded-full bg-gradient-to-b from-primary to-black to-70%" />
        </div>
      </motion.div>
      
      <div className="absolute top-0 w-full h-[210vh] mx-auto md:h-[250vh] ">
        <div className="sticky top-0 w-full h-screen pt-32 pb-14 flex flex-col justify-center">
          <div className="mb-20">
            <motion.h1 
              className="heading-1 text-center tracking-[0.25em] leading-tight text-on-surface"
              style={{
                translateY: headerYPos
              }}
              variants={headerVariants}
              initial='initial'
              whileInView='enter'
              viewport={{ once: true }}
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
              I am a full-stack developer specialized in <br />
              <span className="text-tertiary abril-fatface italic">Front-End</span> and <span className="text-tertiary abril-fatface italic">Motion</span>
            </motion.h5>
          </div>

          <motion.div 
            className="absolute bottom-5 inset-x-0 flex flex-col items-center md:gap-2"
            style={{
              opacity: scrollOpacity
            }}
          >
            <motion.div 
              className="w-[1px] bg-on-surface"
              variants={scrollBarVariants}
              animate='default'
            />
            <motion.p 
              className="body text-on-surface"
              variants={scrollTextVariants}
              animate='default'
            >
              Scroll
            </motion.p>
          </motion.div>
        </div>
      </div>

      <h1 className="heading-1 text-surface">.</h1>
      <h1 className="heading-1 text-surface">.</h1>
      <h1 className="heading-1 text-surface">.</h1>
      <h1 className="heading-1 text-surface">Will there be singing</h1>
      <h1 className="heading-1 text-surface">in the Dark Times?</h1>
      <h1 className="heading-1 text-surface">Yes,</h1>
      <h1 className="heading-1 text-surface">There will be singing.</h1>
      <h1 className="heading-1 text-surface">About the dark times</h1>

      <Navbar active="work"/>
      
    </main>
  );
};
