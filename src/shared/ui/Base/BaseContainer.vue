<script lang="ts" setup>
defineProps<{ fullW?: boolean }>()
</script>

<template>
  <div class="base-container" :style="{ width: fullW ? '100%' : 'fit-content' }">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.base-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  gap: 10px;
  border: 2px solid rgba($color: #000000, $alpha: 0.2);
  border-radius: 12px;
  background-color: white;
  backdrop-filter: blur(10px);
  will-change: backdrop-filter;
  transition: backdrop-filter 0.2s ease-in-out;
}

@media (max-width: 540px) {
  .base-container {
    border-width: 1px;
  }
}
</style>
