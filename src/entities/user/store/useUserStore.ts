import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'
import { mockUsers } from '../mocks'
import type { User } from '../types'

export const useUserStore = defineStore('users', () => {
  const users = useStorage<User[]>('users', mockUsers)

  const addUser = (user: User) => {
    users.value = [...users.value, user]
  }

  const removeUser = (id: string) => {
    users.value = users.value.filter((u) => u.id !== id)
  }

  const updateUser = (user: User) => {
    const index = users.value.findIndex((u) => u.id === user.id)
    if (index !== -1) users.value[index] = user
  }

  const getUserById = (id: string) => {
    return users.value.find((u) => u.id === id)
  }

  return {
    users,
    addUser,
    removeUser,
    updateUser,
    getUserById,
  }
})
