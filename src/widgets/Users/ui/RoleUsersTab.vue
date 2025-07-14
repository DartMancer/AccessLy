<script lang="ts" setup>
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useRoleEditStore } from '@/entities/role'
import { useUserStore } from '@/entities/user'
import { AddRoleUserModal } from '@/features/Modals'

const { users } = storeToRefs(useUserStore())
const { editedRole } = storeToRefs(useRoleEditStore())

const { removeUserRole } = useRoleEditStore()

defineProps<{ disMode?: boolean }>()

const modalVisible = ref<boolean>(false)
</script>

<template>
  <div>
    <a-button v-if="!disMode" type="primary" @click="modalVisible = true">
      Добавить пользователя
    </a-button>

    <a-list
      :data-source="editedRole.users"
      bordered
      style="margin-top: 20px"
      item-layout="horizontal"
    >
      <template #renderItem="{ item: userId }">
        <a-list-item>
          <a-list-item-meta
            :title="users.find((u) => u.id === userId)?.fullname"
            :description="users.find((u) => u.id === userId)?.email"
          />
          <template #actions>
            <a-button v-if="!disMode" type="link" danger @click="removeUserRole(userId)">
              Удалить
            </a-button>
          </template>
        </a-list-item>
      </template>
    </a-list>

    <AddRoleUserModal v-model:modalVisible="modalVisible" />
  </div>
</template>
