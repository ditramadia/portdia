import Image from "next/image";

import Logo from "@public/images/portdia-logo.png";
import LinkArrow from "@public/icons/ic-arrow.svg";

import NavToggle from "../molecule/NavToggle";

interface NavbarProps {
  active: "work" | "about",
};

function Navbar(props: NavbarProps) {
  const { active } = props;

  return (
    <div className="fixed z-50 top-0 inset-x-0 w-full h-fit mt-5 md:mt-8">
      <div className="relative max-w-[1500px] w-full md:w-11/12 mx-auto flex items-center justify-center">

        <div className="absolute top-0 left-0 flex items-center gap-4">
          <Image src={Logo} alt="Portdia logo" height={56} draggable={false}/>
          <div className="hidden md:flex flex-col">
            <span className="body text-on-surface">Ditra Amadia.</span>
            <span className="body-2 text-on-surface-variant">Full-Stack Developer</span>
          </div>
        </div>

        <NavToggle active={active}/>

        <a href="https://drive.google.com/file/d/1CRswzCp9LZNwNbTxMcPSmIMR6LAXf0Ng/view?usp=sharing" rel="noopener noreferrer" target="_blank">
          <div className="absolute top-0 right-0 h-full flex items-center">
          
            <div className="w-12 h-12 mr-2 flex justify-center items-center glass-blur rounded-full cursor-pointer md:hidden">
              <Image src={LinkArrow} alt="Arrow icon" height={20} className="w-auto"/>
            </div>

            <div className="hidden px-6 py-3 rounded-full md:flex gap-2 text-on-surface body transition-colors ease-in-out duration-500 hover:bg-primary">
              Resume
              <Image src={LinkArrow} alt="Link arrow" height={16} className="w-auto"/>
            </div>

          </div>
        </a>

      </div>
    </div>
  );
};

export default Navbar;