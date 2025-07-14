<script lang="ts" setup>
import type { Permission } from '@/entities/role'

const props = defineProps<{ permission: Permission }>()

const emit = defineEmits<{ 'update:permission': [Permission] }>()

const toggle = (key: keyof Pick<Permission, 'create' | 'read' | 'update' | 'delete'>) => {
  emit('update:permission', {
    ...props.permission,
    [key]: !props.permission[key],
  })
}
</script>

<template>
  <div class="permission-item">
    <span class="title">{{ permission.name }}</span>
    <a-divider type="vertical" />
    <a-checkbox :checked="permission.create" @change="() => toggle('create')">Создание</a-checkbox>
    <a-checkbox :checked="permission.read" @change="() => toggle('read')">Чтение</a-checkbox>
    <a-checkbox :checked="permission.update" @change="() => toggle('update')">
      Обновление
    </a-checkbox>
    <a-checkbox :checked="permission.delete" @change="() => toggle('delete')">Удаление</a-checkbox>
  </div>
</template>

<style scoped lang="scss">
.permission-item {
  display: flex;
  align-items: center;
  gap: 30px;

  .title {
    min-width: 100px;
  }
}

:deep(.ant-divider) {
  border-inline-start-color: rgba($color: #000000, $alpha: 0.3);
}
</style>
