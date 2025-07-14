<script lang="ts" setup>
const value = defineModel<string | undefined>('value', { required: true })

defineProps<{
  name: string | string[]
  placeholder: string
  label?: string | null
  rules?: any
}>()
</script>

<template>
  <a-flex class="input-section" vertical>
    <a-form-item :name :label :rules>
      <a-input v-model:value="value" :placeholder allow-clear />
    </a-form-item>
  </a-flex>
</template>

<style lang="scss" scoped>
.input-section {
  width: 100% !important;
}
</style>
