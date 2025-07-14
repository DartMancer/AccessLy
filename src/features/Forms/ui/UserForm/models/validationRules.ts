import type { Rule } from 'ant-design-vue/es/form'

export const rules: Record<string, Rule[]> = {
  fullName: [
    {
      required: true,
      trigger: ['change', 'blur'],
      message: 'Поле обязательно к заполнению',
    },
  ],
  email: [
    {
      required: true,
      trigger: ['change', 'blur'],
      message: 'Поле обязательно к заполнению',
    },
  ],
}
