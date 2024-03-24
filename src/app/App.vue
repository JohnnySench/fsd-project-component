<script setup lang="ts">
import { getAll } from '@shared/api/products';
import { onMounted, ref } from 'vue';

const shoes = ref()
onMounted(async () => {
  shoes.value = await getAll('')
  console.log(shoes.value.data);
})
</script>

<template>
  <router-view />
</template>

<style scoped>

</style>
