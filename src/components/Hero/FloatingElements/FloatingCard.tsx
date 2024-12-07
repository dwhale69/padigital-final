import React from 'react';

interface FloatingCardProps {
  name: string;
  value: string;
  className?: string;
}

const FloatingCard = ({ name, value, className }: FloatingCardProps) => {
  return (
    <div 
      className={`
        absolute transform transition-all duration-300
        scale-75 md:scale-100
        ${className}
        bg-black/30 backdrop-blur-sm 
        px-4 py-2 rounded-lg 
        border border-primary/10
        hover:border-primary/30
        hover:bg-black/40
        group
      `}
    >
      <div className="text-white/80 text-xs md:text-sm font-medium group-hover:text-white transition-colors">
        {name}
      </div>
      <div className="text-primary text-sm md:text-base font-semibold">
        {value}
      </div>
    </div>
  );
};

export default FloatingCard;