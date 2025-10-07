import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqs = [
    {
      id: 1,
      question: 'Como funciona a Prime Life?',
      answer: 'A Prime Life é um programa de benefícios que conecta você aos melhores serviços de saúde e bem-estar com descontos exclusivos. Através de parcerias estratégicas, oferecemos acesso facilitado a clínicas, laboratórios, academias e muito mais.'
    },
    {
      id: 2,
      question: 'Quais são os descontos oferecidos?',
      answer: 'Os descontos variam de acordo com cada parceiro, podendo chegar até 25% em consultas médicas, 20% em exames laboratoriais, 15% em academias e muito mais. Cada parceiro oferece condições especiais exclusivas para associados Prime Life.'
    },
    {
      id: 3,
      question: 'Como me tornar um associado?',
      answer: 'É muito simples! Basta entrar em contato conosco através do formulário no site ou pelo WhatsApp. Nossa equipe irá apresentar os planos disponíveis e ajudar você a escolher o que melhor se adequa às suas necessidades.'
    },
    {
      id: 4,
      question: 'Posso usar os benefícios imediatamente?',
      answer: 'Sim! Assim que sua associação for confirmada, você já pode começar a utilizar todos os benefícios disponíveis. Basta apresentar sua identificação de associado Prime Life nos estabelecimentos parceiros.'
    },
    {
      id: 5,
      question: 'Os benefícios têm validade?',
      answer: 'Os benefícios são válidos enquanto sua associação estiver ativa. Não há limite de uso mensal, você pode aproveitar os descontos quantas vezes precisar durante o período de vigência do seu plano.'
    },
    {
      id: 6,
      question: 'Como empresas podem se tornar parceiras?',
      answer: 'Empresas interessadas em se tornar parceiras da Prime Life podem entrar em contato através do nosso WhatsApp ou formulário. Oferecemos condições especiais para estabelecimentos que desejam fazer parte da nossa rede de benefícios.'
    }
  ];

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <section id="duvidas" className="bg-white py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-pink-600 mb-4">
            Dúvidas Frequentes
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Encontre respostas para as principais dúvidas sobre a Prime Life
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq) => (
            <Card key={faq.id} className="border-2 hover:border-pink-200 transition-colors">
              <CardContent className="p-0">
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-pink-50 transition-colors"
                >
                  <h3 className="font-semibold text-gray-800 pr-4">
                    {faq.question}
                  </h3>
                  {openFAQ === faq.id ? (
                    <ChevronUp className="w-5 h-5 text-pink-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-pink-600 flex-shrink-0" />
                  )}
                </button>
                
                {openFAQ === faq.id && (
                  <div className="px-6 pb-6">
                    <div className="border-t border-gray-200 pt-4">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Não encontrou a resposta que procurava?
          </p>
          <button
            onClick={() => {
              const element = document.getElementById('contato');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="text-pink-600 hover:text-pink-700 font-medium underline"
          >
            Entre em contato conosco
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
