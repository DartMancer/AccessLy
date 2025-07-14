<script setup lang="ts">
import { useRouter } from 'vue-router'
import { BaseButton } from '@/shared/ui/Buttons'
import Logo from '@/assets/Logo.vue'

const router = useRouter()
const routeToRoles = () => router.push('/roles')
</script>

<template>
  <main class="main-page">
    <a-flex align="center" gap="30">
      <Logo class="logo" />

      <a-flex vertical>
        <h1 class="title">AccessLy</h1>
        <h2 class="subtitle">Конструктор ролей</h2>
      </a-flex>
    </a-flex>

    <BaseButton class="base-btn title" text="К ролям" @click="routeToRoles" primary />
  </main>
</template>

<style lang="scss" scoped>
.main-page {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: calc(100vh - 235px);
  gap: 80px;
}

.logo {
  max-width: 200px;
  max-height: 200px;
  stroke: none;
}

.title {
  font-size: 60px;
}

.subtitle {
  font-size: 30px;
}

.base-btn {
  height: fit-content;
  padding: 6px 40px;

  :deep(.base-btn__text) {
    font-size: 18px;
  }
}
</style>
