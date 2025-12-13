# AImpact — HTML Landing Template

Plantilla HTML multipágina para startups de IA y SaaS. Incluye modo oscuro, animaciones AOS, paletas configurables con variables CSS/SCSS, y páginas listas (landing, pricing, blog, about, contact, etc.).

## Demo local
- Sirve la carpeta raíz con cualquier servidor estático y abre `pages/index.html`.
- Requisitos: navegador moderno. Opcional: Node.js si compilas SCSS.

## Estructura
```
assets/
  css/            CSS compilado (style.css, style.min.css)
  js/             JS UI (modo oscuro, navbar sticky, pricing toggle)
  scss/           Fuentes SCSS (variables, mixins, componentes)
  images/         Imágenes SVG incluidas (hero, workflow, avatars, blog)
pages/            Páginas HTML (index, pricing, blog, about, contact…)
documentation/    Guía rápida de uso
```

## Personalización
- Colores/tema: `assets/scss/_variables.scss` (soporte `data-theme="light|dark"` y paletas).
- Componentes: `assets/scss/_components.scss`.
- Comportamiento UI: `assets/js/main.js`.

## Compilar SCSS (opcional)
```
npm i -D sass
npx sass assets/scss/style.scss assets/css/style.css --style=compressed --no-source-map
```

## SEO y Social
- Favicon SVG y metadatos OG/Twitter en `pages/index.html`. Sustituye `og:url` por tu dominio real.

## Licencia y soporte
- Para marketplaces, utiliza la licencia provista por la plataforma.
- Soporte básico recomendado: preguntas de instalación y enlaces rotos.

