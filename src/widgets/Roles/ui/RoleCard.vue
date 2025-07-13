<script setup lang="ts">
import { useRouter } from 'vue-router'
import type { Role } from '@/entities/role'
import { BaseButton, BaseContainer } from '@/shared/ui'

const props = defineProps<{ role: Role }>()
const router = useRouter()

const goToDetails = () => {
  router.push(`/roles/${props.role.id}`)
}
</script>

<template>
  <BaseContainer class="base-container" fullW>
    <div class="base-container__info">
      <strong>{{ role.name }}</strong>
      <p v-if="role.description">{{ role.description }}</p>
    </div>

    <BaseButton class="base-btn" text="Подробнее" @click="goToDetails" primary />
  </BaseContainer>
</template>

<style scoped lang="scss">
.base-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  border: none;
  border-radius: 0;
  border-bottom: 2px solid rgba($color: #000000, $alpha: 0.2);

  &__info {
    display: flex;
    flex-direction: column;
  }
}
</style>
