
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "¿Cómo funciona la clase de prueba gratuita?",
    answer: "Ofrecemos una clase de prueba gratuita donde puedes experimentar cómo enseñamos griego y hebreo bíblico. No necesitas tarjeta de crédito ni compromiso previo. Solo regístrate y comienza a explorar."
  },
  {
    question: "¿Puedo cambiar de curso o nivel más adelante?",
    answer: "Claro que sí. Puedes cambiar de nivel o incluso pasar de griego a hebreo (o viceversa) en cualquier momento. Nos adaptamos a tu ritmo y necesidades."
  },
  {
    question: "¿Hay algún costo de inscripción?",
    answer: "No, no cobramos ninguna tarifa de inscripción. Solo pagas por el curso que elijas, sin cargos ocultos."
  },
  {
    question: "¿Ofrecen programas personalizados para iglesias o instituciones?",
    answer: "Sí, diseñamos programas personalizados para comunidades, iglesias y grupos de estudio. Contáctanos para crear una propuesta adaptada a tu grupo."
  },
  {
    question: "¿Qué tipo de apoyo ofrecen durante el curso?",
    answer: "Nuestros estudiantes reciben acompañamiento por correo electrónico y acceso a sesiones de preguntas en vivo. También ofrecemos tutorías individuales para quienes lo necesiten."
  },
  {
    question: "¿Puedo cancelar mi suscripción en cualquier momento?",
    answer: "Sí, puedes cancelar cuando lo desees. Seguirás teniendo acceso al contenido hasta que finalice tu periodo actual."
  }
];
const FaqSection = () => {
  return (
    <div id='FaQ' className="bg-saas-black py-16 md:py-24 border-t border-gray-800">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Preguntas <span className="gradient-text">Frecuentes</span>
          </h2>
          <p className="text-gray-400">
              Encuentra respuesta a las preguntas más frecuentes sobre nuestros programas de idiomas bíblicos.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto bg-saas-darkGray rounded-xl p-6 md:p-8 border border-gray-800 card-shadow">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-800 last:border-0">
                <AccordionTrigger className="text-left text-white hover:text-saas-orange py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-400 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
