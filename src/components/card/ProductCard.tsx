import React from 'react';

interface ProductCardProps {
  title: string;
  description: string;
  image: string;
};

const ProductCard = (props: ProductCardProps) => {
  const { title, description, image } = props;

  return (
    <div className='max-w-[320px] md:p-5 md:bg-surface-container md:border-[1px] md:border-outline md:rounded-xl'>
      <div>
        <p className='heading-6 text-light'>{title}</p>
        <p className='mt-2 body-m text-dim'>{description}</p>
      </div>

      <div className='mt-4 bg-surface-container overflow-hidden w-full h-48 rounded-lg md:bg-surface'></div>
    </div>
  );
};

export default ProductCard;