import { Variants } from "framer-motion";

const SlideLeft: Variants = {
  initial: {
    x: '64px',
    opacity: 0
  },
  animate: i => ({
    x: '0',
    opacity: 1,
    transition: {
      duration: 1,
      ease: "easeInOut",
      delay: i
    }
  })
}

export default SlideLeft;