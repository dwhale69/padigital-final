import React from 'react';
import { Menu, X } from 'lucide-react';
import Logo from '../../assets/Logo';
import NavLink from './NavLink';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed w-full bg-background/90 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Logo className="h-12 w-auto" />
            </div>
            <div className="hidden md:block ml-10">
              <div className="flex items-baseline space-x-8">
                <NavLink href="#home">Home</NavLink>
                <NavLink href="#services">Services</NavLink>
                <NavLink href="#about">About</NavLink>
                <NavLink href="#contact">Contact</NavLink>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <button className="bg-primary text-black px-6 py-2 rounded-full font-semibold hover:bg-primary/90 transition-colors">
              Launch App
            </button>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-primary hover:text-primary/80"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background">
            <NavLink href="#home" mobile>Home</NavLink>
            <NavLink href="#services" mobile>Services</NavLink>
            <NavLink href="#about" mobile>About</NavLink>
            <NavLink href="#contact" mobile>Contact</NavLink>
            <div className="pt-2">
              <button className="w-full bg-primary text-black px-6 py-2 rounded-full font-semibold hover:bg-primary/90 transition-colors">
                Launch App
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;