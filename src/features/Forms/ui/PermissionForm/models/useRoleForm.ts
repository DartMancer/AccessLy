import { ref, type Ref } from 'vue'
import { v4 as uuidv4 } from 'uuid'
import { usePermissionsStore, type Permission } from '@/entities/role'
import type { PermissionFormState } from './PermissionFormState'

export const useRoleForm = (modalVisible: Ref<boolean>) => {
  const { addPermission } = usePermissionsStore()

  const formState = ref<PermissionFormState>({ name: '', type: '' })

  const onFinish = () => {
    const state = formState.value
    const newPermission: Permission = {
      id: uuidv4(),
      name: state.name,
      type: state.type,
      create: false,
      read: false,
      update: false,
      delete: false,
    }

    addPermission(newPermission)
    modalVisible.value = false
  }

  return { formState, onFinish }
}
