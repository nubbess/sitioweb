<template>
  <section id="repertorio">
    <div class="rep-inner">
      <p class="section-label reveal">{{ t.repertorio.label }}</p>
      <h2 class="section-title reveal reveal-delay-1">{{ t.repertorio.title }}</h2>

      <div class="rep-grid">
        <div
          class="rep-card reveal"
          v-for="(group, i) in t.repertorio.groups"
          :key="i"
          :class="`reveal-delay-${i}`"
        >
          <div class="rep-card-line"></div>
          <h3 class="rep-heading">{{ group.heading }}</h3>
          <p class="rep-text">{{ group.text }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from '../composables/useI18n.js'
const { t } = useI18n()
</script>

<style scoped>
section { background: var(--black); }
.rep-inner { max-width: 1200px; margin: 0 auto; }

.rep-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1px;
  background: var(--border);
  border: 1px solid var(--border);
}
.rep-card {
  background: var(--surface);
  padding: 2.5rem 2rem;
  position: relative; overflow: hidden;
  transition: background 0.3s;
}
.rep-card:hover { background: var(--raised); }

.rep-card-line {
  position: absolute; top: 0; left: 0; right: 0;
  height: 2px; background: var(--gold);
  transform: scaleX(0); transform-origin: left;
  transition: transform 0.4s cubic-bezier(0.4,0,0.2,1);
}
.rep-card:hover .rep-card-line { transform: scaleX(1); }

.rep-heading {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.2rem; font-weight: 400;
  color: var(--white); margin-bottom: 0.8rem; line-height: 1.3;
}
.rep-text {
  font-size: 0.8rem; line-height: 1.8;
  color: var(--silver);
}

@media (max-width: 700px) {
  .rep-grid { grid-template-columns: 1fr; }
}
</style>
