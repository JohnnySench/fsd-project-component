<script setup lang="ts">
import { useRoute } from 'vue-router';
import { onMounted, ref } from 'vue';
import { getSingleProduct } from '@shared/api/products';

const product = ref()
const route = useRoute();
const productId = Number(route.params.productId);

onMounted(async () => {
  product.value = await getSingleProduct(productId);
  console.log(product.value);
})
</script>

<template>
  <h1>Product one PAGE</h1>
  <div>{{product}}</div>
</template>

<style scoped>

</style>