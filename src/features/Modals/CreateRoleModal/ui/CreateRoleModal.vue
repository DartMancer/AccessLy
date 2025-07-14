<script setup lang="ts">
import { CreateRoleForm } from '@/features/Forms'

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
    <a-flex class="role-create-page" align="center" vertical>
      <h1 class="title">Создание роли</h1>
      <CreateRoleForm v-model:modalVisible="modalVisible" />
    </a-flex>
  </a-modal>
</template>

<style lang="scss" scoped>
.role-create-page {
  width: 100%;
  gap: 40px;
}
</style>
