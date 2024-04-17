interface OutlineButtonProps {
  text: string,
  onClick?: () => void,
};

function OutlineButton(props: OutlineButtonProps) {
  const { text, onClick } = props;

  return (
    <div
      className='w-full h-full rounded-full border-solid border-[2px] border-primary flex justify-center items-center text-primary body transition-colors duration-300 ease-in-out hover:bg-primary hover:text-surface-dim'
      onClick={onClick}
    >
      {text}
    </div>
  );
};

export default OutlineButton;