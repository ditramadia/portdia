import React from 'react';

import DotHeader from '@/components/display/DotHeader';
import ProductCard from '@/components/card/ProductCard';

import products from '@/data/products';

const ProductSection = () => {
  return (
    <div className='container-sm mt-36 flex flex-col items-center md:container-base'>
      <DotHeader alignment='center' title='PRODUCTS' subtitle='What I can give you.'/>

      <div className='mt-16 flex flex-col gap-12 items-center md:flex-row md:mt-20'>
        {
          products.map((product) => (
            <ProductCard key={product.id} title={product.title} description={product.description} image={product.image} />
          ))
        }
      </div>
    </div>
  );
};

export default ProductSection;