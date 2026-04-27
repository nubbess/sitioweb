<template>
  <TheNav :scrolled="scrolled" />
  <HeroSection />
  <SobreMi />
  <Premios />
  <Repertorio />
  <Videos @open-video="openVideo" />
  <Contacto />
  <TheFooter />

  <Lightbox v-if="lightboxVideo" @close="lightboxVideo = null">
    <div class="lb-img">
      <div class="play-ring"><div class="play-triangle"></div></div>
    </div>
    <div class="lb-bar"><span>{{ lightboxVideo.titulo }}</span></div>
  </Lightbox>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import TheNav      from './components/TheNav.vue'
import HeroSection from './components/HeroSection.vue'
import SobreMi     from './components/SobreMi.vue'
import Premios     from './components/Premios.vue'
import Repertorio  from './components/Repertorio.vue'
import Videos      from './components/Videos.vue'
import Contacto    from './components/Contacto.vue'
import TheFooter   from './components/TheFooter.vue'
import Lightbox    from './components/Lightbox.vue'

const scrolled      = ref(false)
const lightboxVideo = ref(null)

function handleScroll() { scrolled.value = window.scrollY > 60 }
function openVideo(v)   { lightboxVideo.value = v }

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  initReveal()
})
onUnmounted(() => window.removeEventListener('scroll', handleScroll))

function initReveal() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target) }
    })
  }, { threshold: 0.07 })
  setTimeout(() => document.querySelectorAll('.reveal').forEach(el => obs.observe(el)), 150)
}
</script>

<style>
.lb-img {
  width: 100%; aspect-ratio: 16/9;
  background: var(--surface);
  display: flex; align-items: center; justify-content: center;
}
.lb-bar {
  background: var(--surface);
  padding: 1rem 1.5rem;
  border-top: 1px solid var(--border);
}
.lb-bar span { font-size: 0.62rem; letter-spacing: 0.15em; text-transform: uppercase; color: var(--silver); }
.play-ring {
  width: 52px; height: 52px; border-radius: 50%;
  border: 1px solid rgba(184,154,90,0.4);
  display: flex; align-items: center; justify-content: center;
}
.play-triangle {
  width: 0; height: 0;
  border-top: 9px solid transparent;
  border-bottom: 9px solid transparent;
  border-left: 15px solid rgba(184,154,90,0.8);
  margin-left: 3px;
}
</style>
