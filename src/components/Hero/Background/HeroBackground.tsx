import React from 'react';
import Stars from './Stars';
import Mountains from './Mountains';
import Grass from './Grass';
import Sun from './Sun';

const HeroBackground = () => {
  return (
    <div 
      className="absolute inset-0 overflow-hidden"
      style={{ perspective: '1000px', transformStyle: 'preserve-3d' }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background/90" />
      <Stars />
      <Sun />
      <Mountains />
      <Grass />
    </div>
  );
};

export default HeroBackground;