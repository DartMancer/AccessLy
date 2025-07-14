import { ref, type Ref } from 'vue'
import { v4 as uuidv4 } from 'uuid'
import { useUserStore } from '@/entities/user'
import type { User } from '@/entities/user'
import type { UserFormState } from './UserFormState'

export const useUserForm = (modalVisible: Ref<boolean>) => {
  const { addUser } = useUserStore()

  const formState = ref<UserFormState>({ fullName: '', email: '' })

  const onFinish = () => {
    const state = formState.value
    const newUser: User = {
      id: uuidv4(),
      fullname: state.fullName,
      email: state.email,
    }

    addUser(newUser)
    modalVisible.value = false
  }

  return { formState, onFinish }
}
