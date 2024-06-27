import React from 'react';

interface ExperienceCardProps {
  id: number;
  title: string;
  company: string;
  timeline: string;
  description: string;
};

const ExperienceCard = (props: ExperienceCardProps) => {
  const { id, title, company, timeline, description } = props;

  return (
    <div 
      className={`max-w-[800px] ${id % 2 === 0 ? 'md:-ml-36' : 'md:ml-36'} transition-300 cursor-pointer lg:p-6 lg:border-[1px] lg:rounded-xl lg:border-outline lg:hover:opacity-100`}>
      <p className='text-tertiary body-s lg:body-m'>{company.toLocaleUpperCase()}</p>
      <p className='text-light heading-6 lg:heading-5'>{title}</p>
      <p className='mt-1 text-dim body-m'>{timeline}</p>
      <p className='mt-2 text-dim body-m'>{description}</p>
    </div>
  );
};

export default ExperienceCard;