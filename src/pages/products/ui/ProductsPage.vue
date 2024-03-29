<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { getAll } from '@shared/api/products';
import ProductsLayout from '@shared/ui/layouts/ProductsLayout.vue';
import OskButton from '@shared/ui/button';
import OskRangePicker from '@shared/ui/rangePicker';

const allProducts = ref();
const range = ref();
onMounted(async () => {
  console.log('products page');
  await getAll('').then((response) => allProducts.value = response.data);
});
</script>

<template>
  <ProductsLayout>
    <h1>Products Page</h1>
    <div class="grid grid-cols-4 gap-10">
      <template v-for="product in allProducts" :key="product.id">
        <div class="border">
          <img class="h-44 w-40 block mx-auto" :src="product.image" :alt="product.title">
          <router-link :to="{name: 'ProductPage', params: {productId: product.id}}">Review</router-link>
        </div>
      </template>
    </div>
    <osk-button>
      <template #default>Hello</template>
      <template #icon>
        <div>@@@</div>
      </template>
    </osk-button>
    <osk-range-picker v-model="range"/>
    <router-view />
  </ProductsLayout>
</template>

<style scoped>

</style>