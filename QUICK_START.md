# 🚀 Quick Start - Pilates en Malvín

## Pasos para ejecutar el proyecto

### 1️⃣ Instalar Node.js
Si no tienes Node.js instalado, descárgalo desde: https://nodejs.org/
Recomendado: versión LTS (Long Term Support)

### 2️⃣ Instalar dependencias
Abre una terminal en la carpeta del proyecto y ejecuta:
```bash
npm install
```

Esto instalará:
- React 18.3.1
- React DOM 18.3.1
- Tailwind CSS 3.4.1
- PostCSS y Autoprefixer
- Todas las dependencias necesarias

### 3️⃣ Iniciar el servidor de desarrollo
```bash
npm start
```

La aplicación se abrirá automáticamente en http://localhost:3000

### 4️⃣ Ver el resultado
El sitio web debería verse así:

**Secciones incluidas:**
- ✅ Header sticky con menú responsive y botón de login
- ✅ Hero Section con "ELEVATE YOUR VITALITY"
- ✅ About Section con imágenes y descripción
- ✅ Services Section con 4 servicios en grid
- ✅ Testimonials Section con carrusel
- ✅ Journal Section con artículos de blog
- ✅ CTA Section "BEGIN YOUR JOURNEY"
- ✅ Footer con información de contacto

---

## 📱 Testing Responsive

Para probar el diseño responsive:

1. **En el navegador:**
   - Presiona F12 para abrir DevTools
   - Haz click en el ícono de dispositivos móviles (o Ctrl+Shift+M)
   - Prueba diferentes tamaños:
     - iPhone SE (375px)
     - iPad (768px)
     - Desktop (1024px+)

2. **Breakpoints a verificar:**
   - Mobile: < 768px (menú hamburguesa)
   - Tablet: 768px - 1024px (grids de 2 columnas)
   - Desktop: > 1024px (grids completos)

---

## 🎨 Personalizaciones Rápidas

### Cambiar Colores
Edita `tailwind.config.js`:
```javascript
colors: {
  'primary': '#TU_COLOR',      // Verde sage actual: #8B9B8E
  'secondary': '#TU_COLOR',    // Dorado actual: #C9A961
  'cream': '#TU_COLOR',        // Crema actual: #F5F1ED
}
```

### Cambiar Textos
Edita los componentes en `src/components/sections/`

### Cambiar Imágenes
Reemplaza las URLs de Unsplash en cada sección con tus propias imágenes

---

## 📂 Estructura de Archivos Creados

```
pilatesenmalvin/
├── package.json                    # Dependencias actualizadas
├── tailwind.config.js              # Tokens de diseño
├── postcss.config.js              # Configuración PostCSS
├── README.md                       # Documentación completa
├── COMPONENT_GUIDE.md             # Guía de componentes
├── QUICK_START.md                 # Esta guía
│
└── src/
    ├── index.css                   # Tailwind directives
    ├── index.js                    # Entry point
    ├── App.js                      # Componente raíz
    │
    ├── pages/
    │   └── Home.jsx               # Página principal
    │
    └── components/
        ├── Header/
        │   └── Header.jsx         # Navegación + login button
        │
        ├── LoginModal/
        │   └── LoginModal.jsx     # Modal de autenticación
        │
        ├── sections/
        │   ├── HeroSection.jsx
        │   ├── AboutSection.jsx
        │   ├── ServicesSection.jsx
        │   ├── TestimonialsSection.jsx
        │   ├── JournalSection.jsx
        │   └── CTASection.jsx
        │
        └── common/
            ├── Button.jsx
            ├── ServiceCard.jsx
            ├── JournalCard.jsx
            └── TestimonialCard.jsx
```

---

## ✅ Checklist de Funcionalidades

- [x] Header sticky con navegación
- [x] Menú hamburguesa en móvil
- [x] Botón de login (abre modal)
- [x] Modal de login funcional
- [x] Hero section full-height
- [x] About section con imágenes
- [x] Services grid responsive (1-2-4 columnas)
- [x] Testimonials con carrusel navegable
- [x] Journal con grid de artículos
- [x] CTA section con botones
- [x] Footer con información
- [x] Sistema de tokens de diseño
- [x] Mobile-first responsive
- [x] Transiciones y hover effects
- [x] Componentes reutilizables

---

## 🔧 Comandos Útiles

```bash
# Iniciar desarrollo
npm start

# Crear build de producción
npm run build

# Ejecutar tests
npm test

# Limpiar node_modules y reinstalar
rm -rf node_modules package-lock.json
npm install
```

---

## 🐛 Troubleshooting

### Error: "npm no se reconoce"
➡️ Instala Node.js desde https://nodejs.org/

### Error: "Module not found"
➡️ Ejecuta `npm install` nuevamente

### El sitio no carga correctamente
➡️ Limpia cache: `npm start` con Ctrl+C, luego ejecuta de nuevo

### Estilos de Tailwind no se aplican
➡️ Verifica que `tailwind.config.js` y `postcss.config.js` estén en la raíz
➡️ Reinicia el servidor de desarrollo

---

## 📚 Documentación Adicional

- **README.md**: Documentación completa del proyecto
- **COMPONENT_GUIDE.md**: Guía detallada de cada componente

---

## 🎯 Próximos Pasos

1. ✅ Instalar y ejecutar el proyecto
2. 📸 Reemplazar imágenes placeholder con fotos reales
3. ✍️ Actualizar textos lorem ipsum con contenido real
4. 🎨 Ajustar colores según tu marca (si es necesario)
5. 🌐 Agregar más secciones si lo deseas
6. 🚀 Deploy a producción cuando esté listo

---

**¿Necesitas ayuda?**
Revisa COMPONENT_GUIDE.md para ver cómo usar y modificar cada componente.

¡Éxito con tu sitio web de Pilates! 🧘‍♀️
