import React from 'react';
import Button from '../common/Button';

const AboutSection = () => {
  return (
    <section className="bg-cream py-16 md:py-24">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-1">
                <img
                  src="https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=800"
                  alt="Pilates practice"
                  className="w-full h-64 md:h-80 object-cover rounded-lg shadow-md"
                />
              </div>
              <div className="col-span-1 mt-8 md:mt-12">
                <img
                  src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=800"
                  alt="Pilates instructor"
                  className="w-full h-64 md:h-80 object-cover rounded-lg shadow-md"
                />
              </div>
            </div>
            
            {/* Decorative circle */}
            <div className="hidden lg:block absolute -bottom-8 -right-8 w-32 h-32 border-2 border-secondary rounded-full opacity-30" />
          </div>

          {/* Content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading text-dark">
              ¿Qué es Pilates Mat?
            </h2>
            
            <p className="text-base md:text-lg text-dark opacity-80 leading-relaxed">
              El Pilates Mat es una modalidad del método Pilates en la que los ejercicios 
              se realizan sobre una colchoneta, usando el propio peso corporal como 
              resistencia principal. Los movimientos están diseñados para fortalecer la 
              zona central (abdomen, espalda baja, caderas y glúteos), mejorando tu 
              postura y flexibilidad.
            </p>
            
            <p className="text-base md:text-lg text-dark opacity-80 leading-relaxed">
              Nuestras clases se rigen por los 6 principios fundamentales: <strong>centro, 
              concentración, control, precisión, respiración y fluidez</strong>. Incorporamos 
              elementos como bandas elásticas, aros Magic Circle y pelotas para variar la 
              intensidad y lograr un entrenamiento completo y versátil.
            </p>

            <div className="pt-4">
              <Button variant="primary" size="md">
                RESERVA TU CLASE
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
