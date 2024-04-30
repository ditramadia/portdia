import ButtonProps from "@/interfaces/props/ButtonProps";

const PrimaryButton = (props: ButtonProps) => {
  const { text, type, size, roundness, leftIcon, rightIcon, onClick, disabled} = props;

  const btnColor = `${type === 'contained' && 'bg-primary text-on-surface hover:bg-primary-dim'}
                    ${type === 'outline' && 'bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-on-surface'}
                    ${type === 'text' && 'bg-transparent text-on-surface hover:bg-primary'}`;
  const btnSize = `${size === 'sm' && 'button-spacing-sm body-2'}
                    ${size === 'md' && 'button-spacing-md body-1'}
                    ${size === 'lg' && 'button-spacing-lg body-1'}`;
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