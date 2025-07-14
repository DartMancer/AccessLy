<script setup lang="ts">
import { useRouter } from 'vue-router'
import { Trash2 } from 'lucide-vue-next'
import { BaseContainer } from '@/shared/ui/Base'
import { BaseButton } from '@/shared/ui/Buttons'
import { useRoleStore, type Role } from '@/entities/role'

const { removeRole } = useRoleStore()

const { role } = defineProps<{ role: Role }>()
const router = useRouter()

const goToDetails = () => {
  router.push(`/roles/${role.id}`)
}
</script>

<template>
  <BaseContainer class="base-container" fullW>
    <div class="base-container__info">
      <strong class="title">{{ role.name }}</strong>
      <p v-if="role.description">{{ role.description }}</p>
    </div>

    <a-flex gap="10">
      <BaseButton class="base-btn" text="Подробнее" @click="goToDetails" primary />
      <BaseButton class="base-btn delete" :icon="Trash2" @click="removeRole(role.id)" outlined />
    </a-flex>
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

.title {
  font-size: 18px;
}

.base-btn {
  &.delete {
    width: 40px !important;
    height: 40px !important;
    padding: 0;
  }
}
</style>
