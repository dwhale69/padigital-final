import React from 'react';
import { Leaf, Coins, FileText, Store } from '../Icons';
import GlowingCircle from '../GlowingCircle';

const steps = [
  {
    icon: <Leaf />,
    title: "Choose Your Farm",
    description: "Select from our verified farming projects and start with any investment size"
  },
  {
    icon: <FileText />,
    title: "Secure Contract",
    description: "Get your NFT contract, fully insured and secured by PT. Padigital Graha Utama"
  },
  {
    icon: <Coins />,
    title: "Share Profits",
    description: "Earn returns from harvest sales and trading opportunities"
  },
  {
    icon: <Store />,
    title: "Redeem Products",
    description: "Convert your tokens to actual agricultural products anytime"
  }
];

const InvestmentSteps = () => {
  return (
    <section className="relative py-20 bg-black" id="investment">
      <GlowingCircle position="top-left" size="large" intensity="high" />
      <GlowingCircle position="bottom-right" size="medium" intensity="medium" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Easy Steps to Own Your Plantation
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Break the barriers to farming investments! Start your journey into agricultural ownership with these simple steps.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="relative bg-black/50 p-6 rounded-xl border border-primary/20 hover:border-primary/40 transition-colors"
            >
              <div className="text-primary mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
              <p className="text-gray-400">{step.description}</p>
              <div className="absolute -top-3 -left-3 w-8 h-8 bg-primary text-black rounded-full flex items-center justify-center font-bold">
                {index + 1}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InvestmentSteps;