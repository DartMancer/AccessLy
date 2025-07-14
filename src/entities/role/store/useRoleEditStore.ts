import { computed, ref } from 'vue'
import { isEqual } from 'lodash'
import { defineStore } from 'pinia'
import { defaultRoleEdit } from '@/shared/constants'
import type { Permission, Role } from '../types/Role'
import { useRoleStore } from '..'
import type { User } from '@/entities/user'

export const useRoleEditStore = defineStore('roleEdit', () => {
  const editedRole = ref<Role>({ ...defaultRoleEdit })
  const initialRole = ref<Role>({ ...defaultRoleEdit })

  const activeTab = ref<'permissions' | 'users'>('permissions')
  const isEditing = ref<boolean>(false)

  const isChanged = computed(() => {
    const permsChanged = !isEqual(
      normalizePermissions(editedRole.value.permissions),
      normalizePermissions(initialRole.value.permissions),
    )

    const usersChanged = !isEqual(
      [...editedRole.value.users].sort(),
      [...initialRole.value.users].sort(),
    )

    return permsChanged || usersChanged
  })

  const initRole = (role: Role) => {
    initialRole.value = JSON.parse(JSON.stringify(role))
    editedRole.value = JSON.parse(JSON.stringify(role))
  }

  const addUserRole = (userId: string) => {
    if (!editedRole.value.users.includes(userId)) {
      editedRole.value.users = [...editedRole.value.users, userId]
    }
  }

  const removeUserRole = (userId: string) => {
    editedRole.value.users = editedRole.value.users.filter((id) => id !== userId)
  }

  const toggleMode = () => (isEditing.value = !isEditing.value)

  const togglePermission = (name: string, key: keyof Omit<Permission, 'id' | 'name' | 'type'>) => {
    const perm = editedRole.value.permissions.find((p) => p.name === name)
    if (perm) perm[key] = !perm[key]
  }

  const resetChanges = () => {
    editedRole.value = { ...initialRole.value }

    toggleMode()
  }

  const onFinish = () => {
    const { updateRole } = useRoleStore()

    updateRole(editedRole.value)
    initialRole.value = JSON.parse(JSON.stringify(editedRole.value))

    toggleMode()
  }

  const normalizePermissions = (list: Permission[]) => {
    return list
      .filter((p) => p.create || p.read || p.update || p.delete)
      .sort((a, b) => (a.name + a.type).localeCompare(b.name + b.type))
  }

  return {
    editedRole,
    activeTab,
    isEditing,
    isChanged,
    initRole,
    addUserRole,
    removeUserRole,
    toggleMode,
    togglePermission,
    resetChanges,
    onFinish,
  }
})
