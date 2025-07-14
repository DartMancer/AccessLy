<script lang="ts" setup>
import { useRoute } from 'vue-router'
import { BackButton } from '@/shared/ui/Buttons'
import { useRoleStore } from '@/entities/role'
import { RoleDetailBody, RoleNotFound } from '@/widgets/Roles'

const route = useRoute()
const id = route.params.id as string

const { getRoleById } = useRoleStore()
const role = getRoleById(id)
</script>

<template>
  <div class="role-details-page">
    <BackButton />
    <RoleDetailBody v-if="role" :role="role" />
    <RoleNotFound v-else />
  </div>
</template>

<style scoped lang="scss">
.role-details-page {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;
}
</style>
