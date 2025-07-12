<script lang="ts" setup>
import { useRouter } from 'vue-router'

const router = useRouter()

// const isActiveRoute = computed(() => (path: string) => {
//   return route.path === path;
// });

const routeTo = (path: string) => router.push(path)
</script>

<template>
  <header class="header">
    <a-flex class="header-body" justify="space-between">
      <span class="title" @click="routeTo('/')"> Accessly </span>
    </a-flex>
  </header>
</template>

<style lang="scss" scoped>
.header {
  display: flex;
  padding: 15px 20px;
  background-color: var(--background-color);
  border-bottom: 1px solid rgba($color: #000000, $alpha: 0.3);

  .title {
    cursor: pointer;
    font-size: 25px;
  }

  .header-body {
    width: 100%;
  }
}
</style>
