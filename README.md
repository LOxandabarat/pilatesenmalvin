# Pilates en Malvín - Website

Sitio web moderno para estudio de Pilates construido con React 18 y Tailwind CSS, con enfoque mobile-first.

## 🚀 Características

- ✨ Diseño moderno y elegante
- 📱 Mobile-first y completamente responsive
- 🎨 Sistema de tokens de diseño con Tailwind CSS
- 🔐 Modal de login integrado
- 🎯 Componentes reutilizables
- ⚡ React 18.3 con las últimas características
- 🎨 Tailwind CSS 3.4 para estilos

## 📋 Estructura del Proyecto

```
src/
├── components/
│   ├── Header/              # Navegación principal y login button
│   │   └── Header.jsx
│   ├── LoginModal/          # Modal de autenticación
│   │   └── LoginModal.jsx
│   ├── sections/            # Secciones de la página
│   │   ├── HeroSection.jsx
│   │   ├── AboutSection.jsx
│   │   ├── ServicesSection.jsx
│   │   ├── TestimonialsSection.jsx
│   │   ├── JournalSection.jsx
│   │   └── CTASection.jsx
│   └── common/              # Componentes reutilizables
│       ├── Button.jsx
│       ├── ServiceCard.jsx
│       ├── JournalCard.jsx
│       └── TestimonialCard.jsx
├── pages/
│   └── Home.jsx             # Página principal que integra todo
├── App.js                   # Componente raíz
├── index.css                # Estilos globales y Tailwind
└── index.js                 # Punto de entrada
```

## 🎨 Sistema de Tokens de Diseño

Los tokens de diseño están configurados en `tailwind.config.js`:

### Colores
- `sage-green` / `primary`: #8B9B8E
- `cream` / `background`: #F5F1ED
- `dark`: #2C2C2C
- `gold` / `secondary`: #C9A961

### Tipografía
- Font principal: Montserrat
- Font para títulos: Playfair Display

### Breakpoints (Mobile-First)
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1440px

## 🛠️ Instalación

### Prerrequisitos

Asegúrate de tener instalado:
- Node.js (versión 16 o superior)
- npm o yarn

### Pasos de Instalación

1. **Clona el repositorio** (si aplica)
   ```bash
   git clone [url-del-repositorio]
   cd pilatesenmalvin
   ```

2. **Instala las dependencias**
   ```bash
   npm install
   ```

3. **Inicia el servidor de desarrollo**
   ```bash
   npm start
   ```

4. **Abre tu navegador**
   
   La aplicación se abrirá automáticamente en `http://localhost:3000`

## 📦 Scripts Disponibles

En el directorio del proyecto, puedes ejecutar:

### `npm start`
Inicia la aplicación en modo desarrollo.
Abre [http://localhost:3000](http://localhost:3000) para verla en el navegador.

### `npm build`
Construye la aplicación para producción en la carpeta `build`.

### `npm test`
Ejecuta los tests en modo interactivo.

## 🧩 Componentes Principales

### Header
- Navegación responsive con menú hamburguesa en móvil
- Botón de login que abre modal
- Diseño sticky que permanece en la parte superior

### LoginModal
- Modal de autenticación con formulario
- Integración de login social (Google, Facebook)
- Validación de campos
- Animaciones suaves

### Secciones
1. **HeroSection**: Banner principal con imagen de fondo
2. **AboutSection**: Información sobre el estudio con imágenes
3. **ServicesSection**: Grid de servicios con cards interactivas
4. **TestimonialsSection**: Carrusel de testimonios con navegación
5. **JournalSection**: Blog/artículos con grid responsive
6. **CTASection**: Llamada a la acción final

## 🎯 Uso de Componentes Reutilizables

### Button Component
```jsx
import Button from './components/common/Button';

<Button variant="primary" size="md" onClick={handleClick}>
  Click Me
</Button>
```

Variantes: `primary`, `secondary`, `outline`, `ghost`
Tamaños: `sm`, `md`, `lg`

### ServiceCard Component
```jsx
import ServiceCard from './components/common/ServiceCard';

<ServiceCard
  image="url-imagen"
  title="Título del Servicio"
  description="Descripción breve"
/>
```

### JournalCard Component
```jsx
import JournalCard from './components/common/JournalCard';

<JournalCard
  image="url-imagen"
  title="Título del Artículo"
  description="Descripción del artículo"
  date="MAY 15, 2026"
/>
```

### TestimonialCard Component
```jsx
import TestimonialCard from './components/common/TestimonialCard';

<TestimonialCard
  quote="Testimonio del cliente"
  author="Nombre del Cliente"
  role="Rol o Profesión"
/>
```

## 🎨 Personalización de Estilos

Para modificar los colores, tipografía u otros tokens de diseño, edita `tailwind.config.js`:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        'primary': '#TU_COLOR_AQUI',
        // ... más colores
      },
    },
  },
}
```

## 📱 Responsive Design

El sitio está diseñado con enfoque mobile-first. Los breakpoints se aplican de la siguiente manera:

```jsx
// Mobile (default)
<div className="text-sm">

// Tablet (md: 768px)
<div className="text-sm md:text-base">

// Desktop (lg: 1024px)
<div className="text-sm md:text-base lg:text-lg">
```

## 🔄 Próximas Mejoras

- [ ] Agregar animaciones y transiciones personalizadas
- [ ] Implementar lazy loading para imágenes
- [ ] Agregar internacionalización (i18n)
- [ ] Integrar backend para autenticación real
- [ ] Agregar más secciones según necesidad
- [ ] Implementar modo oscuro
- [ ] Optimizar SEO

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Notas Importantes

- Las imágenes actuales usan placeholders de Unsplash
- Reemplaza las imágenes con tus propias fotografías del estudio
- Actualiza los textos lorem ipsum con contenido real
- Configura las URLs de los enlaces según tus necesidades

## 📄 Licencia

Este proyecto es privado y pertenece a Pilates en Malvín.

## 📞 Contacto

Para más información:
- Email: info@pilatesmalvin.com
- Ubicación: Malvín, Montevideo
- Teléfono: +598 99 123 456

---

Desarrollado con ❤️ usando React y Tailwind CSS
