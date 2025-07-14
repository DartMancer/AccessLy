export interface Role {
  id: string
  name: string
  description?: string
  permissions: Permission[]
  users: string[]
}

export interface Permission {
  id: string
  name: string
  type: string
  create: boolean
  read: boolean
  update: boolean
  delete: boolean
}
