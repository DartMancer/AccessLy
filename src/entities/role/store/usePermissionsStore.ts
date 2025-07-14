import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'
import type { Permission } from '../types'
import { mockPermissions } from '../mocks'

export const usePermissionsStore = defineStore('permissions', () => {
  // Основной список всех существующих в системе разрешений
  const permissions = useStorage<Permission[]>('permissions', mockPermissions)

  // Добавление нового разрешения
  const addPermission = (perm: Permission) => {
    permissions.value = [...permissions.value, perm]
  }

  // Удаление разрешения по id
  const removePermission = (id: string) => {
    permissions.value = permissions.value.filter((p) => p.id !== id)
  }

  // Обновление существующего разрешения
  const updatePermission = (updated: Permission) => {
    const idx = permissions.value.findIndex((p) => p.id === updated.id)
    if (idx !== -1) permissions.value[idx] = updated
  }

  return {
    permissions,
    addPermission,
    removePermission,
    updatePermission,
  }
})
