import React from 'react';

const HeroStats = () => {
  return (
    <div className="grid grid-cols-1 gap-6 lg:gap-8">
      <div 
        className="text-center p-6 bg-background/50 rounded-xl border border-primary/20 backdrop-blur-sm"
      >
        <div className="text-4xl font-bold text-primary mb-2">1,000+</div>
        <div className="text-white/80 text-sm">Hectares Under Management</div>
      </div>
    </div>
  );
};

export default HeroStats;