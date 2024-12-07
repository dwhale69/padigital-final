import React from 'react';
import Hero from './components/Hero/Hero';
import Features from './components/Features/Features';
import InvestmentSteps from './components/Investment/InvestmentSteps';
import About from './components/About/About';
import Partners from './components/Partners/Partners';
import Community from './components/Community/Community';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Hero />
      <InvestmentSteps />
      <Features />
      <About />
      <Partners />
      <Community />
    </div>
  );
}

export default App;