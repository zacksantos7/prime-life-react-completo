import React from 'react';
import { Button } from '@/components/ui/button';
import imagemInicio from '../assets/img/imagem-inicio.png';

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="bg-white py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Seja muito bem-vindo à{' '}
              <span className="text-pink-600">Prime Life!</span>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Os melhores descontos conectando você à saúde que merece
              <span className="text-pink-600"> ♥</span>
            </p>
            <div className="pt-4">
              <Button
                onClick={scrollToContact}
                className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105"
              >
                Entrar em Contato
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative flex items-center justify-center">
            <div className="relative z-10">
              <div className="text-center">
                <div className="w-90 h-110 mx-auto mb-4 flex items-center justify-center transition-all duration-300">
                  <img
                    src={imagemInicio}
                    alt="Imagem de início"
                    className="w-full h-full object-contain rounded-2xl drop-shadow-xl"
                  />
                </div>
              </div>
            </div>

            {/* Decorative elements (bolinhas animadas) */}
            <div className="absolute top-4 right-10 w-20 h-20 bg-pink-500 rounded-full opacity-30 animate-pulse"></div>
            <div className="absolute bottom-0 left-8 w-28 h-28 bg-pink-400 rounded-full opacity-20 animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 right-0 w-14 h-14 bg-pink-600 rounded-full opacity-25 animate-bounce delay-500"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;