<script setup lang="ts">
import { onMounted } from 'vue';

onMounted(() => {
  console.log('slot');
})
</script>

<template>
  <div class="products-layout">
    <slot />
  </div>
</template>

<style scoped lang="postcss">
.products-layout {
  width: 1080px;
  margin: 0 auto;
}
</style>