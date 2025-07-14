import { computed, ref } from 'vue'
import { isEqual } from 'lodash'
import { defineStore } from 'pinia'
import { defaultRoleEdit } from '@/shared/constants'
import type { Permission, Role } from '../types/Role'
import { useRoleStore } from '..'

export const useRoleEditStore = defineStore('roleEdit', () => {
  // Черновик редактируемой роли — используется для отображения и изменения
  const editedRole = ref<Role>({ ...defaultRoleEdit })

  // Оригинальное значение роли — нужно для сравнения изменений
  const initialRole = ref<Role>({ ...defaultRoleEdit })

  // Активная вкладка (permissions / users)
  const activeTab = ref<'permissions' | 'users'>('permissions')

  // Режим редактирования (используется для UI-контроля)
  const isEditing = ref<boolean>(false)

  const isChanged = computed(() => {
    // Проверка, изменялась ли роль
    const permsChanged = !isEqual(
      normalizePermissions(editedRole.value.permissions),
      normalizePermissions(initialRole.value.permissions),
    )

    // Проверяем, изменились ли пользователи (сравниваем отсортированные id)
    const usersChanged = !isEqual(
      [...editedRole.value.users].sort(),
      [...initialRole.value.users].sort(),
    )

    return permsChanged || usersChanged
  })

  // Установка роли в черновик + создание копии как "оригинал"
  const initRole = (role: Role) => {
    initialRole.value = JSON.parse(JSON.stringify(role))
    editedRole.value = JSON.parse(JSON.stringify(role))
  }

  // Добавление пользователя в роль
  const addUserRole = (userId: string) => {
    if (!editedRole.value.users.includes(userId)) {
      editedRole.value.users = [...editedRole.value.users, userId]
    }
  }

  // Удалить пользователя из роли
  const removeUserRole = (userId: string) => {
    editedRole.value.users = editedRole.value.users.filter((id) => id !== userId)
  }

  // Включение/выключение режима редактирования
  const toggleMode = () => (isEditing.value = !isEditing.value)

  // Переключение флага разрешения (например, create/read/update/delete)
  const togglePermission = (name: string, key: keyof Omit<Permission, 'id' | 'name' | 'type'>) => {
    const perm = editedRole.value.permissions.find((p) => p.name === name)
    if (perm) perm[key] = !perm[key]
  }

  // Сбросить все изменения до исходного состояния
  const resetChanges = () => {
    editedRole.value = { ...initialRole.value }
    toggleMode()
  }

  // Завершение редактирования и сохранение роли
  const onFinish = () => {
    const { updateRole } = useRoleStore()

    updateRole(editedRole.value)
    initialRole.value = JSON.parse(JSON.stringify(editedRole.value))
    toggleMode()
  }

  // Удаляем неактивные разрешения + сортируем для корректного сравнения
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
