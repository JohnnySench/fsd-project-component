<script setup lang="ts">
import { onMounted, ref, useAttrs } from 'vue';
import { getAll } from '@shared/api/products';


  const products = ref();
  onMounted(async() => {
    console.log(useAttrs().some);
    console.log('info page');
    await getAll('').then((response) => {
      products.value = response.data;
    });
    console.log(products.value);
  })
</script>

<template>
  <div>
    <h1 v-bind="$attrs">CATEGORY INFO PAGE!!!!!!</h1>
    <div v-for="product in products" :key="product.id">
      <img loading="lazy" :src="product.image"/>
    </div>
  </div>
</template>

<style scoped>

</style>