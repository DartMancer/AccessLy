<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
const goToCreate = () => router.push('/roles/create')
</script>

<template>
  <a-button @click="goToCreate">Создать роль</a-button>
</template>
