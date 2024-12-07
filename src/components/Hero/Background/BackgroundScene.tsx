import React from 'react';
import Stars from './Stars';
import Mountains from './Mountains';
import Sun from './Sun';
import Particles from './Particles';

const BackgroundScene = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background/90" />
      <Stars />
      <Particles />
      <Sun />
      <Mountains />
    </div>
  );
};

export default BackgroundScene;