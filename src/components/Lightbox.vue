<template>
  <div class="lightbox" @click.self="emit('close')">
    <span class="lightbox-close" @click="emit('close')">&#x2715;</span>
    <div class="lightbox-content">
      <slot />
    </div>
  </div>
</template>

<script setup>
const emit = defineEmits(['close'])
</script>

<style scoped>
.lightbox {
  position: fixed; inset: 0;
  background: rgba(8,8,8,0.96);
  z-index: 200; display: flex;
  align-items: center; justify-content: center;
  animation: fadeIn 0.3s;
}
.lightbox-close {
  position: absolute; top: 2rem; right: 2.5rem;
  font-size: 1.5rem; color: var(--silver);
  cursor: pointer; transition: color 0.3s;
  font-weight: 300; line-height: 1;
}
.lightbox-close:hover { color: var(--gold); }
.lightbox-content {
  max-width: 860px; width: 90%;
  border: 1px solid var(--border);
}
</style>
