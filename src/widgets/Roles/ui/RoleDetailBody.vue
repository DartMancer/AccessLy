<script lang="ts" setup>
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { Pencil } from 'lucide-vue-next'
import { BaseButton } from '@/shared/ui/Buttons'
import { useRoleEditStore, type Role } from '@/entities/role'
import { EditRoleForm } from '@/features/Forms'
import { RolePermissionsTab } from '@/widgets/Permissions'
import { onBeforeRouteLeave } from 'vue-router'
import { RoleUsersTab } from '@/widgets/Users'

const { editedRole, isEditing } = storeToRefs(useRoleEditStore())
const { toggleMode, initRole, resetChanges } = useRoleEditStore()

const { role } = defineProps<{ role: Role }>()

onBeforeRouteLeave(() => {
  resetChanges()
})

onMounted(() => {
  initRole(role)
})
</script>

<template>
  <a-flex class="role-detail-body" vertical>
    <Transition name="fade" mode="out-in">
      <a-flex v-if="!isEditing" class="info-mode" vertical>
        <a-flex class="role-detail-header" justify="space-between" align="center">
          <a-flex vertical>
            <h1 class="title">Детали роли</h1>
            <h2>{{ editedRole.name }}</h2>
          </a-flex>

          <BaseButton
            class="base-btn"
            :icon="Pencil"
            text="Редактировать"
            @click="toggleMode"
            primary
          />
        </a-flex>

        <a-flex vertical>
          <span class="description-title">Описание: </span>
          <span class="description">{{ editedRole.description }}</span>
        </a-flex>

        <a-flex class="permission-tab" vertical>
          <span class="title">Права доступа</span>
          <RolePermissionsTab :disMode="true" />
        </a-flex>

        <a-flex class="permission-tab" vertical>
          <span class="title">Пользователи</span>
          <RoleUsersTab :disMode="true" />
        </a-flex>
      </a-flex>

      <a-flex v-else class="edit-mode" vertical>
        <EditRoleForm />
      </a-flex>
    </Transition>
  </a-flex>
</template>

<style lang="scss" scoped>
.role-detail-header {
  width: 100%;
}

.info-mode {
  gap: 40px;
}

.description-title {
  font-size: 16px;
  color: rgba($color: #000000, $alpha: 0.7);
}

.description {
  font-size: 18px;
  color: rgba($color: #000000, $alpha: 0.7);
}

.permission-tab {
  gap: 10px;

  .title {
    font-size: 18px;
  }
}

.edit-mode {
  gap: 40px;
}
</style>
