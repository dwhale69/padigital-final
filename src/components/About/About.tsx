import React from 'react';
import { Check } from '../Icons';
import GlowingCircle from '../GlowingCircle';

const About = () => {
  return (
    <section className="relative py-20 bg-black">
      <GlowingCircle position="top-right" size="medium" intensity="high" />
      <GlowingCircle position="bottom-left" size="large" intensity="low" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Contract Farming Affirmation
            </h2>
            <p className="text-gray-400 mb-8">
              PT. Padigital Graha Utama collaborates with farmers through Aggregators in contract farming. We conduct meticulous due diligence on land and crops, establishing legal contracts that specify crops, seeds, and terms.
            </p>
            <ul className="space-y-4">
              {[
                'Thorough due diligence on farmers\' land',
                'Legal contracts for specific crops',
                'Complete production cost coverage',
                'Optimal crop growth support',
                'Sustainable agriculture practices'
              ].map((item, index) => (
                <li key={index} className="flex items-center text-gray-400">
                  <Check className="text-primary mr-3" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-primary/5 rounded-lg blur-2xl" />
            <div className="relative bg-black p-8 rounded-xl border border-primary/20">
              <h3 className="text-2xl font-bold text-white mb-4">Under Custody</h3>
              <p className="text-gray-400 mb-6">
                Padigital secures harvested crops in warehouses, issuing fungible tokens pegged to warehouse receipts. Each token represents one kilogram of crops, distributed to Certificate of Plantation holders.
              </p>
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-gray-700 pb-2">
                  <span className="text-gray-400">Token Value</span>
                  <span className="text-primary font-semibold">1 KG per Token</span>
                </div>
                <div className="flex items-center justify-between border-b border-gray-700 pb-2">
                  <span className="text-gray-400">Circulation</span>
                  <span className="text-primary font-semibold">Matches Stock</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Redemption</span>
                  <span className="text-primary font-semibold">Burn on Use</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;