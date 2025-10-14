import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Modal from './Modal';
import clinicaSaudeAlterosa from '../assets/img/clinica-saude-alterosa.png';
import clinicaCdi from '../assets/img/clinica-cdi.png';
import clinicaReinaldo from '../assets/img/clinica-reinaldo.png';

const PartnersSection = () => {
  const [showMore, setShowMore] = useState(false);
  const [selectedPartner, setSelectedPartner] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const partners = [
    {
      id: 1,
      name: 'Clínica Saúde Alterosa',
      description: 'Clínica especializada em medicina preventiva e diagnóstica',
      logo: clinicaSaudeAlterosa,
      details: {
        address: 'Av. Campos de Ourique, 1216 - Jardim Alterosa, Betim',
        phone: '(11) 3456-7890',
        services: ['Consultas médicas', 'Exames preventivos', 'Check-up completo', 'Medicina do trabalho'],
        discount: '20% de desconto em consultas'
      }
    },
    {
      id: 2,
      name: 'CDI - Clínica de Imagem',
      description: 'Centro de diagnóstico por imagem com tecnologia avançada',
      logo: clinicaCdi,
      details: {
        address: 'Av. Gov. Valadares, 602 - Centro, Betim - MG',
        phone: '(31) 3389-5777',
        services: ['Ressonância magnética', 'Tomografia', 'Ultrassom', 'Raio-X digital'],
        discount: '15% de desconto em exames de imagem'
      }
    },
    {
      id: 3,
      name: 'Dr. Reinaldo Couto',
      description: 'Cardiologia Interativa',
      logo: clinicaReinaldo,
      details: {
        address: 'Edifício Mandela - R. Prof. Alberto Pacheco, 125 - 505 - Santa Clar, Viçosa - MG',
        phone: '(31) 99965-4848',
        services: ['Consulta cardiológica', 'Eletrocardiograma', 'Ecocardiograma', 'Teste ergométrico'],
        discount: '25% de desconto em consultas cardiológicas'
      }
    }
  ];

  const additionalPartners = [
    {
      id: 4,
      name: 'Em breve!',
      description: 'Em breve!',
      logo: '⌛',
      details: {
        services: ['Ressonância magnética', 'Tomografia', 'Ultrassom', 'Raio-X digital'],
        discount: '15% de desconto em exames de imagem'
      }
    },
    {
      id: 5,
      name: 'Dentista - Clínica Saúde Alterosa',
      description: 'Odontologia completa para toda família',
      logo: clinicaSaudeAlterosa,
      details: {
        address: 'Av. Campos de Ourique, 1216 - Jardim Alterosa, Betim',
        phone: '(31) 9 9154-2560',
        discount: '10% a 15% de desconto'
      }
    },
    {
      id: 6,
      name: 'Laboratório - Clínica Saúde Alterosa',
      description: 'Exames laboratoriais com precisão e agilidade',
      logo: clinicaSaudeAlterosa
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
    <section id="parceiros" className="prime-gradient py-16 lg:py-24 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Parceiros</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {displayedPartners.map((partner) => (
            <Card
              key={partner.id}
              className="bg-card text-card-foreground card-hover cursor-pointer"
              onClick={() => openPartnerModal(partner)}
            >
              <CardContent className="p-6 text-center">
                {typeof partner.logo === 'string' && !partner.logo.includes('.png') ? (
                  <div className="text-4xl mb-4">{partner.logo}</div>
                ) : (
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="w-40 h-40 mx-auto mb-4 object-contain"
                  />
                )}
                <Button
                  variant="default"
                  className="btn-prime text-white mb-4 rounded-full pointer-events-none"
                >
                  {partner.name}
                </Button>
                <p className="text-muted-foreground text-sm">{partner.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            onClick={() => setShowMore(!showMore)}
            variant="outline"
            className="bg-background text-primary border border-border hover:bg-accent px-8 py-2 rounded-full transition-all duration-300"
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
          <div className="space-y-4 text-foreground">
            <div className="text-center mb-4">
              {typeof selectedPartner.logo === 'string' && !selectedPartner.logo.includes('.png') ? (
                <div className="text-6xl mb-2">{selectedPartner.logo}</div>
              ) : (
                <img
                  src={selectedPartner.logo}
                  alt={selectedPartner.name}
                  className="w-32 h-32 mx-auto mb-4 object-contain"
                />
              )}
            </div>

            {selectedPartner.details && (
              <>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Endereço:</h4>
                  <p className="text-muted-foreground">{selectedPartner.details.address}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-2">Telefone:</h4>
                  <p className="text-muted-foreground">{selectedPartner.details.phone}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-2">Serviços:</h4>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    {selectedPartner.details.services?.map((service, index) => (
                      <li key={index}>{service}</li>
                    ))}
                  </ul>
                </div>

                <div className="bg-accent p-4 rounded-lg">
                  <h4 className="font-semibold text-primary mb-2">Desconto Prime Life:</h4>
                  <p className="text-primary">{selectedPartner.details.discount}</p>
                </div>

                <div className="text-center pt-4">
                  <Button
                    onClick={() => {
                      const message = `Olá! Sou associado da Prime Life e gostaria de agendar um atendimento em ${selectedPartner.name}.`;
                      const whatsappUrl = `https://wa.me/5531990623159?text=${encodeURIComponent(message)}`;
                      window.open(whatsappUrl, '_blank');
                    }}
                    className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full transition-all"
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