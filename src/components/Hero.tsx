import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-black flex items-center">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black to-black/90" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Revolutionizing the Future with{' '}
              <span className="text-lime-400">Blockchain Technology</span>
            </h1>
            <p className="text-gray-300 text-lg mb-8">
              Empowering businesses through innovative blockchain solutions. We transform ideas into
              secure, scalable, and efficient digital realities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-lime-400 text-black px-8 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-lime-500 transition-colors">
                Get Started
                <ArrowRight size={20} />
              </button>
              <button className="border border-lime-400 text-lime-400 px-8 py-3 rounded-lg font-semibold hover:bg-lime-400/10 transition-colors">
                Learn More
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-lime-400/20 rounded-lg blur-3xl" />
            <div className="relative bg-black/40 backdrop-blur-sm p-8 rounded-lg border border-lime-400/20">
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center p-4">
                    <div className="text-3xl font-bold text-lime-400 mb-2">{stat.value}</div>
                    <div className="text-gray-300 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const stats = [
  { value: '100+', label: 'Projects Completed' },
  { value: '50+', label: 'Happy Clients' },
  { value: '95%', label: 'Success Rate' },
  { value: '24/7', label: 'Support' },
];

export default Hero;