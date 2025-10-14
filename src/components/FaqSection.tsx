
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const initialDate = "25 de febrero de 2025";
 

const faqs = [
  {
    question: "¿Cómo funciona la clase de prueba gratuita?",
    answer: "Ofrecemos una clase de prueba gratuita donde puedes experimentar cómo enseñamos griego y hebreo bíblico. También puedes mirar la promo en el inicio "
  },
  {
    question: "¿Puedo cambiar de curso o nivel más adelante?",
    answer: "No. Una vez inscrito en un programa no puedes cambiar hasta que se complete un ciclo de enseñanza-aprendizaje. Cuando cierre el tiempo de inscripción, tampoco será posible acceder al curso."
  },
  {
    question: "¿Qué fecha de inicio tiene el curso?",
    answer:  `La fecha de inicio del curso es ${initialDate}` 
  },
   {
    question: "¿Cuál es el tiempo de duración del curso",
    answer: " El curso tiene una duración de 30 semanas"
  },
  {
    question: "¿Hay algún costo de inscripción?",
    answer: "No, no cobramos ninguna tarifa de inscripción. Hasta el momento, los cursos son totalmente gratuitos"
  },
  {
    question: "¿Ofrecen programas personalizados para iglesias o instituciones?",
    answer: "Sí, diseñamos programas personalizados para comunidades, iglesias y grupos de estudio. Montamos los módulos de idimas para Institutos Bíblicos y universidades, personalizandolo al contexto y necesidad de dichas instituciones. Contáctanos para crear una propuesta adaptada a tu grupo."
  },
  {
    question: "¿Qué tipo de apoyo ofrecen durante el curso?",
    answer: "Nuestros estudiantes reciben acompañamiento por correo electrónico, whatsapp y la plataforma online del curso. Cada grupo tiene un facilitador asignado encargado de acompañar a los estudiantes. También ofrecemos tutorías individuales para quienes lo necesiten. El ministerio ofrece todos los materiales necesarios para aprender griego y hebreo. "
  },
  {
    question: "¿El curso está acreditado?",
    answer: "No, el curso no está acreditado, pero ofrece todo el conocimiento necesario para acreditar con cualquier universidad. Seguimos los estándares para el aprendizaje de los idiomas bíblicos reconocidos actualmente por las universidades más importantes, y actualizamos nuestro método constantemente, pensando en nuestros estudiantes"
  },
  {
    question: "¿Puedo apoyar al ministerio de alguna manera?",
    answer: " Si, claro. Puedes apoyar económicamente para apoyar la creación de materiales, pago de licencias digitales, ayuda a facilitadores, pago de tecnologías, o financiar algún encuentro presencial. También puedes apoyar otra de las áreas del ministerio: Vivos para Servir, ser voluntario en algún area de trabajo, o capacitarte para ser facilitador en el futuro. "
  },
  {
    question: "¿ Existe algún requisito para ser facilitador",
    answer: " Si, claro. Estar graduado de alguno de nuestros programas de idiomas bíblicos, o de algún programa en lenguas bíblicas similar. Estar dispuesto a recibir capacitación pedagógica y alinearse a los valores, misión y visión del ministerio"
  },
  {
    question: "¿ Cómo es el proceso evaluativo?",
    answer: "Los instrumentos evaluativo están diseñados para comprobar vocabulario, gramática y traducción. Están basados en los materiales del curso, y están predefinidos desde el inicio del curso en el sílabo, por lo cual el estudiante conocerá todo el proceso educativo del curso desde el primer momento."
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
           <p className="text-gray-400">
            ¿Tienes más preguntas? <a href='https://google.com'>Contáctanos.</a>
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
