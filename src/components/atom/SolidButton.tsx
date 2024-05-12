import Image from "next/image";

interface ButtonProps {
  text: string,
  iconLeft?: string,
  iconRight?: string,
  onClick?: () => void,
};

function SolidButton(props: ButtonProps) {
  const { text, iconLeft, iconRight, onClick } = props;

  return (
    <div
      className='w-full h-full bg-primary rounded-full flex justify-center items-center body transition-colors duration-300 ease-in-out cursor-pointer group hover:bg-primary-dim'
      onClick={onClick}
    >
      { iconLeft && <Image src={`/icons/${iconLeft}`} alt="Button icon" width={20} height={20} className="w-auto mr-2"/>}
      { text && <span className="body text-on-surface">{text}</span> }
      { iconRight && <Image src={`/icons/${iconRight}`} alt="Button icon" width={20} height={20} className="w-auto ml-2"/> }
    </div>
  );
};

export default SolidButton;