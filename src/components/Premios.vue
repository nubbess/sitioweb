<template>
  <section id="premios">
    <div class="premios-inner">
      <p class="section-label reveal">{{ t.premios.label }}</p>
      <h2 class="section-title reveal reveal-delay-1">{{ t.premios.title }}</h2>

      <ul class="premios-list">
        <li
          class="premio-item reveal"
          v-for="(item, i) in t.premios.items"
          :key="i"
          :class="`reveal-delay-${Math.min(i, 3)}`"
        >
          <span class="premio-dot"></span>
          <span class="premio-text">{{ item }}</span>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from '../composables/useI18n.js'
const { t } = useI18n()
</script>

<style scoped>
section { background: var(--surface); }
.premios-inner { max-width: 860px; margin: 0 auto; }

.premios-list {
  list-style: none;
  border-top: 1px solid var(--border);
}
.premio-item {
  display: flex; align-items: flex-start; gap: 1.5rem;
  padding: 1.6rem 0;
  border-bottom: 1px solid var(--border);
  transition: background 0.2s;
}
.premio-item:hover { padding-left: 0.5rem; }
.premio-dot {
  flex-shrink: 0;
  width: 6px; height: 6px; border-radius: 50%;
  background: var(--gold);
  margin-top: 0.45rem;
}
.premio-text {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.1rem; font-weight: 400;
  color: var(--light); line-height: 1.5;
  transition: color 0.3s;
}
.premio-item:hover .premio-text { color: var(--white); }
</style>
