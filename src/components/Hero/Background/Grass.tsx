import React from 'react';

const Grass = () => {
  return (
    <div className="absolute bottom-0 w-full overflow-hidden">
      <div className="relative h-32">
        {/* Grass Layer 1 */}
        <div className="absolute bottom-0 w-full">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute bottom-0 w-2 bg-primary animate-sway"
              style={{
                height: `${Math.random() * 40 + 40}px`,
                left: `${(i / 20) * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
        
        {/* Grass Layer 2 */}
        <div className="absolute bottom-0 w-full">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute bottom-0 w-2 bg-primary/80 animate-sway-slow"
              style={{
                height: `${Math.random() * 30 + 30}px`,
                left: `${((i + 0.5) / 15) * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Grass;