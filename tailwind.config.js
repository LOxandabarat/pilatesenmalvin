/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Paleta principal - Rosado/Violeta
        'lavender-light': '#E6D5F0',
        'pink-lavender': '#D4A5D8',
        'violet': '#A855C8',
        'purple': '#7C3A9E',
        'purple-dark': '#4A1F5E',
        'dark': '#2C2C2C',
        
        // Colores semánticos
        'primary': '#A855C8',
        'secondary': '#7C3A9E',
        'background': '#E6D5F0',
        
        // Mantener nombres antiguos para compatibilidad
        'sage-green': '#A855C8',
        'cream': '#E6D5F0',
        'gold': '#7C3A9E',
      },
      fontFamily: {
        'sans': ['Raleway', 'sans-serif'],
        'heading': ['Cormorant Garamond', 'serif'],
        'hero': ['Allura', 'cursive'],
      },
      fontSize: {
        'xs': '0.75rem',    // 12px
        'sm': '0.875rem',   // 14px
        'base': '1rem',     // 16px
        'lg': '1.125rem',   // 18px
        'xl': '1.5rem',     // 24px
        '2xl': '2rem',      // 32px
        '3xl': '3rem',      // 48px
        '4xl': '3.5rem',    // 56px
      },
      spacing: {
        'xs': '0.5rem',   // 8px
        'sm': '1rem',     // 16px
        'md': '1.5rem',   // 24px
        'lg': '2rem',     // 32px
        'xl': '3rem',     // 48px
        '2xl': '4rem',    // 64px
        '3xl': '6rem',    // 96px
      },
      borderRadius: {
        'sm': '4px',
        'md': '8px',
        'lg': '16px',
      },
      boxShadow: {
        'sm': '0 2px 4px rgba(0, 0, 0, 0.1)',
        'md': '0 4px 8px rgba(0, 0, 0, 0.1)',
        'lg': '0 8px 16px rgba(0, 0, 0, 0.1)',
      },
      transitionDuration: {
        'fast': '150ms',
        'base': '300ms',
        'slow': '500ms',
      },
    },
    screens: {
      // Mobile-first breakpoints
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1440px',
    },
  },
  plugins: [],
}
