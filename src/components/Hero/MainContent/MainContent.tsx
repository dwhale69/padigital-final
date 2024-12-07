import React from 'react';
import MainHeading from './MainHeading';
import Description from './Description';
import ActionButtons from './ActionButtons';
import StatsGrid from './StatsGrid';

const MainContent = () => {
  return (
    <div className="relative z-10 min-h-screen flex items-center justify-center text-center pt-20 sm:pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <MainHeading />
          <Description />
          <ActionButtons />
          <StatsGrid />
        </div>
      </div>
    </div>
  );
};

export default MainContent;