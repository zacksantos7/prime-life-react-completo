import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Dumbbell, Pill, Wrench } from 'lucide-react';

const BenefitsSection = () => {
  const [showMore, setShowMore] = useState(false);

  const benefits = [
    {
      id: 1,
      title: 'Academia',
      description: 'Descontos exclusivos em academias parceiras',
      icon: Dumbbell,
      color: 'text-pink-600'
    },
    {
      id: 2,
      title: 'Farmácia',
      description: 'Medicamentos com preços especiais',
      icon: Pill,
      color: 'text-pink-600'
    },
    {
      id: 3,
      title: 'Em Breve',
      description: 'Novos benefícios chegando em breve',
      icon: Wrench,
      color: 'text-pink-600'
    }
  ];

  const additionalBenefits = [
    {
      id: 4,
      title: 'Nutrição',
      description: 'Consultas nutricionais com desconto',
      icon: Pill,
      color: 'text-pink-600'
    },
    {
      id: 5,
      title: 'Psicologia',
      description: 'Sessões de terapia com valores especiais',
      icon: Dumbbell,
      color: 'text-pink-600'
    },
    {
      id: 6,
      title: 'Estética',
      description: 'Tratamentos estéticos com desconto',
      icon: Wrench,
      color: 'text-pink-600'
    }
  ];

  const displayedBenefits = showMore ? [...benefits, ...additionalBenefits] : benefits;

  return (
    <section id="beneficios" className="bg-white py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-pink-600 mb-4">
            Benefícios
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {displayedBenefits.map((benefit) => {
            const IconComponent = benefit.icon;
            return (
              <Card key={benefit.id} className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer border-2 hover:border-pink-200">
                <CardContent className="p-6 text-center">
                  <div className="mb-4">
                    <IconComponent className={`w-12 h-12 mx-auto ${benefit.color}`} />
                  </div>
                  <Button
                    variant="default"
                    className="bg-pink-600 hover:bg-pink-700 text-white mb-4 rounded-full"
                  >
                    {benefit.title}
                  </Button>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Button
            onClick={() => setShowMore(!showMore)}
            variant="outline"
            className="text-pink-600 border-pink-600 hover:bg-pink-50 px-8 py-2 rounded-full"
          >
            {showMore ? 'Ver menos' : 'Ver mais'}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
