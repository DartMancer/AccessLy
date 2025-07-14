<script lang="ts" setup>
import { BaseButton } from '@/shared/ui/Buttons'
import { SearchX } from 'lucide-vue-next'
import { useRouter } from 'vue-router'

const router = useRouter()

const routeToMain = () => router.push('/')
</script>

<template>
  <div class="role-not-found">
    <a-flex align="center" gap="20">
      <SearchX class="icon" />
      <span class="title">Упс...</span>
    </a-flex>

    <span class="subtitle">Роль не найдена</span>

    <BaseButton class="base-btn" text="На главную" @click="routeToMain" primary />
  </div>
</template>

<style lang="scss" scoped>
.role-not-found {
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

.base-btn {
  height: fit-content;
  padding: 6px 40px;
  margin-top: 50px;
}
</style>
