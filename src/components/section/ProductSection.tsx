import React from 'react';
import { motion } from 'framer-motion';

import DotHeader from '@/components/display/DotHeader';
import ProductCard from '@/components/card/ProductCard';

import products from '@/data/products';

const ProductSection = () => {
  return (
    <div className='container-sm mt-36 flex flex-col items-center md:container-base'>
      <DotHeader alignment='center' title='PRODUCTS' subtitle='What I can give you.'/>

      <div className='mt-16 flex flex-col gap-12 items-center md:flex-row md:mt-20 md:gap-6'>
        {
          products.map((product) => (
            <motion.div 
              key={product.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * product.id, ease: 'easeInOut' }}
              viewport={{ once: true }}
            >
              <ProductCard title={product.title} description={product.description} image={product.image} />
            </motion.div>
          ))
        }
      </div>
    </div>
  );
};

export default ProductSection;