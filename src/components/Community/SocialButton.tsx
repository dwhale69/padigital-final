import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SocialButtonProps {
  href: string;
  icon: LucideIcon;
  label: string;
  primary?: boolean;
}

const SocialButton = ({ href, icon: Icon, label, primary }: SocialButtonProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        group relative flex items-center justify-center gap-3
        px-8 py-3 rounded-full font-medium w-48
        transition-all duration-300
        ${primary 
          ? 'bg-primary hover:bg-primary/90 text-black' 
          : 'border-2 border-primary text-primary hover:bg-primary/10'
        }
      `}
    >
      <Icon className="w-5 h-5" />
      <span>{label}</span>
    </a>
  );
};

export default SocialButton;