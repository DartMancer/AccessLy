<script lang="ts" setup>
import { BaseButton } from '@/shared/ui/Buttons'
import { Input } from '@/shared/ui/Fields'
import { rules, useRoleForm } from '../models'

const modalVisible = defineModel<boolean>('modalVisible', { required: true })

const { formState, onFinish } = useRoleForm(modalVisible)
</script>

<template>
  <a-form
    class="create-role-form"
    layout="vertical"
    v-model:model="formState"
    :rules
    @finish="onFinish"
  >
    <a-flex class="inputs-wrapper" vertical>
      <Input
        class="input"
        name="name"
        v-model:value="formState.name"
        placeholder="Введите название роли"
        label="Название роли"
      />
      <Input
        class="input"
        name="description"
        v-model:value="formState.description"
        placeholder="Введите описание роли"
        label="Описание роли"
      />
    </a-flex>

    <a-flex class="form-actions">
      <BaseButton class="base-btn" text="Отмена" @click="modalVisible = false" outlined />
      <BaseButton class="base-btn" text="Создать" html-type="submit" primary />
    </a-flex>
  </a-form>
</template>

<style lang="scss" scoped>
.create-role-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 40px;
}

.inputs-wrapper {
  width: 100% !important;
}

.form-actions {
  gap: 15px;
}

.base-btn {
  padding: 6px 40px;
}
</style>
