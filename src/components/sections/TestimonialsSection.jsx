import React, { useState } from 'react';
import TestimonialCard from '../common/TestimonialCard';

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      quote: 'Pilates Mat cambió completamente mi postura y me ayudó a fortalecer mi core. Las clases son desafiantes pero el ambiente es muy relajante. ¡Totalmente recomendado!',
      author: 'María González',
      role: 'Practicante',
    },
    {
      id: 2,
      quote: 'Después de años con dolores de espalda, encontré en Pilates Mat la solución perfecta. Los ejercicios son precisos y efectivos, y la instructora es excelente.',
      author: 'Carlos Rodríguez',
      role: 'Cliente Regular',
    },
    {
      id: 3,
      quote: 'Me encanta la versatilidad de las clases con implementos. Cada sesión es diferente y desafiante. He mejorado mi flexibilidad y equilibrio notablemente.',
      author: 'Ana Martínez',
      role: 'Practicante Intermedia',
    },
    {
      id: 4,
      quote: 'Comencé sin experiencia y las clases para principiantes fueron perfectas. Ahora me siento más fuerte, con mejor postura y más consciente de mi cuerpo.',
      author: 'Laura Silva',
      role: 'Cliente',
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToTestimonial = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section id="testimonials" className="bg-cream py-16 md:py-24">
      <div className="container-custom">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading text-dark text-center mb-12 md:mb-16">
          Testimonios
        </h2>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Testimonial Card */}
          <div className="px-4 md:px-12">
            <TestimonialCard
              quote={testimonials[currentIndex].quote}
              author={testimonials[currentIndex].author}
              role={testimonials[currentIndex].role}
            />
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 text-dark hover:text-primary transition-fast p-2"
            aria-label="Previous testimonial"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 text-dark hover:text-primary transition-fast p-2"
            aria-label="Next testimonial"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center space-x-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`w-2 h-2 rounded-full transition-base ${
                index === currentIndex 
                  ? 'bg-primary w-8' 
                  : 'bg-dark opacity-30 hover:opacity-50'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
