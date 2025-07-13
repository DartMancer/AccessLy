<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { useRoleStore } from '@/entities/role/store'
import { RoleSearch, CreateRoleTrigger } from '@/features/Roles'
import { RoleCard } from '@/widgets/Roles'

const { roles } = storeToRefs(useRoleStore())
</script>

<template>
  <div class="roles-list-page">
    <div class="roles-list-page__header">
      <RoleSearch />
      <CreateRoleTrigger />
    </div>

    <div class="roles-list-page__list">
      <RoleCard v-for="role in roles" :key="role.id" :role="role" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.roles-list-page {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__list {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
}
</style>
