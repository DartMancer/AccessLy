import { ref, type Ref } from 'vue'
import { v4 as uuidv4 } from 'uuid'
import { useRouter } from 'vue-router'
import { useRoleStore, type Role } from '@/entities/role'
import type { RoleFormState } from './RoleFormState'

export const useRoleForm = (modalVisible: Ref<boolean>) => {
  const { addRole } = useRoleStore()
  const router = useRouter()

  const formState = ref<RoleFormState>({ name: '', description: '' })

  const onFinish = () => {
    const state = formState.value
    const newRole: Role = {
      id: uuidv4(),
      name: state.name,
      description: state.description,
      permissions: [],
      users: [],
    }

    addRole(newRole)
    modalVisible.value = false
  }

  return { formState, onFinish }
}
