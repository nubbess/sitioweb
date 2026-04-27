<template>
  <section id="videos">
    <div class="videos-inner">
      <p class="section-label reveal">{{ t.videos.label }}</p>
      <h2 class="section-title reveal reveal-delay-1" style="white-space: pre-line">{{ t.videos.title }}</h2>

      <div class="videos-grid">
        <div
          class="video-card reveal"
          v-for="(video, i) in videos"
          :key="i"
          :class="`reveal-delay-${i}`"
          @click="abrirVideo(video)"
        >
          <div class="video-thumb">
            <img
              v-if="video.thumb"
              :src="video.thumb"
              :alt="video.titulo[lang]"
              class="video-thumb-img"
              loading="lazy"
            />
            <div class="video-thumb-overlay"></div>
            <div class="play-ring"><div class="play-triangle"></div></div>
          </div>
          <div class="video-info">
            <div class="video-date">{{ video.fecha }}</div>
            <div class="video-title">{{ video.titulo[lang] }}</div>
            <div class="video-desc">{{ video.desc[lang] }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from '../composables/useI18n.js'
const { t, lang } = useI18n()
const emit = defineEmits(['open-video'])

// Para agregar un video:
// 1. Copiá la URL de YouTube: https://youtu.be/VIDEO_ID o https://youtube.com/watch?v=VIDEO_ID
// 2. Extraé el VIDEO_ID de la URL
// 3. thumb: `https://img.youtube.com/vi/VIDEO_ID/hqdefault.jpg`
// 4. url:   `https://youtu.be/VIDEO_ID`

const videos = [
  {
    titulo: {
      es: 'Guitarras en las Puertas del Sur 2024',
      en: 'Guitarras en las Puertas del Sur 2024',
      de: 'Guitarras en las Puertas del Sur 2024',
    },
    fecha: '2024',
    desc: {
      es: 'Actuación en el festival de guitarra de Bahía Blanca, Argentina.',
      en: 'Performance at the guitar festival in Bahía Blanca, Argentina.',
      de: 'Auftritt beim Gitarrenfestival in Bahía Blanca, Argentinien.',
    },
    thumb: 'https://img.youtube.com/vi/bVYV-bBPL0w/hqdefault.jpg',
    url:   'https://youtu.be/bVYV-bBPL0w',
  },
  {
    titulo: {
      es: 'Proyecto Bach — Ciclo de conciertos',
      en: 'Proyecto Bach — Concert series',
      de: 'Proyecto Bach — Konzertreihe',
    },
    fecha: '2023',
    desc: {
      es: 'Ciclo dedicado íntegramente a las obras de Johann Sebastian Bach.',
      en: 'Concert cycle dedicated entirely to the works of Johann Sebastian Bach.',
      de: 'Konzertzyklus, der vollständig den Werken Johann Sebastian Bachs gewidmet ist.',
    },
    thumb: 'https://img.youtube.com/vi/REEMPLAZA_ID/hqdefault.jpg',
    url:   'https://youtu.be/REEMPLAZA_ID',
  },
  {
    titulo: {
      es: '1.er Premio — Festival de Música Argentina 2024',
      en: '1st Prize — Festival de Música Argentina 2024',
      de: '1. Preis — Festival de Música Argentina 2024',
    },
    fecha: '2024',
    desc: {
      es: 'Actuación ganadora del Concurso Nacional de Guitarra.',
      en: 'Award-winning performance at the National Guitar Competition.',
      de: 'Preisgekrönter Auftritt beim Nationalen Gitarrenwettbewerb.',
    },
    thumb: 'https://img.youtube.com/vi/REEMPLAZA_ID/hqdefault.jpg',
    url:   'https://youtu.be/REEMPLAZA_ID',
  },
]

function abrirVideo(video) {
  window.open(video.url, '_blank', 'noopener,noreferrer')
}
</script>

<style scoped>
section { background: var(--black); }
.videos-inner { max-width: 1200px; margin: 0 auto; }

.videos-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 1px;
  background: var(--border);
  border: 1px solid var(--border);
}

.video-card {
  background: var(--surface);
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: background 0.3s;
}
.video-card:hover { background: var(--raised); }
.video-card::before {
  content: '';
  position: absolute; left: 0; top: 0; bottom: 0; width: 2px;
  background: var(--gold);
  transform: scaleY(0);
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  transform-origin: bottom;
}
.video-card:hover::before { transform: scaleY(1); }

.video-thumb {
  aspect-ratio: 16/9;
  background: var(--deep);
  display: flex; align-items: center; justify-content: center;
  position: relative; overflow: hidden;
}
.video-thumb-img {
  position: absolute; inset: 0;
  width: 100%; height: 100%;
  object-fit: cover; display: block;
  transition: transform 0.6s ease;
}
.video-card:hover .video-thumb-img { transform: scale(1.04); }

.video-thumb-overlay {
  position: absolute; inset: 0;
  background: rgba(8, 8, 8, 0.45);
  transition: background 0.3s;
}
.video-card:hover .video-thumb-overlay { background: rgba(8, 8, 8, 0.25); }

.play-ring {
  width: 52px; height: 52px;
  border-radius: 50%;
  border: 1px solid rgba(184, 154, 90, 0.5);
  display: flex; align-items: center; justify-content: center;
  position: relative; z-index: 1;
  transition: border-color 0.3s, background 0.3s;
}
.video-card:hover .play-ring {
  border-color: var(--gold);
  background: var(--gold);
}
.play-triangle {
  width: 0; height: 0;
  border-top: 9px solid transparent;
  border-bottom: 9px solid transparent;
  border-left: 15px solid rgba(184, 154, 90, 0.9);
  margin-left: 3px;
  transition: border-left-color 0.3s;
}
.video-card:hover .play-triangle { border-left-color: var(--black); }

.video-info { padding: 1.5rem 1.75rem 1.75rem; }
.video-date {
  font-size: 0.58rem; letter-spacing: 0.2em;
  text-transform: uppercase; color: var(--gold); margin-bottom: 0.6rem;
}
.video-title {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.2rem; font-weight: 400;
  color: var(--white); line-height: 1.35; margin-bottom: 0.6rem;
}
.video-desc { font-size: 0.78rem; color: var(--muted); line-height: 1.7; }
</style>
