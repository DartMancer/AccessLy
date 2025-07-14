<script lang="ts" setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { HEADER_ITEMS } from '../models'

const route = useRoute()
const router = useRouter()

const isActiveRoute = computed(() => (path: string) => {
  return route.path === path
})

const routeTo = (path: string) => router.push(path)
</script>

<template>
  <header class="header">
    <a-flex class="header-body" justify="space-between">
      <span class="title" @click="routeTo('/')"> AccessLy </span>
      <a-flex gap="40">
        <div
          v-for="item in HEADER_ITEMS"
          :class="['header-item', { active: isActiveRoute(item.path) }]"
        >
          <span class="title" @click="routeTo(item.path)">
            {{ item.title }}
          </span>
        </div>
      </a-flex>
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

.header-item {
  &.active {
    .title {
      color: var(--primary-color);
      transition: 0.2s ease-in-out;
    }
  }

  &:hover {
    .title {
      color: var(--hover-primary-color);
      transition: 0.2s ease-in-out;
    }
  }
}
</style>
