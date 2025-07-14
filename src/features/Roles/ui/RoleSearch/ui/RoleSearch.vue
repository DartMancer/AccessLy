<script setup lang="ts">
const value = defineModel<string>('value', { required: true })
</script>

<template>
  <a-input class="input" v-model:value="value" placeholder="Поиск по ролям..." />
</template>

<style lang="scss" scoped>
.input {
  width: 30%;
  padding: 14px 10px;
  border: 1px solid rgba($color: #000000, $alpha: 0.3);
  border-radius: 14px;

  &::placeholder {
    color: rgba($color: #000000, $alpha: 0.3);
  }
}
</style>
