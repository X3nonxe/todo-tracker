'use client';

import { Logo } from "@/src/components/Logo";

interface NavbarProps {
  className?: string;
}

const Navbar: React.FC<NavbarProps> = ({ className }) => {
  return (
    <nav className={`relative z-10 py-6 px-4 sm:px-6 lg:px-8 ${className || ''}`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Logo />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
