import Image from "next/image";

interface DarkPhoneFrameProps {
  image: string,
  imageAlt: string,
};

const DarkPhoneFrame = (props: DarkPhoneFrameProps) => {
  const { image, imageAlt } = props;
  
  return (
    <div className="relative w-full h-fit rounded-xl overflow-hidden flex flex-col items-center">
      <Image 
        src={`/images/${image}`}
        alt={imageAlt}
        width={0}
        height={0}
        layout="responsive"
        draggable="false"
      />
    </div>
  );
};

export default DarkPhoneFrame;