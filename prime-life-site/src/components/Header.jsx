import React from 'react';
import { Button } from '@/components/ui/button';
import logocolorida from '../assets/img/logo-colorida.png';

const Header = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center">
              <img src={logocolorida} alt="Logo" className="w-full h-full object-contain" />
            </div>
          </div>

          {/* Navigation Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            <Button
              variant="ghost"
              className="text-pink-600 hover:text-pink-700 hover:bg-pink-50"
              onClick={() => scrollToSection('home')}
            >
              Home
            </Button>
            <Button
              variant="ghost"
              className="text-gray-700 hover:text-pink-600 hover:bg-pink-50"
              onClick={() => scrollToSection('parceiros')}
            >
              Parceiros
            </Button>
            <Button
              variant="ghost"
              className="text-gray-700 hover:text-pink-600 hover:bg-pink-50"
              onClick={() => scrollToSection('beneficios')}
            >
              Benefícios
            </Button>
            <Button
              variant="ghost"
              className="text-gray-700 hover:text-pink-600 hover:bg-pink-50"
              onClick={() => scrollToSection('pacotes')}
            >
              Pacotes
            </Button>
            <Button
              variant="ghost"
              className="text-gray-700 hover:text-pink-600 hover:bg-pink-50"
              onClick={() => scrollToSection('duvidas')}
            >
              Dúvidas
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </Button>
          </div>
        </div> 
      </div>
    </header>
  );
};

export default Header;
