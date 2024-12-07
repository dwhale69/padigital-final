import React from 'react';

const MainHeading = () => {
  return (
    <div className="mb-4 px-4 sm:px-0">
      <div className="relative inline-block mb-4">
        {/* Curved box background with glow effect */}
        <div className="absolute -inset-2 bg-primary/5 rounded-full blur-xl" />
        <div className="relative px-4 sm:px-6 py-2 bg-black/30 backdrop-blur-sm rounded-full border border-primary/20">
          <p className="text-primary text-base sm:text-lg md:text-xl lg:text-2xl font-medium whitespace-nowrap">
            The Future of Agriculture is Here
          </p>
        </div>
      </div>
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight">
        Own Your{' '}
        <span className="text-primary block sm:inline">Digital Farm</span>
      </h1>
    </div>
  );
};

export default MainHeading;