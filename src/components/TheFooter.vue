<template>
  <footer>
    <div class="footer-logo">Julián Martínez Sänger</div>
    <div class="footer-copy">© {{ year }} · {{ t.footer }}</div>
  </footer>
</template>

<script setup>
import { useI18n } from '../composables/useI18n.js'
const { t } = useI18n()
const year = new Date().getFullYear()
</script>

<style scoped>
footer {
  background: var(--black);
  border-top: 1px solid var(--border);
  padding: 3rem 5rem;
  display: flex; justify-content: space-between; align-items: center;
}
.footer-logo {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1rem; font-weight: 600;
  letter-spacing: 0.1em; text-transform: uppercase; color: var(--white);
}
.footer-logo span { color: var(--gold); }
.footer-copy { font-size: 0.6rem; letter-spacing: 0.15em; text-transform: uppercase; color: var(--muted); }
@media (max-width: 900px) {
  footer { flex-direction: column; gap: 1rem; text-align: center; padding: 2rem; }
}
</style>
