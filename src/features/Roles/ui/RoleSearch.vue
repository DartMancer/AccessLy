<script setup lang="ts">
import { ref, computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useRoleStore } from '@/entities/role'

const query = ref('')
const { roles } = storeToRefs(useRoleStore())

const filteredRoles = computed(() =>
  roles.value.filter((r) => r.name.toLowerCase().includes(query.value.toLowerCase())),
)

roles.value = filteredRoles.value
</script>

<template>
  <input v-model="query" placeholder="Поиск по ролям..." />
</template>
