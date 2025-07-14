<script setup lang="ts">
import { AddPermissionForm } from '@/features/Forms'

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
    <a-flex class="add-permission-page" align="center" vertical>
      <h1 class="title">Добавление прав доступа</h1>
      <AddPermissionForm v-model:modalVisible="modalVisible" />
    </a-flex>
  </a-modal>
</template>

<style lang="scss" scoped>
.add-permission-page {
  width: 100%;
  gap: 40px;
}
</style>
