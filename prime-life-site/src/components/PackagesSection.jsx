import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const PackagesSection = () => {
  const packages = [
    {
      id: 1,
      name: 'Básico',
      specifications: [
        'Especificação 1',
        'Especificação 2',
        'Especificação 3',
        'Especificação 4'
      ],
      price: 'R$ 99,90'
    },
    {
      id: 2,
      name: 'Premium',
      specifications: [
        'Especificação 1',
        'Especificação 2',
        'Especificação 3',
        'Especificação 4'
      ],
      price: 'R$ 199,90'
    },
    {
      id: 3,
      name: 'Família',
      specifications: [
        'Especificação 1',
        'Especificação 2',
        'Especificação 3',
        'Especificação 4'
      ],
      price: 'R$ 299,90'
    },
    {
      id: 4,
      name: 'Empresarial',
      specifications: [
        'Especificação 1',
        'Especificação 2',
        'Especificação 3',
        'Especificação 4'
      ],
      price: 'R$ 499,90'
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="pacotes" className="bg-gray-50 py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-pink-600 mb-4">
            Pacotes
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {packages.map((pkg) => (
            <Card key={pkg.id} className="bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <Button
                    onClick={scrollToContact}
                    className="bg-pink-600 hover:bg-pink-700 text-white rounded-full px-6 py-2 mb-4"
                  >
                    {pkg.name}
                  </Button>
                </div>

                <div className="space-y-3 mb-6">
                  {pkg.specifications.map((spec, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-pink-600 rounded-full mr-3"></div>
                      <span className="text-gray-700">{spec}</span>
                    </div>
                  ))}
                </div>

                <div className="text-center pt-4 border-t border-gray-200">
                  <span className="text-2xl font-bold text-pink-600">{pkg.price}</span>
                  <p className="text-gray-500 text-sm mt-1">por mês</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Não encontrou o pacote ideal? Entre em contato conosco!
          </p>
          <Button
            onClick={scrollToContact}
            variant="outline"
            className="text-pink-600 border-pink-600 hover:bg-pink-50 px-8 py-2 rounded-full"
          >
            Solicitar Orçamento Personalizado
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;
