<script lang="ts" setup>
import { BaseButton } from '@/shared/ui/Buttons'
import { Input } from '@/shared/ui/Fields'
import { rules, useUserForm } from '../models'

const modalVisible = defineModel<boolean>('modalVisible', { required: true })

const { formState, onFinish } = useUserForm(modalVisible)
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
        v-model:value="formState.fullName"
        placeholder="Введите ФИО пользователя"
        label="ФИО"
      />
      <Input
        class="input"
        name="description"
        v-model:value="formState.email"
        placeholder="Введите почту пользователя"
        label="Почта"
      />
    </a-flex>

    <a-flex class="form-actions">
      <BaseButton class="base-btn" text="Отмена" @click="modalVisible = false" outlined />
      <BaseButton class="base-btn" text="Добавить" html-type="submit" primary />
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
