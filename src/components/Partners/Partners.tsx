import React from 'react';
import GlowingCircle from '../GlowingCircle';

const partners = [
  { name: 'BITARA', src: '/partners/bitara.png' },
  { name: 'DU Pictures', src: '/partners/du-pictures.png' },
  { name: 'GICTC', src: '/partners/gictc.png' },
  { name: 'DNA', src: '/partners/dna.png' },
  { name: 'ABIM', src: '/partners/abim.png' },
  { name: 'ACA', src: '/partners/aca.png' },
  { name: 'KBI', src: '/partners/kbi.png' },
  { name: 'NBA', src: '/partners/nba.png' },
  { name: 'YAMOTI', src: '/partners/yamoti.png' },
  { name: 'Muhammadiyah', src: '/partners/muhammadiyah.png' },
  { name: 'LBI', src: '/partners/lbi.png' }
];

const Partners = () => {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <GlowingCircle position="top-right" size="large" intensity="low" />
      <GlowingCircle position="bottom-left" size="medium" intensity="medium" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
          Our Partners
        </h2>
        
        <div className="relative">
          {/* First Row - Left to Right */}
          <div className="flex space-x-8 animate-scroll-left">
            {[...partners, ...partners].map((partner, index) => (
              <div 
                key={`${partner.name}-${index}`}
                className="flex-none w-32 h-12 bg-black/30 backdrop-blur-sm rounded-lg border border-primary/10 p-2 hover:border-primary/30 transition-all"
              >
                <img
                  src={partner.src}
                  alt={partner.name}
                  className="w-full h-full object-contain brightness-110 filter"
                  loading={index < partners.length ? "eager" : "lazy"}
                />
              </div>
            ))}
          </div>
          
          {/* Second Row - Right to Left */}
          <div className="flex space-x-8 mt-6 animate-scroll-right">
            {[...partners.reverse(), ...partners].map((partner, index) => (
              <div 
                key={`${partner.name}-reverse-${index}`}
                className="flex-none w-32 h-12 bg-black/30 backdrop-blur-sm rounded-lg border border-primary/10 p-2 hover:border-primary/30 transition-all"
              >
                <img
                  src={partner.src}
                  alt={partner.name}
                  className="w-full h-full object-contain brightness-110 filter"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;