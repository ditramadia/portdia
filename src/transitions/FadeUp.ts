import { Variants } from "framer-motion";

const fadeUp: Variants = {
  initial: {
    y: '64px',
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

export default fadeUp;