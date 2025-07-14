<script lang="ts" setup>
import { BaseButton } from '@/shared/ui/Buttons'
import { useAddRoleUser } from '../models'

const modalVisible = defineModel<boolean>('modalVisible', { required: true })

const { formState, availableUsers, onFinish } = useAddRoleUser(modalVisible)
</script>

<template>
  <a-form class="edit-role-form" layout="vertical" v-model:model="formState" @finish="onFinish">
    <a-flex class="edit-header" justify="space-between" align="center">
      <h1 class="title">Добавление пользователя</h1>
    </a-flex>

    <a-select
      v-model:value="formState.userIds"
      mode="multiple"
      placeholder="Выберите пользователя"
      style="width: 100%"
    >
      <a-select-option v-for="user in availableUsers" :key="user.id" :value="user.id">
        {{ user.fullname }} — {{ user.email }}
      </a-select-option>
    </a-select>

    <a-flex class="form-actions">
      <BaseButton class="base-btn" text="Отмена" @click="modalVisible = false" outlined />
      <BaseButton class="base-btn" text="Добавить" html-type="submit" primary />
    </a-flex>
  </a-form>
</template>

<style lang="scss" scoped>
.edit-role-form {
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 100%;
  gap: 40px;
}

.edit-header {
  width: 100%;
}

.inputs-wrapper {
  width: 100% !important;
}

.form-actions {
  width: 100%;
  justify-content: flex-end;
  gap: 15px;
}

.base-btn {
  padding: 6px 40px;
}
</style>
