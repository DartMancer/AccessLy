import type { Permission } from '../types/Role'

export const mockPermissions: Permission[] = [
  {
    id: 'perm-1',
    entity: 'Клиенты',
    flags: { create: true, read: true, update: false, delete: false },
  },
  {
    id: 'perm-2',
    entity: 'Задачи',
    flags: { create: true, read: true, update: true, delete: true },
  },
  {
    id: 'perm-3',
    entity: 'Пользователи',
    flags: { create: false, read: true, update: false, delete: false },
  },
]
