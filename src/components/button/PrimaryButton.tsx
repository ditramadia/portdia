import ButtonProps from "@/interfaces/props/ButtonProps";

const PrimaryButton = (props: ButtonProps) => {
  const { text, type, size, roundness, leftIcon, rightIcon, onClick, disabled} = props;

  const btnColor = `${type === 'contained' && 'bg-primary text-on-surface hover:bg-primary-dim'}
                    ${type === 'outline' && 'bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-on-surface'}
                    ${type === 'text' && 'bg-transparent text-on-surface hover:bg-primary'}`;
  const btnSize = `${size === 'sm' && 'px-4 py-2 gap-2 body-2'}
                    ${size === 'md' && 'px-6 py-3 gap-2 body-1'}
                    ${size === 'lg' && 'px-8 py-4 gap-3 body-1'}`;
  const btnRoundness = `${roundness === 'full' && 'rounded-full'}`;
  const btnDisabled = `${disabled ? 'opacity-50 pointer-events-none cursor-default' : 'opacity-100 cursor-pointer'}`;

  return (
    <div 
      className={`w-full h-fit ${btnSize} ${btnColor} ${btnDisabled} ${btnRoundness} flex justify-center items-center transition-500`}
      onClick={onClick}
    >
      {leftIcon}
      {text}
      {rightIcon}
    </div>
  );
};

export default PrimaryButton;