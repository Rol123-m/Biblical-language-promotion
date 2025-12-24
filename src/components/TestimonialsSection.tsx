
import React from 'react';
import AlexeiImage from '@/assets/alexei.jpg'
import ReidelImage from '@/assets/reidel.jpg'
import AlejandroImage from '@/assets/alejandro.jpg'
import MaikelImage from '@/assets/Maikel.jpg'
import DanielImage from '@/assets/Daniel.jpg'

const testimonials = [
  {
    text: " Para mi ha sido de bendición, me ha ayudado a entender con mayor claridad las profundidades de la Palabra de Dios. Este curso me ha acercado más a Dios.",
    author: "Alexei Lores Lamorú",
    position: "Pastor CBCOr. Estudiante del STBCOr",
    image:  AlexeiImage
  },
  {
    text: "  Agradezco a Dios por la oportunidad de capacitarme en este curso. Me ha brindado la posibilidad de leer el Nuevo Testamento en el idioma en que fue escrito originalmente, y con ello comprender en mayor profundidad Las Escrituras",
    author: " Reidel Verdecia.",
    position: " Pastor CBCOr. Estudiante del STBCOr.",
    image: ReidelImage
  },
  {
    text: " me ha servido para comprender un poco cuan profundo y muchas veces desconocido es el lenguaje de la Biblia, ademas me ha permitido motivar a la iglesia hacia el estudio exhaustivo de las Sagradas Escrituras",
    author: "Alejandro Foubelo",
    position: "Pastor Principal de la 3ra IB de Santiago de Cuba. Estudiante del STBCOr.",
    image:  AlejandroImage
  },
  {
    text: " Este curso me ha ayudado a valorar mas la Palabra de Dios.",
    author: "Daniel ramirez. ",
    position: " Lider de iglesia local.",
    image:  DanielImage
  },
   {
    text: " En poco tiempo pude adquirir un conocimiento basico del idioma, y nuevas herramientas para estudiar e interpretar la Palabra que no tení­a antes ",
    author: "Marcos Gonzales. ",
    position: " Pastor Asociado en la 1ra IB de Banes. Estudiante del STBCOr.",
    image:  AlejandroImage
  },
   {
    text: "  Gracias a este curso puedo entender la biblia en su idioma original, tengo la oportunidad de mejor mis predicaciones, puedo comprender a cavalidad las palabras originales del nuevo testamento  ",
    author: "Maikel Molina. ",
    position: " Pastor de la CBCOr, estudiante del STBCOr",
    image:  MaikelImage
  }


];

const TestimonialsSection = () => {
  return (
    <div id='Testimonio' className="bg-saas-black py-16 md:py-24">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Recomendado por <span className="gradient-text">lideres y pastores </span> 
          </h2>
          <p className="text-gray-400">
              Escucha lo que nuestros alumnos tienen que decir. 
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-gradient-to-b from-saas-darkGray to-saas-black border border-gray-800 rounded-xl p-6 card-shadow"
            >
              <div className="flex mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-saas-orange" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>
              
              <p className="text-gray-300 mb-6 italic">"{testimonial.text}"</p>
              
              <div className="flex items-center">
                <img 
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <p className="font-semibold text-white">{testimonial.author}</p>
                  <p className="text-gray-400 text-sm">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
