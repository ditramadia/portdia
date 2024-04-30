import { Variants } from "framer-motion";

const fadeIn: Variants = {
  initial: {
    opacity: 0
  },
  animate: i => ({
    y: '0',
    opacity: 1,
    transition: {
      duration: 1,
      ease: "easeInOut",
      delay: i
    }
  })
}

export default fadeIn;