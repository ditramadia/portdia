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
    <div className={`flex flex-col items-center gap-4 ${alignment === 'left' && 'md:gap-0 md:items-start'}`}>
      <div className={`flex flex-col items-center ${alignment === 'left' && 'md:flex-row md:justify-start md:items-center'}`}>
        <GlowingCircleIcon className="w-14" />
        <h2 className={`${alignment === 'center' && '-mt-2'} bold-m text-dim`}>{title}</h2>
      </div>
      
      <h3 className={`${alignment === 'left' && 'md:ml-4'} heading-5 text-light md:heading-3`}>{subtitle}</h3>
    </div>
  );
};

export default DotHeader;