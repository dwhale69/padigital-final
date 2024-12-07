import React from 'react';
import FloatingCard from './FloatingCard';

const FloatingElements = () => {
  const elements = [
    { name: 'Total Farms', value: '1,234', position: 'md:top-32 md:left-32 top-20 left-4' },
    { name: 'Hectares', value: '5,678', position: 'md:top-32 md:right-32 top-20 right-4' },
    { name: 'Investors', value: '3,456', position: 'md:bottom-32 md:left-32 bottom-20 left-4' },
    { name: 'Rice Tokens', value: '789K', position: 'md:bottom-32 md:right-32 bottom-20 right-4' },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none">
      <div className="relative h-full max-w-7xl mx-auto">
        {elements.map((element) => (
          <FloatingCard
            key={element.name}
            name={element.name}
            value={element.value}
            className={element.position}
          />
        ))}
      </div>
    </div>
  );
};

export default FloatingElements;