import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Modal from './Modal';

const PartnersSection = () => {
  const [showMore, setShowMore] = useState(false);
  const [selectedPartner, setSelectedPartner] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const partners = [
    {
      id: 1,
      name: 'Clínica Saúde Alemana',
      description: 'Clínica especializada em medicina preventiva e diagnóstica',
      logo: '🏥',
      details: {
        address: 'Rua das Flores, 123 - São Paulo, SP',
        phone: '(11) 3456-7890',
        services: ['Consultas médicas', 'Exames preventivos', 'Check-up completo', 'Medicina do trabalho'],
        discount: '20% de desconto em consultas'
      }
    },
    {
      id: 2,
      name: 'CDI - Clínica de Imagem',
      description: 'Centro de diagnóstico por imagem com tecnologia avançada',
      logo: '🔬',
      details: {
        address: 'Av. Paulista, 456 - São Paulo, SP',
        phone: '(11) 2345-6789',
        services: ['Ressonância magnética', 'Tomografia', 'Ultrassom', 'Raio-X digital'],
        discount: '15% de desconto em exames de imagem'
      }
    },
    {
      id: 3,
      name: 'Dr. Ronaldo Caran',
      description: 'Cardiologia Interativa',
      logo: '❤️',
      details: {
        address: 'Rua do Coração, 789 - São Paulo, SP',
        phone: '(11) 1234-5678',
        services: ['Consulta cardiológica', 'Eletrocardiograma', 'Ecocardiograma', 'Teste ergométrico'],
        discount: '25% de desconto em consultas cardiológicas'
      }
    }
  ];

  const additionalPartners = [
    {
      id: 4,
      name: 'Laboratório Excellence',
      description: 'Exames laboratoriais com precisão e agilidade',
      logo: '🧪'
    },
    {
      id: 5,
      name: 'Fisio Prime',
      description: 'Fisioterapia e reabilitação especializada',
      logo: '🏃‍♂️'
    },
    {
      id: 6,
      name: 'Dental Care',
      description: 'Odontologia completa para toda família',
      logo: '🦷'
    }
  ];

  const displayedPartners = showMore ? [...partners, ...additionalPartners] : partners;

  const openPartnerModal = (partner) => {
    setSelectedPartner(partner);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPartner(null);
  };

  return (
    <section id="parceiros" className="bg-gradient-to-br from-pink-500 to-pink-600 py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Parceiros
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {displayedPartners.map((partner) => (
            <Card 
              key={partner.id} 
              className="bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
              onClick={() => openPartnerModal(partner)}
            >
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">{partner.logo}</div>
                <Button
                  variant="default"
                  className="bg-pink-600 hover:bg-pink-700 text-white mb-4 rounded-full pointer-events-none"
                >
                  {partner.name}
                </Button>
                <p className="text-gray-600 text-sm">{partner.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            onClick={() => setShowMore(!showMore)}
            variant="outline"
            className="bg-white text-pink-600 border-white hover:bg-pink-50 px-8 py-2 rounded-full"
          >
            {showMore ? 'Ver menos' : 'Ver mais'}
          </Button>
        </div>
      </div>

      {/* Modal com detalhes do parceiro */}
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title={selectedPartner?.name}
        description={selectedPartner?.description}
      >
        {selectedPartner && (
          <div className="space-y-4">
            <div className="text-center mb-4">
              <div className="text-6xl mb-2">{selectedPartner.logo}</div>
            </div>
            
            {selectedPartner.details && (
              <>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Endereço:</h4>
                  <p className="text-gray-600">{selectedPartner.details.address}</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Telefone:</h4>
                  <p className="text-gray-600">{selectedPartner.details.phone}</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Serviços:</h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    {selectedPartner.details.services.map((service, index) => (
                      <li key={index}>{service}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-pink-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-pink-800 mb-2">Desconto Prime Life:</h4>
                  <p className="text-pink-700">{selectedPartner.details.discount}</p>
                </div>
                
                <div className="text-center pt-4">
                  <Button
                    onClick={() => {
                      const message = `Olá! Sou associado da Prime Life e gostaria de agendar um atendimento em ${selectedPartner.name}.`;
                      const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(message)}`;
                      window.open(whatsappUrl, '_blank');
                    }}
                    className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full"
                  >
                    Agendar via WhatsApp
                  </Button>
                </div>
              </>
            )}
          </div>
        )}
      </Modal>
    </section>
  );
};

export default PartnersSection;
