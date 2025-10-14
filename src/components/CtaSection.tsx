
import React from 'react';
import { Button } from "@/components/ui/button";
import NestleAlandImage from '@/assets/NestleAland.jpg'

const CtaSection = () => {
  return (
    <div id='Cta' className="bg-saas-darkGray py-16 md:py-20">
      <div className="section-container">
        <div className="bg-gradient-to-r from-saas-orange/20 to-amber-600/20 rounded-2xl p-8 md:p-12 relative overflow-hidden">
          {/* Abstract glow effect */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-saas-orange opacity-20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-600 opacity-10 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-2/3">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Lleva tus habilidades al siguiente nivel con nosotros.
              </h2>
              <p className="text-gray-300 mb-6 max-w-xl">
                Aprende a estudiar la Biblia en su idioma original. Nosotros te preparamos para ser parte de lo que Dios está haciendo
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-saas-orange hover:bg-orange-600 text-white font-semibold">
                Inscribete ya
                </Button>
                <Button variant="outline" className="border-background text-white hover:bg-white hover:text-saas-black hover:border-white">
                 Lección de prueba.
                </Button>
              </div>
            </div>
            
            <div className="md:w-1/3">
              <img 
                src={ NestleAlandImage}
                alt="Dashboard Preview"
                className="rounded-lg w-full card-shadow"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CtaSection;
