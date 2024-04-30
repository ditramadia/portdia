import ButtonProps from "@/interfaces/props/ButtonProps";

function GlassButton(props: ButtonProps) {
  const { text, size, roundness, leftIcon, rightIcon, onClick, disabled} = props;

  const btnSize = `${size === 'sm' && 'button-spacing-sm body-2'}
                  ${size === 'md' && 'button-spacing-md body-1'}
                  ${size === 'lg' && 'button-spacing-lg body-1'}`;
  const btnRoundness = `${roundness === 'full' && 'rounded-full'}`;
  const btnDisabled = `${disabled ? 'button-disabled' : 'button-enabled'}`;

  return (
    <div 
      className={`relative w-full h-full ${text && btnSize} ${btnRoundness} ${btnDisabled} text-on-surface flex justify-center items-center glass-blur group`}
      onClick={onClick}  
    >
      <div className="absolute inset-0 opacity-0 rounded-full bg-gradient-to-r from-on-surface/20 to-transparent transition-300 group-hover:opacity-100" />
      {leftIcon}
      {text}
      {rightIcon}
    </div>
  )
}

export default GlassButton