import React from 'react';
import ServiceCard from '../common/ServiceCard';
import Button from '../common/Button';

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      title: 'Pilates Mat Principiantes',
      image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=600',
      description: 'Ideal para quienes inician su camino en Pilates',
    },
    {
      id: 2,
      title: 'Pilates Mat Intermedio',
      image: 'https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?q=80&w=600',
      description: 'Mayor desafío e intensidad para cuerpo y mente',
    },
    {
      id: 3,
      title: 'Pilates con Implementos',
      image: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=600',
      description: 'Uso de bandas, aros Magic Circle y pelotas',
    },
    {
      id: 4,
      title: 'Clases Personalizadas',
      image: 'https://images.unsplash.com/photo-1603988363607-e1e4a66962c6?q=80&w=600',
      description: 'Atención individualizada según tus necesidades',
    },
  ];

  return (
    <section id="services" className="bg-sage-green py-16 md:py-24">
      <div className="container-custom">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading text-white text-center mb-12 md:mb-16">
          Nuestras Clases
        </h2>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              image={service.image}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Button variant="outline" size="md" className="border-white text-white hover:bg-white hover:text-sage-green">
            VER HORARIOS
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
