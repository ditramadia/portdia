import React, { useState } from 'react';

import DotHeader from '@/components/display/DotHeader';

import experiences from '@/data/experiences';
import ExperienceCard from '../card/ExperienceCard';

const ExperienceSection = () => {
  const [activeExperience, setActiveExperience] = useState(0);

  return (
    <div className='container-sm mt-36 flex flex-col md:container-base md:mt-64 md:flex-row'>
      <div className='hidden lg:flex lg:items-center lg:justify-center lg:basis-1/2'>

      </div>

      <div className='lg:basis-1/2'>
        <DotHeader alignment='left' title='EXPERIENCE' subtitle='My Professional Experience.'/>
      
        <div className='w-11/12 mx-auto mt-16 flex flex-col gap-12 lg:mt-20 lg:gap-6'>
          {
            experiences.map((experience, index) => (
              <ExperienceCard 
                key={index} 
                {...experience} 
                active={index === activeExperience}
                onClick={() => setActiveExperience(index)}
              />
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;