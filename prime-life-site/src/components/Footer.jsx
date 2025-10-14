import React from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';
import LogoBranca from '../assets/img/logo-branca.png'; // Importando a imagem

const Footer = () => {
  const openWhatsApp = () => {
    const message = "Olá! Venho do site da Prime Life! Gostaria de mais informações.";
    const whatsappUrl = `https://wa.me/5531990623159?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <footer className="prime-gradient py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h3 className="text-white text-xl lg:text-2xl font-bold mb-6">
            Quer ser nosso associado, ou empresa parceira?
          </h3>
          <p className="text-pink-100 text-lg mb-8">
            Entre em contato conosco!
          </p>
          
          <Button
            onClick={openWhatsApp}
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2"
          >
            <MessageCircle className="w-5 h-5" />
            WhatsApp
          </Button>
        </div>

        <div className="mt-12 pt-8 border-t border-pink-400">
          <div className="text-center">
            <div className="flex flex-col items-center justify-center mb-4">
              <img src={LogoBranca} alt="Logo Prime Life" className="w-12 h-12 mb-2" />
              <span className="text-white font-bold text-xl">Prime Life</span>
            </div>
            <p className="text-pink-100 text-sm">
              ©2025 Prime Life. Todos os direitos reservados.
            </p>
            <p className="text-pink-200 text-xs mt-2">
              Conectando você à saúde que merece ♥
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;