<script setup lang="ts">
import { onMounted } from 'vue';

onMounted(() => {
  console.log('MAIN');
});
defineOptions({
  inheritAttrs: false
});
</script>

<template>
  <h1>Category Page</h1>
  <div class="flex flex-row gap-4 text-5xl">
    <router-link :to="{name: 'CategoryInfoPage'}">CategoryInfoPage</router-link>
    <router-link :to="{name: 'CategoryProfilePage'}">CategoryProfilePage</router-link>
  </div>
  <router-view v-slot="{ Component}">
    <transition name="fade">
      <component :is="Component" some="a value" />
    </transition>
  </router-view>
</template>

<style scoped>

</style>