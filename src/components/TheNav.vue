<template>
  <nav :class="{ scrolled: props.scrolled }">
    <a class="nav-logo" href="#inicio">JMS</a>

    <ul class="nav-links" :class="{ open: menuOpen }">
      <li><a href="#inicio"     @click="menuOpen = false">{{ t.nav.inicio }}</a></li>
      <li><a href="#sobre-mi"   @click="menuOpen = false">{{ t.nav.sobre }}</a></li>
      <li><a href="#premios"    @click="menuOpen = false">{{ t.nav.premios || (lang === 'de' ? 'Preise' : lang === 'en' ? 'Awards' : 'Premios') }}</a></li>
      <li><a href="#repertorio" @click="menuOpen = false">{{ t.nav.repertorio || 'Repertoire' }}</a></li>
      <li><a href="#videos"     @click="menuOpen = false">{{ t.nav.videos }}</a></li>
      <li><a href="#contacto"   @click="menuOpen = false">{{ t.nav.contacto }}</a></li>
    </ul>

    <div class="nav-right">
      <div class="lang-switcher">
        <button
          v-for="l in langs" :key="l"
          :class="{ active: lang === l }"
          @click="setLang(l)"
        >{{ l.toUpperCase() }}</button>
      </div>
      <div class="nav-hamburger" @click="menuOpen = !menuOpen">
        <span></span><span></span><span></span>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from '../composables/useI18n.js'

const props    = defineProps({ scrolled: Boolean })
const menuOpen = ref(false)
const langs    = ['es', 'en', 'de']
const { lang, t, setLang } = useI18n()
</script>

<style scoped>
nav {
  position: fixed; top: 0; left: 0; right: 0; z-index: 100;
  display: flex; justify-content: space-between; align-items: center;
  padding: 2rem 5rem;
  transition: background 0.5s, padding 0.5s;
}
nav.scrolled {
  padding: 1.2rem 5rem;
  background: rgba(8,8,8,0.93);
  border-bottom: 1px solid var(--border);
  backdrop-filter: blur(12px);
}
.nav-logo {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.25rem; font-weight: 600;
  letter-spacing: 0.12em; text-transform: uppercase;
  color: var(--white); text-decoration: none;
  flex-shrink: 0;
}
.nav-logo span { color: var(--gold); }

.nav-links { display: flex; gap: 2.5rem; list-style: none; }
.nav-links a {
  font-size: 0.62rem; letter-spacing: 0.22em;
  text-transform: uppercase; color: var(--silver);
  text-decoration: none; position: relative; transition: color 0.3s;
}
.nav-links a::after {
  content: ''; position: absolute; bottom: -4px; left: 0;
  width: 0; height: 1px; background: var(--gold); transition: width 0.35s;
}
.nav-links a:hover { color: var(--white); }
.nav-links a:hover::after { width: 100%; }

.nav-right { display: flex; align-items: center; gap: 1.5rem; }

.lang-switcher { display: flex; gap: 0.3rem; }
.lang-switcher button {
  background: none; border: 1px solid var(--border);
  color: var(--muted); font-family: 'Montserrat', sans-serif;
  font-size: 0.58rem; font-weight: 500; letter-spacing: 0.1em;
  padding: 0.3rem 0.55rem; cursor: pointer;
  transition: border-color 0.3s, color 0.3s;
}
.lang-switcher button:hover { border-color: var(--gold-dim); color: var(--silver); }
.lang-switcher button.active { border-color: var(--gold); color: var(--gold); }

.nav-hamburger {
  display: none; flex-direction: column;
  gap: 5px; cursor: pointer; padding: 4px;
}
.nav-hamburger span {
  display: block; width: 22px; height: 1px;
  background: var(--silver); transition: all 0.3s;
}

@media (max-width: 1024px) {
  nav, nav.scrolled { padding: 1.2rem 1.5rem; }
  .nav-links {
    display: none; flex-direction: column;
    position: absolute; top: 100%; left: 0; right: 0;
    background: rgba(10,10,10,0.98);
    padding: 2rem; gap: 1.8rem;
    border-bottom: 1px solid var(--border);
  }
  .nav-links.open { display: flex; }
  .nav-hamburger { display: flex; }
}
</style>
