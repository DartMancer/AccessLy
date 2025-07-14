<script lang="ts" setup>
import { RolePermissionsTab } from '@/widgets/Permissions'
import { RoleUsersTab } from '@/widgets/Users'

const activeTab = defineModel<string>('modelValue', { required: true })
</script>

<template>
  <a-tabs class="tabs" v-model:activeKey="activeTab">
    <a-tab-pane key="permissions" tab="Доступы">
      <RolePermissionsTab />
    </a-tab-pane>
    <a-tab-pane key="users" tab="Пользователи" force-render>
      <RoleUsersTab />
    </a-tab-pane>
  </a-tabs>
</template>

<style lang="scss" scoped>
.tabs {
  width: 100%;
}
</style>
