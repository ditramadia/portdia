import React from 'react';

interface ExperienceCardProps {
  title: string;
  company: string;
  timeline: string;
  description: string;
  image: string;
  active?: boolean;
  onClick?: () => void;
};

const ExperienceCard = (props: ExperienceCardProps) => {
  const { title, company, timeline, description, image, active, onClick } = props;

  return (
    <div 
      className={`transition-300 cursor-pointer ${!active && 'lg:opacity-30'} lg:p-6 lg:border-[1px] lg:rounded-xl lg:border-outline lg:hover:opacity-100`}
      onClick={onClick}
    >
      <p className='text-tertiary body-s lg:body-m'>{company.toLocaleUpperCase()}</p>
      <p className='text-light heading-6 lg:heading-5'>{title}</p>
      <p className='mt-1 text-dim body-m'>{timeline}</p>
      <p className='mt-2 text-dim body-m'>{description}</p>
    </div>
  );
};

export default ExperienceCard;