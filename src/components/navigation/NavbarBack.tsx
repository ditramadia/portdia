import Link from "next/link";

import ArrowLeftIcon from "@/components/icons/ArrowLeftIcon";
import GlassButton from "@/components/button/GlassButton";
import ArrowLinkIcon from "@/components/icons/ArrowLinkIcon";
import PrimaryButton from "@/components/button/PrimaryButton";

interface NavbarBackProps {
  backDestination: string
};

const NavbarBack = (props: NavbarBackProps) => {
  const { backDestination } = props;

  return (
    <div className="fixed z-40 top-0 inset-x-0 container-base h-fit mx-auto mt-5 md:mt-8">
      <div className="w-fit">
        <Link href={backDestination}>
          <GlassButton 
            type="contained"
            size="md"
            roundness="full"
            leftIcon={<ArrowLeftIcon width="1rem" height="1rem" />}
            text="Back"
          />
        </Link>
      </div>

      <a href="https://drive.google.com/file/d/1CRswzCp9LZNwNbTxMcPSmIMR6LAXf0Ng/view?usp=sharing" rel="noopener noreferrer" target="_blank">
        <div className="absolute top-0 right-0 h-full flex items-center">

          {/* Resume button for small screen */}
          <div className="w-12 h-12 mr-2 md:hidden">
            <GlassButton 
              type="contained"
              size="md"
              roundness="full"
              leftIcon={<ArrowLinkIcon width="1rem" height="1rem" />}
            />
          </div>

          {/* Resume button for large screen */}
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
  );
};

export default NavbarBack;