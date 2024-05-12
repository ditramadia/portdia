interface ButtonProps {
  type: 'contained' | 'outline' | 'text',
  size: 'sm' | 'md' | 'lg',
  roundness: 'full',
  text?: string,
  leftIcon?: React.ReactElement,
  rightIcon?: React.ReactElement,
  onClick?: () => void,
  disabled?: boolean
};

export default ButtonProps;