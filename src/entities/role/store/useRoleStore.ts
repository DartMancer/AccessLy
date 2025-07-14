import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'
import type { Role } from '../types/Role'
import { mockRoles } from '../mocks/roles'

export const useRoleStore = defineStore('roles', () => {
  const roles = useStorage<Role[]>('roles', mockRoles)

  const addRole = (role: Role) => {
    roles.value = [...roles.value, role]
  }

  const removeRole = (id: string) => {
    roles.value = roles.value.filter((r) => r.id !== id)
  }

  const updateRole = (role: Role) => {
    const index = roles.value.findIndex((r) => r.id === role.id)
    if (index !== -1) roles.value[index] = role
  }

  const getRoleById = (id: string) => {
    return roles.value.find((r) => r.id === id)
  }

  return {
    roles,
    addRole,
    removeRole,
    updateRole,
    getRoleById,
  }
})
