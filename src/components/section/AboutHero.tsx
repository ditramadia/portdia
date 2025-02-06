import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const AboutHero = () => {
  return (
    <div className='container-sm min-h-screen pt-36 flex flex-col justify-center items-center gap-24 md:relative md:h-screen md:pt-0'>
      <div className='md:relative md:-left-24 md:z-40'>
        <div>
          <motion.h1 
            className='text-primary heading-6 text-center md:heading-5 md:text-start'
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut', delay: 0}}
          >Hi, I'm Ditra Amadia</motion.h1>
          <motion.h2
            className='mt-4 text-light heading-4 text-center md:heading-3 md:text-start md:mt-4 md:leading-tight'
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.2}}
          >Full Stack Developer, currently majoring in informatics engineering at Institut Teknologi Bandung</motion.h2>
        </div>

        <motion.div 
          className='w-full h-12 mt-6 flex justify-center gap-4 md:justify-start md:h-8'
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.4}}
        >
          <a href="" target='_blank' rel="noopener noreferrer">
            <FontAwesomeIcon className='h-full text-light hover:text-secondary cursor-pointer transition-300' icon={faGithub} />
          </a>
          <a href="" target='_blank' rel="noopener noreferrer">
            <FontAwesomeIcon className='h-full text-light hover:text-secondary cursor-pointer transition-300' icon={faLinkedin} />
          </a>
        </motion.div>
      </div>

      <div className='h-72 flex gap-5 md:absolute md:right-0 md:top-32'>
        <motion.div 
          className='relative top-14 w-32 h-72 md:w-40 md:h-96 md:top-20 md:opacity-60'
          initial={{ opacity: 0, y: 48 }}
          animate={{ opacity: 0.8, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut', delay: 1}}
        >
          <Image src="/images/ditra-1.jpg" alt='A picture of me' fill style={{objectFit: "cover"}}  draggable={false} />
        </motion.div>
        <motion.div 
          className='relative w-32 h-72 md:w-40 md:h-96 md:opacity-60'
          initial={{ opacity: 0, y: 48 }}
          animate={{ opacity: 0.6, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut', delay: 1.2}}
        >
          <Image src="/images/itb-1.png" alt='ITB, my university' fill style={{objectFit: "cover"}} draggable={false} />
        </motion.div>
      </div>
    </div>
  );
};

export default AboutHero;