import React from 'react';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  mobile?: boolean;
}

const NavLink = ({ href, children, mobile = false }: NavLinkProps) => {
  const baseStyles = "font-medium transition-colors";
  const desktopStyles = "text-white hover:text-primary px-3 py-2 text-sm";
  const mobileStyles = "text-white hover:text-primary block px-3 py-2 text-base";

  return (
    <a
      href={href}
      className={`${baseStyles} ${mobile ? mobileStyles : desktopStyles}`}
    >
      {children}
    </a>
  );
};

export default NavLink;