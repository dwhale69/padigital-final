import React, { useEffect, useRef } from 'react';

const Sun = () => {
  const sunRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleParallax = () => {
      if (!sunRef.current) return;
      const scrolled = window.scrollY;
      const viewportHeight = window.innerHeight;
      const scrollPercentage = (scrolled / viewportHeight) * 100;
      
      const yOffset = Math.min(scrollPercentage * 2, 100);
      const scale = Math.max(1 - scrollPercentage * 0.005, 0.5);
      
      sunRef.current.style.transform = `
        translate(-50%, ${yOffset}px)
        scale(${scale})
      `;
    };

    window.addEventListener('scroll', handleParallax);
    return () => window.removeEventListener('scroll', handleParallax);
  }, []);

  return (
    <div 
      ref={sunRef}
      className="absolute right-[10%] md:right-[20%] bottom-[25vh] -translate-x-1/2 transition-transform"
      style={{ transformStyle: 'preserve-3d' }}
    >
      <div className="relative">
        {/* Massive outer glow layers */}
        <div className="absolute -inset-32 bg-primary/5 rounded-full blur-[80px]" />
        <div className="absolute -inset-24 bg-primary/10 rounded-full blur-[60px]" />
        <div className="absolute -inset-16 bg-primary/15 rounded-full blur-[40px]" />
        
        {/* Main sun container */}
        <div className="relative w-12 h-12">
          {/* Gradient ring layers */}
          <div className="absolute -inset-8 rounded-full border-[15px] border-primary/5 blur-[20px]" />
          <div className="absolute -inset-6 rounded-full border-[12px] border-primary/10 blur-[15px]" />
          <div className="absolute -inset-4 rounded-full border-[10px] border-primary/15 blur-[10px]" />
          <div className="absolute -inset-2 rounded-full border-[8px] border-primary/20 blur-[5px]" />
          <div className="absolute inset-0 rounded-full border-[5px] border-primary/30" />
          
          {/* Inner glow layers */}
          <div className="absolute inset-2 bg-primary/20 rounded-full blur-[20px] animate-pulse" />
          <div className="absolute inset-3 bg-primary/15 rounded-full blur-[15px] animate-pulse" />
          <div className="absolute inset-4 bg-primary/10 rounded-full blur-[10px] animate-pulse" />
          
          {/* Central core */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-8 h-8 bg-primary/20 rounded-full blur-[15px] animate-pulse" />
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

export default Sun;