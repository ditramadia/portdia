import Image from 'next/image';

interface GlassBrowserWindowProps {
  image: string,
  imageAlt: string,
};

const GlassBrowserWindow = (props: GlassBrowserWindowProps) => {
  const { image, imageAlt } = props;

  return (
    <div className='w-full'>
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

export default GlassBrowserWindow;