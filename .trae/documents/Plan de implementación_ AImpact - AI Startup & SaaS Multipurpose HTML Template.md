# AImpact - AI Startup & SaaS Multipurpose HTML Template

## Estado Actual
- Ya existen `assets/scss/*`, `assets/js/main.js`, `assets/css/style.css` y páginas: `pages/index.html`, `pages/index-2.html`, `pages/about.html`, `pages/contact.html`, `pages/404.html`, `pages/blog/index.html`, `documentation/index.html`.
- Falta completar: `features.html`, `pricing.html` dedicadas, `blog/single.html`, `team.html`, `portfolio.html`, `faq.html`, `index-dark.html`, carpeta `assets/images/` y (opcional) `assets/vendors/`.

## Stack Base
- Bootstrap 5.3+ vía CDN (`bootstrap.min.css` y `bootstrap.bundle.min.js`).
- AOS vía CDN (`aos.css` y `aos.js`).
- Font Awesome 6 vía CDN.
- Google Fonts: `Inter` y `Poppins` con `preconnect` y `display=swap`.
- Vanilla JS (`assets/js/main.js`) para: toggle dark mode con `localStorage`, navbar sticky, smooth scroll, toggle pricing.

## Estructura de Carpetas y Archivos
- Crear `assets/images/` con placeholders (`hero`, `dashboard`, `avatars`, `logos`).
- Crear `assets/vendors/` si se desea offline (copias de AOS CSS/JS) sin cambiar los CDNs por defecto.
- Completar `pages/` con:
  - `features.html`, `pricing.html`, `team.html`, `portfolio.html`, `faq.html`, `blog/single.html`, `index-dark.html`.
- Mantener `index.html` raíz como redirect hacia `pages/index.html`.

## Layout Compartido
- Encabezado/menú y footer comunes, replicados con HTML limpio y consistente.
- Accesibilidad: `aria-label` en `navbar-toggler`, `role="navigation"`, `aria-current` en links activos, `visually-hidden` en controles de carousel.
- Dark mode toggle consistente (`#theme-toggle`) en todas las páginas; atributo `data-theme` en `<html>`.

## Sistema SASS
- Consolidar variables en `assets/scss/_variables.scss` usando CSS variables para light/dark.
- Añadir variaciones de color: `--primary-color`, `--accent-color` preseteadas (azul/púrpura/neón sutil) y mapas para temas alternativos.
- Añadir soporte básico RTL en SASS: selectores bajo `[dir="rtl"]` para alinear texto y corregir espaciados críticos.
- `style.scss` importa `variables`, `mixins`, `components` y define secciones utilitarias (hero, footer, utilities) ya existentes.
- Generar `assets/css/style.css` (y `style.min.css` en producción) con `sass --style=compressed`.

## JavaScript
- Ampliar `assets/js/main.js` con:
  - Toggle pricing mensual/anual usando `data-*` en tarjetas y un switch.
  - Enfoque accesible: actualizar `aria-pressed` del toggle dark mode.
  - Lazy-loading asistido: marcar imágenes con `loading="lazy"`, `decoding="async"`; LCP del hero con `loading="eager"` y `fetchpriority="high"`.
  - (Opcional) pequeño helper de includes sin dependencias para inyectar header/footer; si se prefiere, se replicará el HTML manualmente para maximizar portabilidad ThemeForest.

## Homepages
- `pages/index.html` (AI Startup):
  - Mantener secciones: Hero, Integrations, Features, How it Works, Pricing, Testimonials, CTA y Footer.
  - Mejorar performance (atributos de imagen, preconnect, colores `theme-color`).
- `pages/index-2.html` (SaaS Product):
  - Refinar hero centrado, stats, CTA; mantener compatibilidad dark mode.
- `pages/index-dark.html`:
  - Demo forzada con `data-theme="dark"` y apariencia consistente.

## Páginas Adicionales
- `features.html`: grid de features con íconos, badges, secciones descriptivas.
- `pricing.html`: tablas responsive, switch mensual/anual, FAQs cortas.
- `team.html`: cards de equipo con roles, social links.
- `portfolio.html`: grid filtrable (bootstrap utilidades) con modals para detalle.
- `faq.html`: acordeones accesibles (`aria-expanded`, `aria-controls`).
- `blog/single.html`: layout de post con sidebar, breadcrumbs, prev/next.
- `contact.html`: formulario con validación Bootstrap, `aria-describedby`, y mapa estático placeholder.
- `404.html`: mensaje claro, botón “Back Home”.

## Accesibilidad y Performance
- Atributos `alt` descriptivos, roles y ARIA pertinentes.
- Contraste de color verificado en botones y textos.
- Lazy loading global excepto imágenes críticas.
- Minificación CSS; JS ligero sin jQuery; evitar bloqueos de render.
- Metas: `meta name="theme-color"` y `color-scheme: light dark`.

## RTL y Variantes de Color
- Toggle `dir="rtl"` en `<html>` para demo básica.
- Correcciones clave en navbar, hero y cards vía CSS lógico.
- Variantes de color por `data-theme` adicionales (e.g., `data-theme="blue"|"purple"|"neon"`) sobre variables CSS.

## Documentación
- Actualizar `documentation/index.html` con:
  - Instalación, estructura, uso de CDNs, compilación SASS (`npm run sass`).
  - Dark mode, pricing toggle, RTL, variaciones de color.
  - Buenas prácticas de accesibilidad y performance.

## Scripts de Build
- `package.json` ya incluye `"sass": "sass assets/scss/style.scss assets/css/style.css --watch"`.
- Añadir script producción (cuando se confirme): `sass assets/scss/style.scss assets/css/style.min.css --style=compressed`.

## Verificación
- Pruebas manuales en escritorio/móvil: responsive, dark mode, AOS, carousel.
- Lighthouse: performance y accesibilidad básicas.
- Validación HTML5 (sin errores) y revisión de links.

## Entregables en la Implementación
1) Crear carpetas/ficheros que faltan.
2) Base HTML común y consistente en todas las páginas.
3) Variables SASS para temas, dark mode, RTL y gradients.
4) Homepage `pages/index.html` completa y optimizada.
5) Resto de páginas y variaciones solicitadas.
6) Documentación actualizada.

¿Confirmas este plan para proceder con la implementación paso a paso?