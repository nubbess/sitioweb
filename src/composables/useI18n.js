import { ref, computed } from 'vue'
import { translations } from '../i18n.js'

const lang = ref('es')

export function useI18n() {
  const t = computed(() => translations[lang.value])
  function setLang(l) { lang.value = l }
  return { lang, t, setLang }
}
