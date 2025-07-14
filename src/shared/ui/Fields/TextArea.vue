<script lang="ts" setup>
const value = defineModel<string | undefined>('value', { required: true })

defineProps<{
  name: string | string[]
  placeholder: string
  label?: string
  rules?: any
  min?: number
  max?: number
}>()
</script>

<template>
  <a-flex class="input-section" vertical>
    <a-form-item :name :label :rules>
      <a-textarea
        v-model:value="value"
        :placeholder="placeholder"
        :autoSize="{ minRows: min ?? 1, maxRows: max ?? 2 }"
        allow-clear
      />
    </a-form-item>
  </a-flex>
</template>

<style lang="scss" scoped>
.input-section {
  .title {
    font-size: 20px;
    color: var(--white-color);
  }

  .subtitle {
    font-size: 14px;
  }
}

@media (max-width: 1024px) {
  .input-section {
    .title {
      font-size: 18px;
    }

    .subtitle {
      font-size: 12px;
    }
  }
}

@media (max-width: 540px) {
  .input-section {
    .title {
      font-size: 14px;
    }

    .subtitle {
      font-size: 10px;
    }
  }
}
</style>
