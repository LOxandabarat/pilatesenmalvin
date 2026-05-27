import React from 'react';
import Header from '../components/Header/Header';
import HeroSection from '../components/sections/HeroSection';
import AboutSection from '../components/sections/AboutSection';
import ServicesSection from '../components/sections/ServicesSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import JournalSection from '../components/sections/JournalSection';
import CTASection from '../components/sections/CTASection';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-[104px]"> {/* Offset for fixed header */}
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <TestimonialsSection />
        <JournalSection />
        <CTASection />
      </main>
      
      {/* Footer */}
      <footer className="bg-dark text-white py-8">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* About */}
            <div>
              <h3 className="font-heading text-lg mb-4">Sobre Nosotros</h3>
              <p className="text-sm opacity-80">
                Transforma tu cuerpo y mente con Pilates Mat. 
                Únete a nuestra comunidad y fortalece tu core en un ambiente relajante.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-heading text-lg mb-4">Enlaces Rápidos</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#home" className="opacity-80 hover:opacity-100 transition-fast">Inicio</a></li>
                <li><a href="#services" className="opacity-80 hover:opacity-100 transition-fast">Clases</a></li>
                <li><a href="#testimonials" className="opacity-80 hover:opacity-100 transition-fast">Testimonios</a></li>
                <li><a href="#advices" className="opacity-80 hover:opacity-100 transition-fast">Consejos</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-heading text-lg mb-4">Contacto</h3>
              <ul className="space-y-2 text-sm opacity-80">
                <li>Malvín, Montevideo</li>
                <li>info@pilatesmalvin.com</li>
                <li>+598 99 123 456</li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-white border-opacity-20 pt-6 text-center">
            <p className="text-sm opacity-60">
              © {new Date().getFullYear()} Pilates en Malvín. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
