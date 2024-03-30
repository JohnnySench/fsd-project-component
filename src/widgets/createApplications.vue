<script setup lang="ts">
import { useRouter } from 'vue-router';
import Button from 'primevue/button'

const router = useRouter();
  const goToStepTwo = () => {
    router.push({
      query: {
        step: 2,
      }
    })
  }
</script>

<template>
<h1 class="font-bold">Создание заявки ШАГ 1</h1>
  <Button label="К шагу 2" @click="goToStepTwo"/>
</template>

<style scoped>

</style>