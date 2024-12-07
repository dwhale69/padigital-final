import React from 'react';

interface GlowingCircleProps {
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  size?: 'small' | 'medium' | 'large';
  intensity?: 'low' | 'medium' | 'high';
}

const GlowingCircle = ({ 
  position = 'top-right',
  size = 'medium',
  intensity = 'medium'
}: GlowingCircleProps) => {
  const sizeClasses = {
    small: '-inset-16',
    medium: '-inset-32',
    large: '-inset-48'
  };

  const intensityClasses = {
    low: 'bg-primary/5',
    medium: 'bg-primary/10',
    high: 'bg-primary/15'
  };

  const positionClasses = {
    'top-left': 'left-0 top-0',
    'top-right': 'right-0 top-0',
    'bottom-left': 'left-0 bottom-0',
    'bottom-right': 'right-0 bottom-0'
  };

  return (
    <div className={`absolute ${positionClasses[position]} pointer-events-none`}>
      <div className={`absolute ${sizeClasses[size]} ${intensityClasses[intensity]} rounded-full blur-[100px]`} />
    </div>
  );
};

export default GlowingCircle;