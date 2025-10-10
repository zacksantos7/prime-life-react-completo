import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import nossaRepresentante from '../assets/img/nossa-representante.png';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    description: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // mensagem formatada para WhatsApp
    const message = `Olá! Venho do site da Prime Life 👋

Gostaria de mais informações.

📋 Nome: ${formData.name}
📱 Celular: ${formData.phone}
📝 Descrição: ${formData.description}`;

    // número oficial da Prime Life (com DDI)
    const whatsappUrl = `https://wa.me/5531990623159?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');

    // limpa os campos
    setFormData({
      name: '',
      phone: '',
      description: ''
    });
  };

  return (
    <section id="contato" className="bg-gradient-to-br from-pink-500 to-pink-600 py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Imagem da Representante */}
          <div className="relative order-2 lg:order-1">
            <div className="relative z-10">
              <div className="w-full h-full rounded-2xl overflow-hidden flex items-center justify-space-around">
                <img 
                  src={nossaRepresentante} 
                  alt="Nossa Representante" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Formulário de Contato */}
          <div className="order-1 lg:order-2">
            <Card className="bg-white shadow-2xl">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-pink-600 mb-6 text-center">
                  Fale Conosco!
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-gray-700 font-medium">
                      Nome:
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="mt-2 border-gray-300 focus:border-pink-500 focus:ring-pink-500"
                      placeholder="Seu nome completo"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone" className="text-gray-700 font-medium">
                      Celular:
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="mt-2 border-gray-300 focus:border-pink-500 focus:ring-pink-500"
                      placeholder="(31) 9 9062-3159"
                    />
                  </div>

                  <div>
                    <Label htmlFor="description" className="text-gray-700 font-medium">
                      Descrição:
                    </Label>
                    <Textarea
                      id="description"
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      rows={4}
                      className="mt-2 border-gray-300 focus:border-pink-500 focus:ring-pink-500"
                      placeholder="Conte-nos como podemos ajudá-lo(a)!"
                    />
                  </div>

                  <div className="text-center pt-4">
                    <Button
                      type="submit"
                      className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105"
                    >
                      Enviar pelo WhatsApp
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;