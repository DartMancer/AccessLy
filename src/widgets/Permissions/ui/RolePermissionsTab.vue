<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { usePermissionsStore, useRoleEditStore, type Permission } from '@/entities/role'

const { permissions } = storeToRefs(usePermissionsStore())
const { editedRole } = storeToRefs(useRoleEditStore())

defineProps<{ disMode?: boolean }>()

const isFlagActive = (perm: Permission, flag: keyof Permission) => {
  const match = editedRole.value.permissions.find(
    (p) => p.name === perm.name && p.type === perm.type,
  )
  return match?.[flag] ?? false
}

const toggleFlag = (perm: Permission, flag: keyof Permission) => {
  const index = editedRole.value.permissions.findIndex(
    (p) => p.name === perm.name && p.type === perm.type,
  )

  if (index !== -1) {
    const current = editedRole.value.permissions[index]
    editedRole.value.permissions.splice(index, 1, {
      ...current,
      [flag]: !current[flag],
    })
  } else {
    editedRole.value.permissions.push({
      ...perm,
      create: flag === 'create',
      read: flag === 'read',
      update: flag === 'update',
      delete: flag === 'delete',
    })
  }
}

const columns = [
  { title: '', dataIndex: 'name', key: 'name' },
  { title: 'Создание', key: 'create', dataIndex: 'create' },
  { title: 'Чтение', key: 'read', dataIndex: 'read' },
  { title: 'Обновление', key: 'update', dataIndex: 'update' },
  { title: 'Удаление', key: 'delete', dataIndex: 'delete' },
]
</script>

<template>
  <a-table :dataSource="permissions" :columns="columns" rowKey="id" :pagination="false" bordered>
    <template #bodyCell="{ column, record }">
      <template v-if="['create', 'read', 'update', 'delete'].includes(column.key)">
        <a-checkbox
          :checked="isFlagActive(record, column.key)"
          :disabled="disMode"
          @change="() => toggleFlag(record, column.key)"
        />
      </template>
    </template>
  </a-table>
</template>

<style scoped lang="scss">
:deep(.ant-table) {
  th,
  td {
    text-align: center;
  }

  td:first-child {
    text-align: left;
  }
}

:deep(.ant-table-content > table > thead > tr > th) {
  text-align: center;
}
</style>
