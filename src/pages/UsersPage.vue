<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { AddUserTrigger } from '@/features/Roles'
import { useUserStore } from '@/entities/user'
import { UserCard } from '@/widgets/Users'

const { users } = storeToRefs(useUserStore())
</script>

<template>
  <div class="users-list-page">
    <div class="users-list-page__header">
      <span class="title">Пользователи</span>
      <AddUserTrigger />
    </div>

    <div class="users-list-page__list">
      <UserCard v-for="user in users" :user="user" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.users-list-page {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;

  .title {
    font-size: 30px;
    margin-left: 16px;
  }

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
