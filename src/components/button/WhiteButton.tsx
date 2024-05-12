import ButtonProps from "@/interfaces/props/ButtonProps";

const WhiteButton = (props: ButtonProps) => {
  const { text, type, size, roundness, leftIcon, rightIcon, onClick, disabled} = props;

  const btnColor = `${type === 'contained' && 'bg-neutral-100 text-dark hover:bg-neutral-300'}
                    ${type === 'outline' && 'bg-transparent border-2 border-neutral-100 text-light hover:bg-neutral-100 hover:text-dark'}
                    ${type === 'text' && 'bg-transparent text-light hover:bg-neutral-100 hover:text-dark'}`;
  const btnSize = `${size === 'sm' && 'button-spacing-sm body-s'}
                    ${size === 'md' && 'button-spacing-md body-m'}
                    ${size === 'lg' && 'button-spacing-lg body-m'}`;
  const btnRoundness = `${roundness === 'full' && 'rounded-full'}`;
  const btnDisabled = `${disabled ? 'button-disabled' : 'button-enabled'}`;

  return (
    <div 
      className={`w-full h-full ${text && btnSize} ${btnColor} ${btnDisabled} ${btnRoundness} flex justify-center items-center transition-500`}
      onClick={onClick}
    >
      {leftIcon}
      {text}
      {rightIcon}
    </div>
  );
};

export default WhiteButton;