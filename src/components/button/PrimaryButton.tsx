import ButtonProps from "@/interfaces/props/ButtonProps";

const PrimaryButton = (props: ButtonProps) => {
  const { text, type, size, roundness, leftIcon, rightIcon, onClick, disabled} = props;

  const btnColor = `${type === 'contained' && 'bg-primary text-light hover:bg-primary-dim'}
                    ${type === 'outline' && 'bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-light'}
                    ${type === 'text' && 'bg-transparent text-light hover:bg-primary'}`;
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

export default PrimaryButton;