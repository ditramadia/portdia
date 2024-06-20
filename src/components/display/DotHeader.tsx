import React from 'react';

import GlowingCircleIcon from '@/components/icons/GlowingCircleIcon';

interface DotHeaderProps {
  alignment: 'center' | 'left';
  title: string;
  subtitle: string;
}

const DotHeader = (props: DotHeaderProps) => {
  const { alignment, title, subtitle } = props;

  return (
    <div className={`flex flex-col ${alignment === 'center' && 'items-center gap-4' || alignment === 'left' && 'items-left'}`}>
      <div className={`flex ${alignment === 'center' && 'flex-col items-center' || alignment === 'left' && 'flex-row justify-start items-center'}`}>
        <GlowingCircleIcon className="w-14" />
        <h2 className={`${alignment === 'center' && '-mt-2'} bold-m text-dim`}>{title}</h2>
      </div>
      
      <h3 className={`${alignment === 'left' && 'ml-4'} heading-5 text-light`}>{subtitle}</h3>
    </div>
  );
};

export default DotHeader;