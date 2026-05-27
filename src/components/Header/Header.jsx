import React, { useState, useEffect } from 'react';
import LoginModal from '../LoginModal/LoginModal';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const menuItems = [
    { label: 'INICIO', href: '#home' },
    { label: 'CLASES', href: '#services' },
    { label: 'TESTIMONIOS', href: '#testimonials' },
    { label: 'CONSEJOS', href: '#advices' },
    { label: 'CONTACTO', href: '#contact' },
  ];

  // Cerrar menú móvil al hacer resize a desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) { // breakpoint md de Tailwind
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <header className="bg-white shadow-sm fixed top-0 w-full z-50">
        <div className="bg-sage-green text-white text-center py-2 text-xs md:text-sm">
          PRIMERA CLASE GRATIS? • CLASES PERSONALIZADAS CON EL CULDERO? • AMBIENTE RELAJANTE! • UNA GENIA LA PROFE!
        </div>
        
        <nav className="container-custom py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center bg-lavender-light p-2 rounded-md">
              <img 
                src="/assets/LogoPilates.png" 
                alt="Pilates en Malvín" 
                className="h-6 md:h-8 w-auto"
              />
            </div>

            {/* Desktop Navigation */}
            <ul className="hidden md:flex space-x-6 lg:space-x-8">
              {menuItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-sm text-dark hover:text-primary transition-fast font-medium"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Right side actions */}
            <div className="flex items-center space-x-4">
              {/* Login Button */}
              <button
                onClick={() => setIsLoginModalOpen(true)}
                className="bg-primary text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition-base text-sm font-medium"
              >
                Ingresar
              </button>

              {/* Mobile Menu Toggle */}
              <button
                className="md:hidden text-dark hover:text-primary transition-fast"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
                aria-expanded={isMenuOpen}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
              <ul className="space-y-3">
                {menuItems.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="block text-sm text-dark hover:text-primary transition-fast font-medium"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </nav>
      </header>

      {/* Login Modal */}
      <LoginModal 
        isOpen={isLoginModalOpen} 
        onClose={() => setIsLoginModalOpen(false)} 
      />
    </>
  );
};

export default Header;
