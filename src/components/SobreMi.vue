<template>
  <section id="sobre-mi">
    <div class="bio-grid">
      <!-- Photo frame -->
      <div class="bio-visual reveal">
        <div class="bio-frame">
          <img
            src="../assets/julian-profile.jpg"
            alt="Julián Martínez Sänger"
            class="bio-photo"
            @error="imgError = true"
          />
          <div v-if="imgError" class="bio-photo-fallback">
            <svg viewBox="0 0 100 160" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M50 5L54 28L58 28L58 31L52 31L52 62C65 66 74 79 74 93C74 111 63 125 50 125C37 125 26 111 26 93C26 79 35 66 48 62L48 31L42 31L42 28L46 28Z" fill="none" stroke="rgba(184,154,90,0.6)" stroke-width="1.2"/>
              <circle cx="50" cy="94" r="11" fill="none" stroke="rgba(184,154,90,0.4)" stroke-width="0.8"/>
              <path d="M46 62L54 62" stroke="rgba(184,154,90,0.5)" stroke-width="0.8"/>
              <path d="M44 72L56 72" stroke="rgba(184,154,90,0.25)" stroke-width="0.5"/>
              <path d="M44 82L56 82" stroke="rgba(184,154,90,0.2)" stroke-width="0.5"/>
              <path d="M44 92L56 92" stroke="rgba(184,154,90,0.15)" stroke-width="0.5"/>
              <ellipse cx="50" cy="118" rx="10" ry="5" fill="none" stroke="rgba(184,154,90,0.3)" stroke-width="0.8"/>
            </svg>
          </div>
        </div>
        <div class="bio-corner tl"></div>
        <div class="bio-corner tr"></div>
        <div class="bio-corner bl"></div>
        <div class="bio-corner br"></div>
        <!-- <div class="bio-badge">
          <span class="bio-badge-num">{{ t.sobre.badge_num }}</span>
          <span class="bio-badge-label">{{ t.sobre.badge_label }}</span>
        </div> -->
      </div>

      <!-- Text -->
      <div class="bio-text">
        <p class="section-label reveal">{{ t.sobre.label }}</p>
        <h2 class="section-title reveal reveal-delay-1">
          {{ t.sobre.title }}<em>{{ t.sobre.title_em }}</em>
        </h2>
        <p class="reveal reveal-delay-2">{{ t.sobre.p1 }}</p>
        <p class="reveal reveal-delay-3">{{ t.sobre.p2 }}</p>

        <div class="bio-stats reveal reveal-delay-3">
          <div class="bio-stat" v-for="stat in t.sobre.stats" :key="stat.label">
            <div class="bio-stat-num">{{ stat.num }}</div>
            <div class="bio-stat-label">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from '../composables/useI18n.js'
const { t } = useI18n()
const imgError = ref(false)
</script>

<style scoped>
section { background: var(--deep); }
.bio-grid {
  display: grid; grid-template-columns: 1fr 1.5fr;
  gap: 7rem; align-items: center;
  max-width: 1200px; margin: 0 auto;
}
.bio-visual { position: relative; }
.bio-frame {
  aspect-ratio: 3/4;
  background: var(--surface);
  border: 1px solid var(--border);
  position: relative; overflow: hidden;
}
.bio-photo {
  width: 100%; height: 100%;
  object-fit: cover; object-position: center top;
  display: block;
  transition: transform 0.6s ease;
}
.bio-frame:hover .bio-photo { transform: scale(1.03); }
.bio-photo-fallback {
  position: absolute; inset: 0;
  background: linear-gradient(145deg, var(--raised) 0%, var(--surface) 100%);
  display: flex; align-items: center; justify-content: center;
}
.bio-photo-fallback svg { width: 55%; opacity: 0.18; }

.bio-corner { position: absolute; width: 24px; height: 24px; border-color: var(--gold); border-style: solid; }
.bio-corner.tl { top: -8px; left: -8px; border-width: 1px 0 0 1px; }
.bio-corner.tr { top: -8px; right: -8px; border-width: 1px 1px 0 0; }
.bio-corner.bl { bottom: -8px; left: -8px; border-width: 0 0 1px 1px; }
.bio-corner.br { bottom: -8px; right: -8px; border-width: 0 1px 1px 0; }

.bio-badge {
  position: absolute; bottom: -1.5rem; right: -1.5rem;
  width: 110px; height: 110px; background: var(--gold);
  display: flex; flex-direction: column; align-items: center; justify-content: center;
}
.bio-badge-num { font-family: 'Cormorant Garamond', serif; font-size: 1.8rem; font-weight: 600; color: var(--black); line-height: 1; }
.bio-badge-label { font-size: 0.5rem; letter-spacing: 0.1em; text-transform: uppercase; color: rgba(8,8,8,0.7); margin-top: 0.25rem; text-align: center; padding: 0 8px; }

.bio-text p { font-size: 0.9rem; line-height: 2; color: var(--silver); margin-bottom: 1.8rem; }

.bio-stats { display: grid; grid-template-columns: repeat(3,1fr); border: 1px solid var(--border); margin-top: 3rem; }
.bio-stat { padding: 1.5rem; text-align: center; border-right: 1px solid var(--border); }
.bio-stat:last-child { border-right: none; }
.bio-stat-num { font-family: 'Cormorant Garamond', serif; font-size: 2rem; font-weight: 400; color: var(--gold); }
.bio-stat-label { font-size: 0.58rem; letter-spacing: 0.15em; text-transform: uppercase; color: var(--muted); margin-top: 0.4rem; }

@media (max-width: 900px) {
  .bio-grid { grid-template-columns: 1fr; gap: 4rem; }
  .bio-visual { max-width: 280px; margin: 0 auto; }
}
</style>
