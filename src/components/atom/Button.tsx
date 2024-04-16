import React from 'react'

interface ButtonProps {
  text: string,
  onClick?: () => void,
}

function Button(props: ButtonProps) {
  const { text, onClick } = props;

  return (
    <div
      className='py-3 px-10 rounded-full border-solid border-[2px] border-primary flex justify-center items-center text-primary body transition-colors duration-300 ease-in-out hover:bg-primary hover:text-surface-dim'
      onClick={onClick}
    >
      {text}
    </div>
  )
}

export default Button