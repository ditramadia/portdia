import Image from "next/image";

interface DarkBrowserWindowProps {
  image: string,
  imageAlt: string,
};

const DarkBrowserWindow = (props: DarkBrowserWindowProps) => {
  const { image, imageAlt } = props;
  
  return (
    <div className="w-full h-fit rounded-xl overflow-hidden flex flex-col items-center">
      <Image 
        src='/images/browser-window-dark.jpg'
        alt={imageAlt}
        width={0}
        height={0}
        layout="responsive"
        draggable="false"
      />
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

export default DarkBrowserWindow;