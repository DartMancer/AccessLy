<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { usePermissionsStore } from '@/entities/role'
import { AddPermissionTrigger } from '@/features/Roles'
import { PermissionCard } from '@/widgets/Permissions'

const { permissions } = storeToRefs(usePermissionsStore())
</script>

<template>
  <a-flex class="permissions-page" vertical gap="20">
    <div class="permissions-page__header">
      <span class="title">Права доступа</span>
      <AddPermissionTrigger />
    </div>

    <div class="roles-list-page__list">
      <PermissionCard v-for="permission in permissions" :permission />
    </div>
  </a-flex>
</template>

<style lang="scss" scoped>
.permissions-page {
  width: 100%;

  .title {
    font-size: 30px;
    margin-left: 16px;
  }

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .base-container {
    width: 100%;
  }
}
</style>
