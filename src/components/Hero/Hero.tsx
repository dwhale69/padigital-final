import React from 'react';
import Navigation from './Navigation/Navigation';
import MainContent from './MainContent/MainContent';
import BackgroundScene from './Background/BackgroundScene';

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-background overflow-hidden">
      <Navigation />
      <BackgroundScene />
      <MainContent />
    </div>
  );
};

export default Hero;