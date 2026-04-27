<template>
  <section id="inicio">
    <div class="hero-bg-lines"></div>
    <div class="hero-radial"></div>
    <div class="hero-content">
      <p class="hero-eyebrow">{{ t.hero.eyebrow }}</p>
      <h1 class="hero-title">Julián Martínez<br><em>Sänger</em></h1>
      <p class="hero-subtitle">{{ t.hero.subtitle }}</p>
      <div class="hero-actions">
        <a href="#videos"   class="btn-primary">{{ t.hero.cta_videos }}</a>
        <a href="#contacto" class="btn-ghost">{{ t.hero.cta_contact }}</a>
      </div>
    </div>
    <div class="hero-scroll">
      <div class="scroll-line"></div>
      <span>Scroll</span>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from '../composables/useI18n.js'
const { t } = useI18n()
</script>

<style scoped>
section {
  min-height: 100vh;
  display: grid; place-items: center;
  position: relative; overflow: hidden; padding: 0;
}
.hero-bg-lines {
  position: absolute; inset: 0;
  background: repeating-linear-gradient(
    90deg, transparent, transparent calc(100%/12 - 1px),
    rgba(255,255,255,0.018) calc(100%/12 - 1px),
    rgba(255,255,255,0.018) calc(100%/12)
  );
}
.hero-radial {
  position: absolute; inset: 0;
  background: radial-gradient(ellipse 70% 60% at 50% 50%, rgba(184,154,90,0.07) 0%, transparent 70%);
}
.hero-content {
  position: relative; z-index: 2;
  text-align: center; max-width: 900px; padding: 0 2rem;
}
.hero-eyebrow {
  font-size: 0.65rem; letter-spacing: 0.35em; text-transform: uppercase;
  color: var(--gold); margin-bottom: 2.5rem;
  opacity: 0; animation: fadeDown 0.8s 0.3s forwards;
  display: flex; align-items: center; justify-content: center; gap: 1.5rem;
}
.hero-eyebrow::before, .hero-eyebrow::after {
  content: ''; display: block; width: 40px; height: 1px; background: var(--gold-dim);
}
.hero-title {
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(3.2rem, 7vw, 6.5rem);
  font-weight: 300; line-height: 1; color: var(--white);
  margin-bottom: 0.4em;
  opacity: 0; animation: fadeUp 1s 0.5s forwards;
}
.hero-title em { font-style: italic; color: var(--gold); }
.hero-subtitle {
  font-size: 0.78rem; letter-spacing: 0.15em; text-transform: uppercase;
  color: var(--silver); margin-bottom: 4rem;
  opacity: 0; animation: fadeUp 0.9s 0.8s forwards;
}
.hero-actions {
  display: flex; gap: 1.5rem; justify-content: center; align-items: center;
  opacity: 0; animation: fadeUp 0.9s 1s forwards;
}
.hero-scroll {
  position: absolute; bottom: 3rem; left: 50%; transform: translateX(-50%);
  display: flex; flex-direction: column; align-items: center; gap: 0.8rem;
  opacity: 0; animation: fadeIn 1s 1.4s forwards;
}
.hero-scroll span { font-size: 0.6rem; letter-spacing: 0.3em; text-transform: uppercase; color: var(--muted); }
.scroll-line {
  width: 1px; height: 50px;
  background: linear-gradient(to bottom, var(--gold-dim), transparent);
  animation: scrollPulse 2.5s infinite;
}
</style>
