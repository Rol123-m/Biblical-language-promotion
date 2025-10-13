
import React from 'react';
import { Check, Search, Settings, User, Home, Calendar } from 'lucide-react';

const features = [
  {
    icon: <Search className="h-6 w-6 text-saas-orange" />,
    title: 'Exploración Profunda del Texto',
    description: 'Descubre el significado original de las Escrituras mediante análisis de raíces, estructuras gramaticales y contexto histórico.'
  },
  {
    icon: <Settings className="h-6 w-6 text-saas-orange" />,
    title: 'Aprendizaje Sin Barreras',
    description: 'Accede al contenido desde cualquier dispositivo y adapta el ritmo de estudio a tu estilo de vida.'
  },
  {
    icon: <User className="h-6 w-6 text-saas-orange" />,
    title: 'Ruta Personalizada',
    description: 'Recibe orientación según tu nivel y objetivos: desde principiante hasta avanzado, tú decides el camino.'
  },
  {
    icon: <Home className="h-6 w-6 text-saas-orange" />,
    title: 'Espacio de Estudio Interactivo',
    description: 'Organiza tus recursos, textos y ejercicios en un panel intuitivo que te acompaña en cada etapa del aprendizaje.'
  },
  {
    icon: <Calendar className="h-6 w-6 text-saas-orange" />,
    title: 'Planificación Inteligente',
    description: 'Sigue un calendario de estudio diseñado para ayudarte a avanzar con constancia y sin agobios.'
  },
  {
    icon: <Check className="h-6 w-6 text-saas-orange" />,
    title: 'Seguimiento de tu Progreso',
    description: 'Visualiza tu evolución en vocabulario, traducción y comprensión textual con reportes claros y motivadores.'
  }
];

const FeaturesSection = () => {
  return (
    <div id='Habilidades' className="bg-saas-black py-16 md:py-24">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Herramientas <span className="gradient-text">poderosas</span> para aprender idiomas Bíblicos. 
          </h2>
          <p className="text-gray-400">
             Nuestras herramientas te ayudarán a estudiar e interpretar la Biblia con mayor efectividad. 

          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-saas-darkGray p-6 rounded-xl border border-gray-800 hover:border-saas-orange/50 transition-all duration-300 card-shadow"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="bg-saas-orange/10 w-12 h-12 flex items-center justify-center rounded-lg mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
