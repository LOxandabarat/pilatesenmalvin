import React from 'react';
import Button from '../common/Button';

const CTASection = () => {
  return (
    <section id="contact" className="bg-sage-green py-20 md:py-32">
      <div className="container-custom text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading text-white mb-6">
          Comienza tu Transformación
        </h2>
        
        <p className="text-base md:text-lg text-white opacity-80 max-w-2xl mx-auto mb-8 leading-relaxed">
          Únete a nuestra comunidad y descubre cómo Pilates Mat puede transformar tu cuerpo 
          y mente. Fortalece tu core, mejora tu postura y encuentra el equilibrio perfecto 
          entre cuerpo y mente en un ambiente relajante.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            variant="outline" 
            size="lg" 
            className="border-white text-white hover:bg-white hover:text-sage-green w-full sm:w-auto"
          >
            RESERVAR CLASE
          </Button>
          <Button 
            variant="secondary" 
            size="lg"
            className="w-full sm:w-auto"
          >
            CONTÁCTANOS
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
