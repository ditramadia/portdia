import Image from "next/image";

import Logo from "@public/images/portdia-logo.png";
import ArrowLinkIcon from "@/components/icons/ArrowLinkIcon";

import NavToggle from "./NavToggle";
import GlassButton from "../button/GlassButton";
import PrimaryButton from "../button/PrimaryButton";

interface NavbarProps {
  active: "work" | "about",
};

function Navbar(props: NavbarProps) {
  const { active } = props;

  return (
    <div className="fixed z-40 top-0 inset-x-0 container bg-red-500 h-fit mx-auto mt-5 md:mt-8">
      <div className="relative w-full md:w-11/12 mx-auto flex items-center justify-center">

        <div className="absolute top-0 left-0 flex items-center gap-4">
          <Image src={Logo} alt="Portdia logo" height={56} draggable={false}/>
          <div className="hidden md:flex flex-col">
            <span className="body-1 text-on-surface">Ditra Amadia.</span>
            <span className="body-2 text-on-surface-variant">Full-Stack Developer</span>
          </div>
        </div>

        <NavToggle active={active}/>

        <a href="https://drive.google.com/file/d/1CRswzCp9LZNwNbTxMcPSmIMR6LAXf0Ng/view?usp=sharing" rel="noopener noreferrer" target="_blank">
          <div className="absolute top-0 right-0 h-full flex items-center">

            <div className="w-12 h-12 md:hidden">
              <GlassButton iconRight="ic-arrow-link.svg" />
            </div>

            <div className="hidden w-fit md:inline-block">
              <PrimaryButton 
                text="Resume"
                rightIcon={<ArrowLinkIcon width="1rem" height="1rem" />}
                type="text"
                size="md"
                roundness="full"
              />
            </div>

          </div>
        </a>

      </div>
    </div>
  );
};

export default Navbar;