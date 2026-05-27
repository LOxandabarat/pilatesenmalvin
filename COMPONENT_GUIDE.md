# Guía de Componentes - Pilates en Malvín

## 📚 Índice de Componentes

Esta guía proporciona una descripción detallada de todos los componentes creados para el sitio web.

---

## 🎯 Componentes Reutilizables (Common)

### 1. Button Component
**Ubicación:** `src/components/common/Button.jsx`

Botón reutilizable con múltiples variantes y tamaños.

**Props:**
- `children` (node): Contenido del botón
- `onClick` (function): Función a ejecutar al hacer click
- `variant` (string): 'primary' | 'secondary' | 'outline' | 'ghost'
- `size` (string): 'sm' | 'md' | 'lg'
- `className` (string): Clases CSS adicionales
- `type` (string): 'button' | 'submit' | 'reset'

**Ejemplo de uso:**
```jsx
<Button variant="primary" size="md" onClick={() => console.log('clicked')}>
  Click Me
</Button>
```

**Clases Tailwind aplicadas:**
- Mobile-first responsive
- Transiciones suaves
- Estados de hover y focus

---

### 2. ServiceCard Component
**Ubicación:** `src/components/common/ServiceCard.jsx`

Tarjeta para mostrar servicios con imagen y título.

**Props:**
- `image` (string): URL de la imagen
- `title` (string): Título del servicio
- `description` (string, opcional): Descripción del servicio

**Ejemplo de uso:**
```jsx
<ServiceCard
  image="https://example.com/image.jpg"
  title="Sculpt Studio"
  description="Descripción del servicio"
/>
```

**Características:**
- Hover effect con zoom en imagen
- Aspect ratio 4:5
- Overlay sutil en hover

---

### 3. JournalCard Component
**Ubicación:** `src/components/common/JournalCard.jsx`

Tarjeta para artículos del blog/journal.

**Props:**
- `image` (string): URL de la imagen
- `title` (string): Título del artículo
- `description` (string): Descripción breve
- `date` (string, opcional): Fecha de publicación

**Ejemplo de uso:**
```jsx
<JournalCard
  image="https://example.com/article.jpg"
  title="ELEVATE YOUR VITALITY"
  description="Lorem ipsum dolor sit amet..."
  date="MAY 15, 2026"
/>
```

**Características:**
- Aspect ratio 3:4
- Hover effect con cambio de color
- Line clamp para descripción (3 líneas máx)

---

### 4. TestimonialCard Component
**Ubicación:** `src/components/common/TestimonialCard.jsx`

Tarjeta para mostrar testimonios de clientes.

**Props:**
- `quote` (string): Texto del testimonio
- `author` (string): Nombre del autor
- `role` (string, opcional): Rol o profesión

**Ejemplo de uso:**
```jsx
<TestimonialCard
  quote="Lorem ipsum dolor sit amet, consectetur adipiscing..."
  author="Jean Marques"
  role="Client"
/>
```

**Características:**
- Comillas decorativas
- Diseño elegante con sombra
- Separador visual entre quote y autor

---

## 🏗️ Componentes de Layout

### 5. Header Component
**Ubicación:** `src/components/Header/Header.jsx`

Navegación principal del sitio con menú responsive.

**Características:**
- Fixed position (siempre visible)
- Banner superior con anuncio
- Menú hamburguesa en móvil
- Botón de login que abre modal
- Ícono de búsqueda
- Responsive en todos los breakpoints

**Estado interno:**
- `isMenuOpen`: Controla el menú móvil
- `isLoginModalOpen`: Controla el modal de login

**Menú de navegación:**
- HOME → #home
- SERVICES → #services
- TESTIMONIALS → #testimonials
- ADVICES → #advices
- CONTACT → #contact

---

### 6. LoginModal Component
**Ubicación:** `src/components/LoginModal/LoginModal.jsx`

Modal de autenticación con formulario de login.

**Props:**
- `isOpen` (boolean): Controla si el modal está visible
- `onClose` (function): Función para cerrar el modal

**Características:**
- Overlay oscuro con click para cerrar
- Formulario con email y password
- Checkbox "Remember me"
- Link "Forgot password"
- Opciones de login social (Google, Facebook)
- Link para registro
- Validación HTML5

**Estado interno:**
- `email`: Estado del campo email
- `password`: Estado del campo password

**Ejemplo de uso:**
```jsx
const [isOpen, setIsOpen] = useState(false);

<LoginModal 
  isOpen={isOpen} 
  onClose={() => setIsOpen(false)} 
/>
```

---

## 📄 Secciones (Sections)

### 7. HeroSection Component
**Ubicación:** `src/components/sections/HeroSection.jsx`

Sección hero de pantalla completa con imagen de fondo.

**Características:**
- Altura de 100vh
- Imagen de fondo con overlay oscuro
- Título grande y centrado
- Subtítulo descriptivo
- Indicador de scroll animado
- Completamente responsive

**Contenido:**
- Título: "ELEVATE YOUR VITALITY"
- Subtítulo: "Transform your body and mind through the power of Pilates"

---

### 8. AboutSection Component
**Ubicación:** `src/components/sections/AboutSection.jsx`

Sección "Sobre Nosotros" con imágenes y texto.

**Características:**
- Layout de 2 columnas (desktop)
- Grid de 2 imágenes con desplazamiento vertical
- Círculo decorativo (visible en desktop)
- Botón CTA "SHOP NOW"
- Fondo crema

**Layout:**
- Mobile: Stack vertical
- Desktop: Grid 50/50

---

### 9. ServicesSection Component
**Ubicación:** `src/components/sections/ServicesSection.jsx`

Sección de servicios con grid de tarjetas.

**Características:**
- Fondo verde sage
- Grid responsive (1-2-4 columnas)
- 4 servicios predefinidos:
  1. Sculpt Studio
  2. Metabolist Hours
  3. Front Breakin
  4. Brushed Duck-In
- Botón CTA centralizado
- Usa ServiceCard component

**Grid responsive:**
- Mobile: 1 columna
- Tablet: 2 columnas
- Desktop: 4 columnas

---

### 10. TestimonialsSection Component
**Ubicación:** `src/components/sections/TestimonialsSection.jsx`

Carrusel de testimonios con navegación.

**Características:**
- 4 testimonios predefinidos
- Navegación con flechas
- Indicadores de paginación (dots)
- Animación suave entre testimonios
- Fondo crema

**Estado interno:**
- `currentIndex`: Índice del testimonio actual

**Controles:**
- Flechas de navegación (prev/next)
- Dots clicables para navegación directa

**Funciones:**
- `nextTestimonial()`: Avanza al siguiente
- `prevTestimonial()`: Retrocede al anterior
- `goToTestimonial(index)`: Va a un testimonio específico

---

### 11. JournalSection Component
**Ubicación:** `src/components/sections/JournalSection.jsx`

Sección de blog/journal con artículos.

**Características:**
- Grid responsive de artículos
- 3 artículos predefinidos
- Fondo crema
- Usa JournalCard component

**Grid responsive:**
- Mobile: 1 columna
- Tablet: 2 columnas
- Desktop: 3 columnas

**Artículos incluidos:**
1. Beach Check-in/Reset
2. Elevate Your Vitality
3. Linking Your Vitality

---

### 12. CTASection Component
**Ubicación:** `src/components/sections/CTASection.jsx`

Sección final de llamada a la acción.

**Características:**
- Fondo verde sage
- Título centrado
- Texto descriptivo
- 2 botones CTA
- Completamente responsive

**Botones:**
- "GET STARTED" (outline)
- "CONTACT US" (secondary)

---

## 🏠 Páginas

### 13. Home Component
**Ubicación:** `src/pages/Home.jsx`

Componente principal que integra todas las secciones.

**Estructura:**
1. Header (fixed)
2. Main content con padding-top para offset del header
   - HeroSection
   - AboutSection
   - ServicesSection
   - TestimonialsSection
   - JournalSection
   - CTASection
3. Footer

**Footer incluye:**
- 3 columnas (responsive):
  - About Us
  - Quick Links
  - Contact
- Copyright dinámico
- Links de navegación

---

## 🎨 Uso de Tokens de Diseño

Todos los componentes utilizan tokens de diseño definidos en `tailwind.config.js`:

### Colores
```jsx
className="bg-primary"      // Verde sage
className="bg-secondary"    // Dorado
className="bg-cream"        // Crema/beige
className="bg-dark"         // Oscuro
```

### Espaciado
```jsx
className="p-md"      // 1.5rem
className="p-lg"      // 2rem
className="gap-xl"    // 3rem
```

### Tipografía
```jsx
className="font-heading"    // Playfair Display
className="font-sans"       // Montserrat
className="text-2xl"        // 2rem
```

### Transiciones
```jsx
className="transition-fast"   // 150ms
className="transition-base"   // 300ms
className="transition-slow"   // 500ms
```

---

## 📱 Patrón Mobile-First

Todos los componentes siguen un enfoque mobile-first:

```jsx
// Ejemplo de uso
<div className="
  text-sm          /* Mobile (default) */
  md:text-base     /* Tablet */
  lg:text-lg       /* Desktop */
">
  Texto responsive
</div>
```

**Breakpoints:**
- Default: < 640px (mobile)
- `sm:` 640px+
- `md:` 768px+
- `lg:` 1024px+
- `xl:` 1440px+

---

## ✨ Mejores Prácticas

1. **Reutilización**: Usa los componentes common para mantener consistencia
2. **Tokens**: Siempre usa los tokens de diseño de Tailwind
3. **Responsive**: Diseña mobile-first, luego escala a desktop
4. **Accesibilidad**: Incluye aria-labels y roles semánticos
5. **Performance**: Usa lazy loading para imágenes cuando sea posible

---

## 🔧 Customización

Para customizar cualquier componente:

1. Localiza el archivo del componente
2. Modifica las clases de Tailwind
3. Ajusta los tokens en `tailwind.config.js` si necesitas cambios globales
4. Mantén la estructura responsive

---

Última actualización: Mayo 2026
