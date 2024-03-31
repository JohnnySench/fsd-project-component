<script setup lang="ts">
import { useRouter } from 'vue-router';
import Button from 'primevue/button'
const router = useRouter();
const handlerClick = () => {
  router.push({
    name: 'schedule'
  })
}
</script>

<template>
  <h1 class="font-bold">Заявка принята ШАГ 3</h1>
  <Button label="Перейти в расписание" @click="handlerClick"/>
</template>

<style scoped>

</style>