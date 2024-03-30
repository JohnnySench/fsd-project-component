<script setup lang="ts">
import Button from 'primevue/button'
import { useRouter } from 'vue-router';


const router = useRouter()
const createApp = () => {
  router.push({
    name: 'create-application',
    query: {
      step: 1
    }
  })
}

</script>

<template>
  <RouterView v-slot="{Component, route}">
    <div v-if="route.meta.parent" class="grid grid-cols-1">
      <template v-for="(item, _) in 10" :key="item">
        <div>Тут заявка {{item}}</div>
      </template>
      <Button label="Создать заявку" @click="createApp"/>
    </div>
    <component :is="Component" />
  </RouterView>
</template>

<style scoped>

</style>