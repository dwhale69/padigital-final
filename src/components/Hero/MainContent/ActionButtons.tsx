import React from 'react';
import { ArrowRight } from 'lucide-react';

const ActionButtons = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <button className="group bg-primary text-black px-6 py-3 rounded-full font-medium flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors">
        Launch App
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </button>
      <button className="border-2 border-primary text-primary px-6 py-3 rounded-full font-medium hover:bg-primary/10 transition-colors">
        Learn More
      </button>
    </div>
  );
};

export default ActionButtons;