import { useRef } from "react";
import { Variants, motion, useScroll, useTransform } from "framer-motion";

const WorkHero = () => {
  const planet = useRef(null);
  const { scrollYProgress: planetScrollYProgress } = useScroll({
    target: planet,
  });

  // Header 5 transition
  const header5Range = [0, 0.3, 0.9, 1];
  const header5YPos = useTransform(planetScrollYProgress, header5Range, [
    "50px",
    "50px",
    "0px",
    "0px",
  ]);
  const header5Opacity = useTransform(
    planetScrollYProgress,
    header5Range,
    [0, 0, 1, 1]
  );

  // Header transition
  const headerVariants: Variants = {
    initial: {
      opacity: 0,
      y: "72px",
    },
    enter: {
      opacity: 1,
      y: "0px",
      transition: {
        duration: 1,
        ease: "easeInOut",
        delay: 2,
      },
    },
  };
  const headerYPos = useTransform(planetScrollYProgress, header5Range, [
    "50px",
    "50px",
    "0px",
    "0px",
  ]);

  // Planet transition
  const planetVariants: Variants = {
    initial: {
      opacity: 0,
    },
    enter: {
      opacity: 1,
      transition: {
        duration: 2,
        ease: "easeInOut",
      },
    },
  };

   // Scroll hint animation
  const scrollOpacity = useTransform(
    planetScrollYProgress,
    [0, 0.1, 1],
    [1, 0, 0]
  );
  const scrollBarVariants: Variants = {
    default: {
      height: ["0", "40px", "0"],
      translateY: ["-40px", "0px", "0px"],
      transition: {
        duration: 1.5,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 1,
      },
    },
  };
  const scrollTextVariants: Variants = {
    default: {
      opacity: [0.2, 0.2, 1],
      transition: {
        duration: 1.25,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  };

  return (
    <>
      <motion.div
        ref={planet}
        className="w-full h-[800px] mt-48 flex justify-center md:h-[1100px]"
        variants={planetVariants}
        initial="initial"
        whileInView="enter"
        viewport={{ once: true }}
      >
        <div className="absolute w-[800px] h-[800px] md:w-[1100px] md:h-[1100px]">
          <div className="absolute z-20 -inset-6 rounded-full bg-primary/30 blur-2xl" />
          <div className="absolute z-20 inset-0 rounded-full bg-gradient-to-b from-primary to-neutral-900 to-70%" />
        </div>
      </motion.div>

      <div className="absolute z-20 top-0 w-full h-[210vh] mx-auto md:h-[250vh] ">
        <div className="sticky top-0 w-full h-screen pt-32 pb-14 flex flex-col justify-center">
          <div className="mb-20">
            <motion.h1
              className="heading-1 text-center tracking-[0.25em] leading-tight text-light"
              style={{
                translateY: headerYPos,
              }}
              variants={headerVariants}
              initial="initial"
              whileInView="enter"
              viewport={{ once: true }}
            >
              Explore my Projects
            </motion.h1>
            <motion.h5
              className="mt-10 display-5 text-center text-light"
              style={{
                opacity: header5Opacity,
                translateY: header5YPos,
              }}
            >
              I am a full-stack developer specializing in <br />
              <span className="text-tertiary abril-fatface italic">
                Front-End
              </span>{" "}
              and{" "}
              <span className="text-tertiary abril-fatface italic">Motion</span>
            </motion.h5>
          </div>

          <motion.div
            className="absolute bottom-5 inset-x-0 flex flex-col items-center md:gap-2"
            style={{
              opacity: scrollOpacity,
            }}
          >
            <motion.div
              className="w-[1px] bg-neutral-100"
              variants={scrollBarVariants}
              animate="default"
            />
            <motion.p
              className="body text-light"
              variants={scrollTextVariants}
              animate="default"
            >
              Scroll
            </motion.p>
          </motion.div>
        </div>
      </div>

      <div className="relative z-10 h-[100vh] bg-surface-dim" />
    </>
  );
};

export default WorkHero;
