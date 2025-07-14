<script setup lang="ts">
import { AddRoleUserForm } from '@/features/Forms'

const modalVisible = defineModel<boolean>('modalVisible', { required: true })
</script>

<template>
  <a-modal
    class="custom-modal-code"
    v-model:open="modalVisible"
    :footer="null"
    :autoFocusButton="null"
    destroyOnClose
    centered
  >
    <AddRoleUserForm v-model:modalVisible="modalVisible" />
  </a-modal>
</template>

<style lang="scss" scoped>
.role-create-page {
  width: 100%;
  gap: 40px;
}
</style>
