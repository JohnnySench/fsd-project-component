<script setup lang="ts">
import Button from 'primevue/button';
import { useRouter } from 'vue-router';
import { onMounted } from 'vue';

const router = useRouter();
const goToPath = (link: string) => {
  router.push({
    name: link
  });
};
const goToEdit = (i: number) => {
  if (i > 0) {
    router.push({
      name: 'editSport',
      params: {
        id: i
      }
    });
  }
};
onMounted(() => {
  console.log('SPORT PAGE MAIN');
});
</script>

<template>
  <RouterView v-slot="{Component, route}">
    <div v-if="route.meta.parent">
      <template v-for="(item, i) in 10" :key="item">
        <p class="cursor-pointer" @click="goToEdit(i)">Тут контект всех спортов</p>
      </template>
      <Button @click="goToPath('addSport')">Добавить спорт</Button>
    </div>
    <component :is="Component" />
  </RouterView>
</template>

<style scoped>

</style>