import React from 'react';

const HeroSection = () => {
  return (
    <section 
      id="home" 
      className="relative h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2000')`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-dark bg-opacity-30" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-hero text-white mb-4">
          Pilates 
               <br />
               en 
          <br />
           Malvín
        </h1>
        <p className="text-lg md:text-xl text-white opacity-90 max-w-2xl mx-auto mt-6 font-sans">
          Descubre el poder del Pilates Mat
        </p>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg 
          className="w-6 h-6 text-white" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M19 14l-7 7m0 0l-7-7m7 7V3" 
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
