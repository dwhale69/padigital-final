import React from 'react';
import Logo from '../../../assets/Logo';
import UserActions from './UserActions';
import { useScroll } from '../../../hooks/useScroll';

const Navigation = () => {
  const scrolled = useScroll();

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Logo className="h-8 w-auto" />
          <UserActions />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;