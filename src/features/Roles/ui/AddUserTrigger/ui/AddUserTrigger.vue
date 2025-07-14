<script setup lang="ts">
import { ref } from 'vue'
import { BaseButton } from '@/shared/ui/Buttons'
import { AddUserModal } from '@/features/Modals'

const modalVisible = ref<boolean>(false)
</script>

<template>
  <BaseButton class="base-btn" text="Добавить пользователя" @click="modalVisible = true" primary />
  <AddUserModal v-model:modalVisible="modalVisible" />
</template>

<style lang="scss" scoped>
.base-btn {
  padding: 6px 40px;
  margin-right: 16px;

  :deep(.base-btn__text) {
    font-size: 18px;
  }
}
</style>
