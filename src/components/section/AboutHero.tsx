import React from 'react';
import Image from 'next/image';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const AboutHero = () => {
  return (
    <div className='container-sm min-h-screen pt-36 flex flex-col justify-center items-center gap-24 md:relative md:h-screen md:pt-0'>
      <div className='md:relative md:-left-24 md:z-40'>
        <div>
          <h1 className='text-primary heading-6 text-center md:heading-5 md:text-start'>Hi, I'm Ditra Amadia</h1>
          <h2 className='text-light heading-4 text-center md:heading-3 md:text-start md:mt-4 md:leading-tight'>Full Stack Developer with over 3 years of experience, majoring in computer science at Institut Teknologi Bandung</h2>
        </div>

        <div className='w-full h-12 mt-6 flex justify-center gap-4 md:justify-start md:h-8'>
          <a href="" target='_blank' rel="noopener noreferrer">
            <FontAwesomeIcon className='h-full text-light hover:text-secondary cursor-pointer transition-300' icon={faGithub} />
          </a>
          <a href="" target='_blank' rel="noopener noreferrer">
            <FontAwesomeIcon className='h-full text-light hover:text-secondary cursor-pointer transition-300' icon={faLinkedin} />
          </a>
        </div>
      </div>

      <div className='h-72 flex gap-5 md:absolute md:right-0 md:top-32'>
        <div className='relative top-14 w-24 h-52 md:w-40 md:h-96 md:top-20 md:opacity-60'>
          <Image src="/images/ditra-1.png" alt='Picture of me' fill style={{objectFit: "cover"}} />
        </div>
        <div className='relative w-24 h-52 md:w-40 md:h-96 md:opacity-60'>
          <Image src="/images/itb-1.png" alt='Picture of me' fill style={{objectFit: "cover"}} />
        </div>
      </div>
    </div>
  );
};

export default AboutHero;