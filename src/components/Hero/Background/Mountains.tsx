import React, { useEffect, useRef } from 'react';

const Mountains = () => {
  const mountainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleParallax = () => {
      if (!mountainRef.current) return;
      const scrolled = window.scrollY;
      const viewportHeight = window.innerHeight;
      const scrollPercentage = (scrolled / viewportHeight) * 100;
      
      const perspective = Math.min(scrollPercentage * 0.5, 50);
      
      mountainRef.current.style.transform = `perspective(1000px) rotateX(${perspective * 0.1}deg)`;
      
      const mountains = mountainRef.current.children;
      Array.from(mountains).forEach((mountain, index) => {
        const speed = (index + 1) * 0.4;
        const yPos = scrolled * speed;
        const scale = 1 + (scrollPercentage * 0.001 * (index + 1));
        (mountain as HTMLElement).style.transform = `
          translateY(${yPos}px)
          scale(${scale})
          translateZ(${-index * 100}px)
        `;
      });
    };

    window.addEventListener('scroll', handleParallax);
    return () => window.removeEventListener('scroll', handleParallax);
  }, []);

  const MountainShape = ({ height, clipPath, glowIntensity, glowOffset }: { 
    height: string; 
    clipPath: string;
    glowIntensity: string;
    glowOffset: string;
  }) => (
    <div className="relative">
      {/* Gradient glow effect */}
      <div 
        className={`absolute bottom-0 w-full ${height} transition-transform`}
        style={{
          clipPath,
          background: `radial-gradient(
            circle at ${glowOffset},
            rgba(116, 250, 4, ${glowIntensity}) 0%,
            rgba(116, 250, 4, 0) 70%
          )`,
          filter: 'blur(50px)',
        }}
      />
      
      {/* Mountain shape */}
      <div 
        className={`absolute bottom-0 w-full ${height} bg-black transition-transform`}
        style={{
          clipPath,
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Edge highlight */}
        <div 
          className="absolute inset-0"
          style={{
            background: `linear-gradient(
              90deg,
              rgba(116, 250, 4, 0.1) 0%,
              rgba(116, 250, 4, 0.05) 50%,
              rgba(116, 250, 4, 0) 100%
            )`
          }}
        />
      </div>
    </div>
  );

  return (
    <div 
      ref={mountainRef} 
      className="absolute inset-0 overflow-hidden"
      style={{ transformStyle: 'preserve-3d' }}
    >
      <MountainShape 
        height="h-[30vh]"
        clipPath="polygon(0 30%, 20% 0, 40% 20%, 60% 10%, 80% 30%, 100% 0, 100% 100%, 0 100%)"
        glowIntensity="0.03"
        glowOffset="80% 30%"
      />
      
      <MountainShape 
        height="h-[35vh]"
        clipPath="polygon(0 40%, 30% 10%, 50% 30%, 70% 20%, 90% 40%, 100% 10%, 100% 100%, 0 100%)"
        glowIntensity="0.04"
        glowOffset="85% 20%"
      />
      
      <MountainShape 
        height="h-[40vh]"
        clipPath="polygon(0 50%, 20% 20%, 40% 40%, 60% 30%, 80% 50%, 100% 20%, 100% 100%, 0 100%)"
        glowIntensity="0.05"
        glowOffset="90% 10%"
      />
    </div>
  );
};

export default Mountains;