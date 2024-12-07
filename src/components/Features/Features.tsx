import React from 'react';
import { Leaf, Coins, Building2 } from 'lucide-react';
import FeatureCard from './FeatureCard';
import MovingSun from './MovingSun';
import GlowingCircle from '../GlowingCircle';

const features = [
  {
    title: 'Fractionalized Contract Farming',
    description: 'Padigital verifies and holds all assets with comprehensive legal documentation adhering to Indonesian law, ensuring alignment with physical assets.',
    icon: <Leaf size={24} />
  },
  {
    title: 'Farming & Royalties',
    description: 'Plantations are documented and distributed among Certificate owners, with harvest rewards in rice tokens equivalent to 1 KG, tradable or redeemable.',
    icon: <Coins size={24} />
  },
  {
    title: 'Depositories System',
    description: 'Physical redemption centers for commodities using ecosystem tokens, with ownership tied to Certificate of Depositories NFT holders.',
    icon: <Building2 size={24} />
  }
];

const Features = () => {
  return (
    <section className="relative py-20 bg-black overflow-hidden">
      <GlowingCircle position="top-right" size="large" intensity="medium" />
      <GlowingCircle position="bottom-left" size="medium" intensity="low" />
      <MovingSun />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">How Padigital Works</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Empowering farmers and communities through food sovereignty, enabling collaborative cultivation and sustainable agriculture.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;