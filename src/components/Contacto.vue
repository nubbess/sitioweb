<template>
  <section id="contacto">
    <div class="contacto-inner">
      <p class="section-label reveal">{{ t.contacto.label }}</p>
      <h2 class="section-title reveal reveal-delay-1" style="white-space:pre-line">{{ t.contacto.title }}</h2>
      <p class="contacto-lead reveal reveal-delay-2">{{ t.contacto.lead }}</p>

      <div class="reveal reveal-delay-3" v-if="!enviado">
        <div class="form-grid">
          <div class="form-row">
            <label>{{ t.contacto.nombre }}</label>
            <input type="text" v-model="form.nombre" :placeholder="t.contacto.placeholder_nombre" />
          </div>
          <div class="form-row">
            <label>{{ t.contacto.email }}</label>
            <input type="email" v-model="form.email" :placeholder="t.contacto.placeholder_email" />
          </div>
        </div>
        <div class="form-row">
          <label>{{ t.contacto.asunto }}</label>
          <select v-model="form.asunto">
            <option value=""></option>
            <option v-for="opt in t.contacto.asunto_opts" :key="opt">{{ opt }}</option>
          </select>
        </div>
        <div class="form-row">
          <label>{{ t.contacto.mensaje }}</label>
          <textarea v-model="form.mensaje" :placeholder="t.contacto.placeholder_mensaje"></textarea>
        </div>
        <button class="form-submit" @click="enviar">{{ t.contacto.enviar }}</button>
      </div>

      <div class="form-success reveal" v-else>
        <div class="success-icon">✓</div>
        <p>{{ t.contacto.success }}</p>
      </div>

      <div class="contacto-social">
        <a class="social-link" href="https://youtube.com/@julianmsanger" target="_blank" rel="noopener">YouTube</a>
        <a class="social-link" href="https://instagram.com/clasesguitarrabb" target="_blank" rel="noopener">Instagram</a>
        <a class="social-link" href="mailto:julianms999@gmail.com">Email</a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useI18n } from '../composables/useI18n.js'
const { t } = useI18n()

const enviado = ref(false)
const form = reactive({ nombre: '', email: '', asunto: '', mensaje: '' })

function enviar() {
  if (!form.nombre || !form.email || !form.mensaje) return
  // In production: send to your backend / EmailJS / Formspree here
  enviado.value = true
}
</script>

<style scoped>
section { background: var(--deep); }
.contacto-inner { max-width: 760px; margin: 0 auto; }
.contacto-lead { font-size: 0.88rem; line-height: 1.9; color: var(--silver); margin-bottom: 3.5rem; }

.form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
.form-row { margin-bottom: 0; }
.form-row label { display: block; font-size: 0.58rem; letter-spacing: 0.2em; text-transform: uppercase; color: var(--muted); margin-bottom: 0.5rem; margin-top: 1.5rem; }
.form-row input,
.form-row textarea,
.form-row select {
  width: 100%; padding: 0.9rem 1rem;
  background: var(--surface); border: 1px solid var(--border);
  color: var(--light);
  font-family: 'Montserrat', sans-serif; font-size: 0.85rem; font-weight: 300;
  outline: none; transition: border-color 0.3s, background 0.3s;
  border-radius: 0; appearance: none;
}
.form-row input:focus,
.form-row textarea:focus,
.form-row select:focus { border-color: var(--gold); background: var(--raised); }
.form-row input::placeholder,
.form-row textarea::placeholder { color: var(--muted); }
.form-row textarea { height: 130px; resize: vertical; }
.form-row select option { background: var(--surface); }

.form-submit {
  width: 100%; padding: 1.1rem;
  background: var(--gold); color: var(--black); border: none; cursor: pointer;
  font-family: 'Montserrat', sans-serif; font-size: 0.65rem; font-weight: 500;
  letter-spacing: 0.3em; text-transform: uppercase;
  margin-top: 2rem; transition: background 0.3s, transform 0.3s;
}
.form-submit:hover { background: var(--gold-hi); transform: translateY(-2px); }

.form-success { text-align: center; padding: 4rem 0; }
.success-icon {
  width: 56px; height: 56px; border-radius: 50%;
  border: 1px solid var(--gold);
  display: flex; align-items: center; justify-content: center;
  margin: 0 auto 1.5rem;
  font-family: 'Cormorant Garamond', serif; font-size: 1.5rem; color: var(--gold);
}
.form-success p { font-family: 'Cormorant Garamond', serif; font-size: 1.4rem; color: var(--white); font-style: italic; }

.contacto-social {
  display: flex; justify-content: center; gap: 2.5rem;
  margin-top: 4rem; padding-top: 3rem;
  border-top: 1px solid var(--border);
}
.social-link {
  font-size: 0.62rem; letter-spacing: 0.2em; text-transform: uppercase;
  color: var(--muted); text-decoration: none; transition: color 0.3s;
}
.social-link:hover { color: var(--gold); }

@media (max-width: 900px) {
  .form-grid { grid-template-columns: 1fr; }
}
</style>
