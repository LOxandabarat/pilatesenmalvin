import React from 'react';
import JournalCard from '../common/JournalCard';

const JournalSection = () => {
  const articles = [
    {
      id: 1,
      title: 'LOS 6 PRINCIPIOS DEL PILATES',
      description: 'Descubre los fundamentos que rigen cada movimiento: centro, concentración, control, precisión, respiración y fluidez. Aprende cómo aplicarlos en tu práctica diaria.',
      image: 'https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?q=80&w=600',
      date: '15 DE MAYO, 2026',
    },
    {
      id: 2,
      title: 'BENEFICIOS DEL PILATES MAT',
      description: 'Conoce cómo el Pilates Mat fortalece tu core, mejora tu postura, aumenta tu flexibilidad y te ayuda a lograr un cuerpo más tonificado y equilibrado.',
      image: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=600',
      date: '10 DE MAYO, 2026',
    },
    {
      id: 3,
      title: 'GUÍA PARA PRINCIPIANTES',
      description: 'Todo lo que necesitas saber antes de tu primera clase: qué esperar, qué traer y cómo prepararte para comenzar tu transformación con Pilates Mat.',
      image: 'https://images.unsplash.com/photo-1603988363607-e1e4a66962c6?q=80&w=600',
      date: '5 DE MAYO, 2026',
    },
  ];

  return (
    <section id="advices" className="bg-cream py-16 md:py-24">
      <div className="container-custom">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading text-dark text-center mb-12 md:mb-16">
          Consejos y Guías
        </h2>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {articles.map((article) => (
            <JournalCard
              key={article.id}
              image={article.image}
              title={article.title}
              description={article.description}
              date={article.date}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default JournalSection;
