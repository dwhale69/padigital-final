import React, { useEffect, useRef } from 'react';

const MovingSun = () => {
  const sunRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sunRef.current) return;
      const rect = sunRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const elementVisible = rect.top < viewportHeight && rect.bottom >= 0;
      
      if (elementVisible) {
        const progress = (viewportHeight - rect.top) / (viewportHeight + rect.height);
        const xPos = Math.min(progress * 120, 100); // Move from -20% to 100%
        const scale = Math.max(0.5 - progress * 0.3, 0.2); // Scale down as it moves
        
        sunRef.current.style.transform = `
          translateX(${xPos}%)
          scale(${scale})
        `;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      ref={sunRef}
      className="absolute left-[-20%] top-20 transition-transform duration-300"
      style={{ transformStyle: 'preserve-3d' }}
    >
      <div className="relative">
        {/* Massive outer glow layers */}
        <div className="absolute -inset-24 bg-primary/5 rounded-full blur-[60px]" />
        <div className="absolute -inset-16 bg-primary/10 rounded-full blur-[40px]" />
        <div className="absolute -inset-8 bg-primary/15 rounded-full blur-[20px]" />
        
        {/* Main sun container */}
        <div className="relative w-8 h-8">
          {/* Gradient ring layers */}
          <div className="absolute -inset-6 rounded-full border-[8px] border-primary/5 blur-[15px]" />
          <div className="absolute -inset-4 rounded-full border-[6px] border-primary/10 blur-[10px]" />
          <div className="absolute -inset-2 rounded-full border-[4px] border-primary/15 blur-[5px]" />
          <div className="absolute inset-0 rounded-full border-[2px] border-primary/20" />
          
          {/* Inner glow layers */}
          <div className="absolute inset-1 bg-primary/15 rounded-full blur-[10px] animate-pulse" />
          <div className="absolute inset-2 bg-primary/10 rounded-full blur-[5px] animate-pulse" />
          
          {/* Central core */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-4 h-4 bg-primary/10 rounded-full blur-[5px] animate-pulse" />
          </div>
          
          {/* Dark center */}
          <div className="absolute inset-0 rounded-full bg-transparent backdrop-blur-sm">
            <div className="absolute inset-0 bg-black/95 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovingSun;