# Julián Martínez Sänger — Sitio web

Vue 3 + Vite · ES / EN / DE

## Inicio rápido

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # producción → /dist
```

## Estructura

```
src/
├── i18n.js                 ← Todos los textos (ES / EN / DE)
├── composables/
│   └── useI18n.js          ← Composable de idioma global
├── assets/main.css         ← Variables CSS y estilos base
└── components/
    ├── TheNav.vue          ← Nav + selector ES/EN/DE
    ├── HeroSection.vue
    ├── SobreMi.vue
    ├── Premios.vue         ← Premios y reconocimientos
    ├── Repertorio.vue      ← Repertorio resumido (4 cards)
    ├── Galeria.vue         ← Grid con <img> reales
    ├── Videos.vue          ← Actuaciones con thumbnails
    ├── Contacto.vue        ← Formulario + redes sociales
    ├── TheFooter.vue
    └── Lightbox.vue
```

## Agregar fotos reales

Coloca tus imágenes en `/public/images/` y edita los arrays en:
- `Galeria.vue` → campo `src` de cada objeto en `fotos[]`
- `Videos.vue`  → campo `thumb` de cada objeto en `videos[]`

Foto de perfil: `/public/images/julian-profile.jpg`

Thumbnail de YouTube:
  https://img.youtube.com/vi/VIDEO_ID/hqdefault.jpg

## Cambiar textos

Todo está en `src/i18n.js`. Cada clave tiene ES / EN / DE.

## Formulario de contacto

En Contacto.vue, dentro de enviar(), integra tu servicio:
- Formspree: https://formspree.io (sin backend)
- EmailJS:   https://emailjs.com  (sin backend)
