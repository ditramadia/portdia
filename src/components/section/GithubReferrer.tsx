import { Variants, motion } from "framer-motion";

import fadeUp from "@/transitions/FadeUp";

import PrimaryButton from "../button/PrimaryButton";

const GithubReferrer = () => {

  // Github fade up transition
  const githubVariants: Variants = {
    initial: {
      y: '70px',
      opacity: 0
    },
    animate: {
      y: '0',
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeInOut",
        delay: 0.5
      }
    }
  }

  return (
    <div className="h-[100vh] flex flex-col items-center justify-center">
          <motion.h3
            className="text-[1.25rem] poppins text-on-surface-variant -mb-[2] md:text-[1.953rem]"
            variants={fadeUp}
            custom={.5}
            initial='initial'
            whileInView='animate'
            viewport={{ once: true }}
          >
            Beyond this page
          </motion.h3>
          <motion.h2 
            className="mb-5 heading-1 text-on-surface text-center"
            variants={fadeUp}
            custom={.5}
            initial='initial'
            whileInView='animate'
            viewport={{ once: true }}
          >
            My Work on Github
          </motion.h2>

          <motion.div 
            className="relative w-28 h-[1px] mb-9 bg-on-surface"
            variants={fadeUp}
            custom={.5}
            initial='initial'
            whileInView='animate'
            viewport={{ once: true }}
          >
            <div className="absolute top-0 left-0 w-10 h-[1px] bg-outline" />
            <div className="absolute top-0 right-0 w-10 h-[1px] bg-outline" />
          </motion.div>

          <motion.a 
            href='https://github.com/ditramadia' target="_blank" rel="noopener noreferrer"
            variants={fadeUp}
            custom={.5}
            initial='initial'
            whileInView='animate'
            viewport={{ once: true }}
          >
            <div className="w-56 h-12">
              <PrimaryButton 
                type="outline"
                size="lg"
                roundness="full"
                text="EXPLORE MY GITHUB"
              />
            </div>
          </motion.a>
        </div>
  )
}

export default GithubReferrer