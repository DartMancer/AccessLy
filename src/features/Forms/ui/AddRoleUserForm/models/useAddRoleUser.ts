import { computed, ref, type Ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useRoleEditStore } from '@/entities/role'
import { useUserStore } from '@/entities/user'
import type { AddRoleUserFormState } from './AddRoleUserFormState'

export const useAddRoleUser = (modalVisible: Ref<boolean>) => {
  const { users } = storeToRefs(useUserStore())
  const { editedRole } = storeToRefs(useRoleEditStore())
  const { addUserRole } = useRoleEditStore()

  const formState = ref<AddRoleUserFormState>({ userIds: [] })

  const availableUsers = computed(() =>
    users.value.filter((u) => !editedRole.value.users.includes(u.id)),
  )

  const onFinish = () => {
    const state = formState.value
    state.userIds.forEach((id) => addUserRole(id))

    modalVisible.value = false
  }

  return { formState, availableUsers, onFinish }
}
