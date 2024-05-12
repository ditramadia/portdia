import Image from "next/image";

interface GlassButtonProps {
  text?: string,
  iconLeft?: string,
  iconRight?: string,
}

function GlassButton(props: GlassButtonProps) {
  const { text, iconLeft, iconRight } = props;

  return (
    <div className="relative w-full h-full mr-2 flex justify-center items-center glass-blur rounded-full cursor-pointer group">
      <div className="absolute inset-0 opacity-0 rounded-full bg-gradient-to-r from-on-surface/20 to-transparent transition-opacity duration-300 ease-in-out group-hover:opacity-100" />

      { iconLeft && <Image src={`/icons/${iconLeft}`} alt="Button icon" width={20} height={20} className={`w-auto ${text ? 'mr-2' : ''}`}/> }
      { text && <span className="body text-on-surface">{text}</span> }
      { iconRight && <Image src={`/icons/${iconRight}`} alt="Button icon" width={20} height={20} className={`w-auto ${text ? 'ml-2' : ''}`}/> }
    </div>
  )
}

export default GlassButton