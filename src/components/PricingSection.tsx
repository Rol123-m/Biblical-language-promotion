
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Check } from 'lucide-react';

const PricingSection = () => {
  const [isAnnual, setIsAnnual] = useState(true);
  
  const plans = [
  {
    name: 'Hebreo Biblico',
        
    description: 'Aprende hebreo Bíblico desde cero. ',
    features: [
      'Acceso a clases grabadas',
      'Material PDF descargable',
      'Grupo de estudio en línea',
      'Soporte por correo',
      'Facilitadores disponibles',
      'plataforma 100% online'
    ],
    isPopular: false,
    ctaText: 'Comienza tu viaje lingüístico'
  },
  {
    name: 'Griego koine',
  
    description: 'Aprende griego desde cero. Estudia el Nuevo testamento en su idioma original. ',
    features: [
      'Acceso completo a clases grabadas',
      'Ejercicios interactivos',
      'Apoyo de facilitadores',
      'Corrección personalizada de tareas',
      'Acceso a comunidad privada',
      'Estandar de idiomas actualizado'
    ],
    isPopular: true,
    ctaText: 'Domina el idioma con nosotros'
  },
  {
    name: 'Facilitadores',
  
    description: 'Inscribete para ser un facilitador del ministerio',
    features: [
      'Clases magistrales en vivo',
      'Tutorías personalizadas',
      'Capacitacion avanzada en pedagogia. ',
      'Lectura y análisis de textos originales',
      'Herramientas de exegesis avanzada',
      'Soporte prioritario 24/7',
      'Acceso vitalicio al contenido'
    ],
    isPopular: false,
    ctaText: 'Se parte de nuestro ministerio'
  }
];

  return (
    <div id='cursos' className="bg-gradient-to-b from-saas-darkGray to-saas-black py-16 md:py-24">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Compara nuestros <span className="gradient-text">Cursos</span> 
          </h2>
          <p className="text-gray-400 mb-8">
             Escoge el que mejor encaje con tus necesidades. Recomendamos iniciar con griego. 
          </p>


          
          {/* Pricing toggle 
          
           <div className="flex items-center justify-center space-x-4 mb-12">
            <span className={`text-sm font-medium ${isAnnual ? 'text-saas-orange' : 'text-gray-400'}`}>
              Annual <span className="text-xs text-saas-orange">(Save 20%)</span>
            </span>
            <button 
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative inline-flex h-6 w-12 items-center rounded-full transition-colors ${isAnnual ? 'bg-saas-orange' : 'bg-gray-600'}`}
            >
              <span 
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${isAnnual ? 'translate-x-7' : 'translate-x-1'}`}
              />
            </button>
            <span className={`text-sm font-medium ${!isAnnual ? 'text-saas-orange' : 'text-gray-400'}`}>
              Monthly
            </span>
          </div>
          
          */}
         

        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`rounded-2xl p-8 transition-all duration-300 ${
                plan.isPopular 
                  ? 'bg-gradient-to-b from-saas-orange/20 to-saas-black border border-saas-orange/30 transform hover:-translate-y-2' 
                  : 'bg-saas-darkGray border border-gray-800 transform hover:-translate-y-1'
              }`}
            >
              {plan.isPopular && (
                <span className="bg-saas-orange text-saas-black text-xs font-bold px-3 py-1 rounded-full uppercase mb-4 inline-block">
                  Most Popular
                </span>
              )}
              
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className="text-gray-400 mb-6">{plan.description}</p>
              
              <div className="mb-6">
                
                <span className="text-gray-400"> Totalmente gratuito</span>
              </div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="h-5 w-5 text-saas-orange mr-2 shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                className={`w-full ${
                  plan.isPopular 
                    ? 'bg-saas-orange hover:bg-orange-600 text-white' 
                    : 'bg-secondary border border-saas-orange/30 hover:border-saas-orange text-white'
                }`}
              >
                {plan.ctaText}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
