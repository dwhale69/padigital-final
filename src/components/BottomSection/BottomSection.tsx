import React from 'react';
import Card from './Card';
import { Leaf, Coins, LineChart, Shield } from '../Icons';
import GlowingCircle from '../GlowingCircle';

const BottomSection = () => {
  const cards = [
    {
      title: 'Farm Assets',
      subtitle: 'Diversification',
      icon: <Leaf />,
      stats: [
        { label: 'Total Farms', value: '1,234' },
        { label: 'Hectares', value: '5,678' }
      ]
    },
    {
      title: 'DeFi Apps',
      subtitle: 'For Agricultural Assets',
      icon: <Coins />,
      glowPosition: 'top-right'
    },
    {
      title: 'Safe Portfolio',
      subtitle: 'Matrix',
      icon: <LineChart />,
      address: '0x4167...a3q72'
    },
    {
      title: 'Smart Contract',
      subtitle: 'Protection',
      icon: <Shield />,
      glowPosition: 'bottom-right'
    }
  ];

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <GlowingCircle position="top-right" size="large" intensity="medium" />
      <GlowingCircle position="bottom-left" size="medium" intensity="low" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BottomSection;