import Link from "next/link";
import { Variants, motion } from "framer-motion";

import GlassButton from "../button/GlassButton";

interface NavbarBackProps {
  url: string
};

function NavbarBack(props: NavbarBackProps) {
  const { url } = props;

  const buttonVariants : Variants = {
    initial: {
      y: '40px',
      opacity: 0
    },
    animate: {
      y: '0px',
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeInOut"
      }
    }
  }

  return (
    <div className="fixed z-40 top-0 inset-x-0 w-full h-fit ml-5 mt-5 md:mt-8">
      <div className="max-w-[1500px] w-full md:w-11/12 mx-auto flex items-center justify-start">

        <Link href={url}>
          <motion.div 
            className="w-36 h-12"
            variants={buttonVariants}
            initial="initial"
            whileInView="animate"
          >
            <GlassButton text="Back" iconLeft="ic-arrow-back.svg" />
          </motion.div>
        </Link>

      </div>
    </div>
  );
};

export default NavbarBack;