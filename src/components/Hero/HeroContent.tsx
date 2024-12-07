import React from 'react';
import { ArrowRight } from 'lucide-react';

const HeroContent = () => {
  return (
    <div className="relative z-10 max-w-2xl">
      <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-8 leading-tight">
        Own Your
        <span className="block text-primary">Digital Farm</span>
      </h1>
      <p className="text-gray-400 text-lg sm:text-xl mb-12">
        Enter Padigital's revolutionary FRACTIONAL CONTRACT FARMING, where technology meets agriculture. Own verified farm contracts through secure NFTs, each meticulously safeguarded and insured.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <button className="group bg-primary text-black px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-primary/90 transition-all">
          Launch App
          <ArrowRight className="group-hover:translate-x-1 transition-transform" />
        </button>
        <button className="border-2 border-primary text-primary px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-primary/10 transition-colors">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default HeroContent;