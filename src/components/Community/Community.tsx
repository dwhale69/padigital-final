import React from 'react';
import { MessageCircle, Instagram, Twitter } from 'lucide-react';
import CommunityBackground from './CommunityBackground';
import SocialButton from './SocialButton';
import GlowingCircle from '../GlowingCircle';

const Community = () => {
  return (
    <section className="relative py-24 bg-black overflow-hidden">
      <CommunityBackground />
      <GlowingCircle position="top-right" size="large" intensity="low" />
      <GlowingCircle position="bottom-left" size="medium" intensity="medium" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="relative inline-block mb-8">
          <div className="absolute -inset-2 bg-primary/5 rounded-full blur-xl" />
          <div className="relative px-6 py-2 bg-black/30 backdrop-blur-sm rounded-full border border-primary/20">
            <p className="text-primary text-lg sm:text-xl lg:text-2xl font-medium">
              Connect With Us
            </p>
          </div>
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
          Join our community!
        </h2>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <SocialButton 
            href="https://t.me/padigital"
            icon={MessageCircle}
            label="Telegram"
            primary
          />
          
          <SocialButton 
            href="https://instagram.com/padigital"
            icon={Instagram}
            label="Instagram"
          />
          
          <SocialButton 
            href="https://x.com/padigital"
            icon={Twitter}
            label="X"
          />
        </div>
      </div>
    </section>
  );
};

export default Community;