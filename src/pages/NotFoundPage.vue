<script lang="ts" setup>
import { SearchX } from 'lucide-vue-next'
</script>

<template>
  <div class="not-found-page">
    <a-flex align="center" gap="20">
      <SearchX class="icon" />
      <span class="title">404</span>
    </a-flex>

    <span class="subtitle">Страница не найдена</span>
  </div>
</template>

<style lang="scss" scoped>
.not-found-page {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: calc(100vh - 235px);
}

.title {
  font-size: 90px;
}

.subtitle {
  font-size: 30px;
}

.icon {
  width: 90px;
  height: 90px;
}
</style>
