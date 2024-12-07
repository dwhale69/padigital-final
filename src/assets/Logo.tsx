import React from 'react';
import logoImage from '../assets/images/logo.png';

const Logo = ({ className = 'w-12 h-12' }: { className?: string }) => (
  <div className={className}>
    <img 
      src="/Log-padigital.png"
      alt="Padigital Logo"
      className="w-full h-full object-contain"
      loading="eager"
      width={48}
      height={48}
    />
  </div>
);

export default Logo;