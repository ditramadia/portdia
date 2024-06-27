import React, { useState } from 'react';
import { motion } from 'framer-motion';

import DotHeader from '@/components/display/DotHeader';
import ExperienceCard from '@/components/card/ExperienceCard';

import experiences from '@/data/experiences';

const ExperienceSection = () => {
  const [activeExperience, setActiveExperience] = useState(0);

  return (
    <div className='container-sm mt-36 flex flex-col md:container-base md:mt-64'>
      <DotHeader alignment='center' title='EXPERIENCE' subtitle='My Professional Experience.'/>
    
      <div className='w-11/12 mx-auto mt-16 flex flex-col items-center gap-12 lg:mt-20 lg:gap-6'>
        {
          experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? 100 : -100}}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: 'easeInOut', delay: 0.6 }}
              viewport={{ once: true }}
            >
              <ExperienceCard 
                key={index}
                id={index}
                {...experience} 
              />
            </motion.div>
          ))
        }
      </div>
    </div>
  );
};

export default ExperienceSection;