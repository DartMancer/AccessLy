<script lang="ts" setup>
import { computed } from 'vue'
import { Checkbox } from 'ant-design-vue'
import { useRoleEditStore, type Permission } from '@/entities/role'
import { storeToRefs } from 'pinia'

const { editedRole } = storeToRefs(useRoleEditStore())
const { togglePermission } = useRoleEditStore()

const grouped = computed(() => {
  const result: Record<string, Permission[]> = {}
  editedRole.value.permissions.forEach((p) => {
    if (!result[p.type]) result[p.type] = []
    result[p.type].push(p)
  })
  return result
})

const toggle = (perm: Permission, key: 'create' | 'read' | 'update' | 'delete') => {
  togglePermission(perm.name, key)
}
</script>

<template>
  <div class="permissions-table">
    <div v-for="(items, group) in grouped" :key="group" class="group">
      <div class="group-title">{{ group }}</div>
      <div v-for="perm in items" :key="perm.id" class="row">
        <div class="name">{{ perm.name }}</div>
        <div class="actions">
          <Checkbox :checked="perm.create" @change="() => toggle(perm, 'create')">C</Checkbox>
          <Checkbox :checked="perm.read" @change="() => toggle(perm, 'read')">R</Checkbox>
          <Checkbox :checked="perm.update" @change="() => toggle(perm, 'update')">U</Checkbox>
          <Checkbox :checked="perm.delete" @change="() => toggle(perm, 'delete')">D</Checkbox>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.permissions-table {
  .group {
    margin-bottom: 16px;
    .group-title {
      font-weight: bold;
      margin-bottom: 8px;
    }

    .row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 4px;

      .name {
        flex: 1;
      }

      .actions {
        display: flex;
        gap: 8px;
      }
    }
  }
}
</style>
