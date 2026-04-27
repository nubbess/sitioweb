<template>
  <section id="galeria">
    <div class="gallery-header">
      <p class="section-label reveal">{{ lang === 'de' ? 'Galerie' : lang === 'en' ? 'Gallery' : 'Galería' }}</p>
      <h2 class="section-title reveal reveal-delay-1">
        {{ lang === 'de' ? 'Momente' : lang === 'en' ? 'Captured\nmoments' : 'Momentos\ncapturados' }}
      </h2>
    </div>

    <div class="gallery-grid">
      <div
        class="gallery-item reveal"
        v-for="(foto, i) in fotos"
        :key="i"
        @click="emit('open-foto', foto)"
      >
        <img
          :src="foto.src"
          :alt="foto.alt"
          class="gallery-photo"
          loading="lazy"
          @error="(e) => e.target.src = foto.fallback"
        />
        <div class="gallery-overlay">
          <span>{{ foto.captions[lang] }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from '../composables/useI18n.js'
const { lang } = useI18n()
const emit = defineEmits(['open-foto'])

// Replace src with your real photo paths inside /public/images/
// fallback shows a dark gradient if the image is missing
const fotos = [
  {
    src: '/images/concierto-01.jpg',
    fallback: '/images/placeholder.jpg',
    alt: 'Julián Martínez Sänger en concierto',
    captions: { es: 'Festival Guitarras en las Puertas del Sur, 2024', en: 'Guitarras en las Puertas del Sur Festival, 2024', de: 'Festival Guitarras en las Puertas del Sur, 2024' },
  },
  {
    src: '/images/concierto-02.jpg',
    fallback: '/images/placeholder.jpg',
    alt: 'Proyecto Bach',
    captions: { es: 'Proyecto Bach, Bahía Blanca', en: 'Proyecto Bach, Bahía Blanca', de: 'Proyecto Bach, Bahía Blanca' },
  },
  {
    src: '/images/concierto-03.jpg',
    fallback: '/images/placeholder.jpg',
    alt: 'Guitarras del Mundo',
    captions: { es: 'Guitarras del Mundo, 2021', en: 'Guitarras del Mundo, 2021', de: 'Guitarras del Mundo, 2021' },
  },
  {
    src: '/images/concierto-04.jpg',
    fallback: '/images/placeholder.jpg',
    alt: 'Festival Puerto Cultura',
    captions: { es: 'Festival Puerto Cultura, 2020', en: 'Puerto Cultura Festival, 2020', de: 'Festival Puerto Cultura, 2020' },
  },
  {
    src: '/images/concierto-05.jpg',
    fallback: '/images/placeholder.jpg',
    alt: 'Mozarteum Salzburg',
    captions: { es: 'Universität Mozarteum Salzburg', en: 'Universität Mozarteum Salzburg', de: 'Universität Mozarteum Salzburg' },
  },
  {
    src: '/images/concierto-06.jpg',
    fallback: '/images/placeholder.jpg',
    alt: 'Concurso Maldonado 2019',
    captions: { es: 'Festival Internacional, Maldonado 2019', en: 'International Festival, Maldonado 2019', de: 'Internationales Festival, Maldonado 2019' },
  },
]
</script>

<style scoped>
section { background: var(--deep); }
.gallery-header { max-width: 1200px; margin: 0 auto 3.5rem; }

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 6px;
  max-width: 1200px; margin: 0 auto;
}

.gallery-item { overflow: hidden; position: relative; cursor: pointer; }
.gallery-item:nth-child(1) { grid-column: span 8; }
.gallery-item:nth-child(2) { grid-column: span 4; }
.gallery-item:nth-child(3) { grid-column: span 4; }
.gallery-item:nth-child(4) { grid-column: span 4; }
.gallery-item:nth-child(5) { grid-column: span 4; }
.gallery-item:nth-child(6) { grid-column: span 12; }

/* img */
.gallery-photo {
  width: 100%;
  height: 100%;
  min-height: 220px;
  object-fit: cover;
  object-position: center;
  display: block;
  transition: transform 0.7s cubic-bezier(0.4,0,0.2,1);
  background: var(--surface); /* visible while loading */
}
.gallery-item:nth-child(1) .gallery-photo { min-height: 440px; }
.gallery-item:nth-child(6) .gallery-photo { min-height: 280px; }
.gallery-item:hover .gallery-photo { transform: scale(1.05); }

/* overlay caption */
.gallery-overlay {
  position: absolute; inset: 0;
  background: linear-gradient(to top, rgba(8,8,8,0.82) 0%, transparent 55%);
  opacity: 0; transition: opacity 0.4s;
  display: flex; align-items: flex-end; padding: 1.25rem;
}
.gallery-item:hover .gallery-overlay { opacity: 1; }
.gallery-overlay span {
  font-size: 0.62rem; letter-spacing: 0.2em;
  text-transform: uppercase; color: var(--light);
}

@media (max-width: 900px) {
  .gallery-item:nth-child(1) { grid-column: span 12; }
  .gallery-item:nth-child(2),
  .gallery-item:nth-child(3) { grid-column: span 6; }
  .gallery-item:nth-child(n+4) { grid-column: span 12; }
  .gallery-photo { min-height: 200px !important; }
}
</style>
