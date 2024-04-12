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
    <div className="fixed top-0 left-0 right-0 w-full h-fit mt-5 flex items-center justify-center">

      <div className="absolute top-0 left-0">
        <Image src={Logo} alt="Portdia logo" height={56}/>
      </div>

      <NavToggle active={active}/>

      <a href="https://drive.google.com/file/d/1CRswzCp9LZNwNbTxMcPSmIMR6LAXf0Ng/view?usp=sharing" rel="noopener noreferrer" target="_blank">
        <div className="absolute top-1 right-2 w-12 h-12 flex justify-center items-center glass-blur rounded-full cursor-pointer">
          <Image src={LinkArrow} alt="Arrow icon" height={20}/>
        </div>
      </a>
    
    </div>
  );
};

export default Navbar;