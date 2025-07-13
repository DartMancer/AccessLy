export type RightFlags = {
  create: boolean
  read: boolean
  update: boolean
  delete: boolean
}

export type Permission = {
  id: string
  entity: string
  flags: RightFlags
}

export type Role = {
  id: string
  name: string
  description?: string
  rights: Permission[]
  users: string[]
}
