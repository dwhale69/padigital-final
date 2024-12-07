import React from 'react';
import Stars from '../Hero/Background/Stars';

const CommunityBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background/90" />
      <Stars />
      <div className="absolute right-[10%] top-20 w-32 h-32">
        <div className="absolute inset-0 bg-primary/5 rounded-full blur-[100px]" />
      </div>
      <div className="absolute left-[20%] bottom-20 w-48 h-48">
        <div className="absolute inset-0 bg-primary/10 rounded-full blur-[80px]" />
      </div>
    </div>
  );
};

export default CommunityBackground;