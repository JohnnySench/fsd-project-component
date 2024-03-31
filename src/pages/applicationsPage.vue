<script setup lang="ts">
import Button from 'primevue/button'
import { useRouter } from 'vue-router';
import { storeToRefs } from 'pinia';
import { useApplicationStore } from '@/widgets/checkApplicationStore.ts';


const { data } = storeToRefs(useApplicationStore());

const router = useRouter()
const createApp = () => {
  router.push({
    name: 'create-application',
    query: {
      step: 1
    }
  })
}

const handlerClick = (i: number) => {
  router.push({
    name: 'edit-application',
    params: {
      id: i,
    }
  })
}

</script>

<template>
  <RouterView v-slot="{Component, route}">
    <div v-if="route.meta.parent" class="grid grid-cols-1 relative">
      <div v-if="data?.length" class="grid grid-cols-1 gap-4">
        <template v-for="(item, i) in data" :key="item.text">
          <div @click="handlerClick(i)" class="application border p-4 grid grid-cols-1 gap-2 cursor-pointer">
            <div>{{item.text}}</div>
            <div>{{item.date}}</div>
          </div>
        </template>
      </div>
      <Button label="Создать заявку" @click="createApp" class="btn w-40 h-8 top-1/2"/>
    </div>
    <component :is="Component" />
  </RouterView>
</template>

<style scoped>
  .btn { @apply absolute}
</style>