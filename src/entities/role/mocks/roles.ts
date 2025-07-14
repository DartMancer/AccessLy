import type { Role } from '../types/Role'

export const mockRoles: Role[] = [
  {
    id: 'role-1',
    name: 'Администратор',
    description: 'Полный доступ ко всем разделам',
    permissions: [],
    users: ['user-1'],
  },
  {
    id: 'role-2',
    name: 'Менеджер',
    description: 'Доступ к клиентам и задачам',
    permissions: [],
    users: ['user-2', 'user-3'],
  },
]
