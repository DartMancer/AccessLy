import type { Permission } from '../types/Role'

export const mockPermissions: Permission[] = [
  {
    id: '1',
    name: 'Курсы',
    type: 'lms',
    create: true,
    read: true,
    update: true,
    delete: false,
  },
  {
    id: '2',
    name: 'Модули',
    type: 'lms',
    create: true,
    read: true,
    update: true,
    delete: false,
  },
  {
    id: '3',
    name: 'Уроки',
    type: 'lms',
    create: true,
    read: true,
    update: true,
    delete: false,
  },
  {
    id: '4',
    name: 'Папки',
    type: 'coi',
    create: false,
    read: true,
    update: false,
    delete: false,
  },
  {
    id: '5',
    name: 'Дашборды',
    type: 'system',
    create: false,
    read: true,
    update: false,
    delete: false,
  },
]
