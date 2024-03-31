<script setup lang="ts">
import { useApplicationStore } from '@/widgets/checkApplicationStore.ts';
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';
import Button from 'primevue/button'
import { ApplicationCard } from '@/entities/application';

const { data } = storeToRefs(useApplicationStore());



const router = useRouter();
const handlerClick = () => {
  router.push({
    query: {
      step: 3
    }
  });
};
</script>

<template>
  <div class="flex flex-col">
    <h1 class="font-bold">Проверить данные заявки ШАГ 2</h1>
    <div v-if="data?.length" class="grid grid-cols-1 gap-4">
      <template v-for="(item, _) in data" :key="item.text" class="p-4 border rounded-md relative">
        <ApplicationCard
          :text="item.text"
          :type="item.type"
          :date="item.date"
          :gender="item.gender"
        />
      </template>
    </div>
    <Button label="Принять заявку" @click="handlerClick" />
  </div>
</template>

<style scoped>

</style>