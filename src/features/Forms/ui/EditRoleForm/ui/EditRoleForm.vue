<script lang="ts" setup>
import { BaseButton } from '@/shared/ui/Buttons'
import { Input, TextArea } from '@/shared/ui/Fields'
import { useRoleEditStore } from '@/entities/role'
import { rules } from '../models'
import { storeToRefs } from 'pinia'
import { RoleTabs } from '@/widgets/Roles'

const { activeTab, editedRole, isChanged } = storeToRefs(useRoleEditStore())
const { onFinish, resetChanges } = useRoleEditStore()
</script>

<template>
  <a-form
    class="edit-role-form"
    layout="vertical"
    v-model:model="editedRole"
    :rules
    @finish="onFinish"
  >
    <a-flex class="edit-header" justify="space-between" align="center">
      <h1 class="title">Редактирование роли</h1>

      <a-flex class="form-actions">
        <BaseButton class="base-btn" text="Отмена" @click="resetChanges" outlined />
        <BaseButton
          class="base-btn"
          text="Создать"
          html-type="submit"
          :disabledBtn="!isChanged"
          primary
        />
      </a-flex>
    </a-flex>

    <a-flex class="inputs-wrapper" vertical>
      <Input
        class="input"
        name="name"
        v-model:value="editedRole.name"
        placeholder="Введите название роли"
        label="Название:"
      />
      <TextArea
        class="input"
        name="description"
        v-model:value="editedRole.description"
        :min="2"
        :max="4"
        placeholder="Введите описание роли"
        label="Описание:"
      />
    </a-flex>

    <RoleTabs :modelValue="activeTab" />
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
  gap: 15px;
}

.base-btn {
  padding: 6px 40px;
}
</style>
