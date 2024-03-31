<script setup lang="ts">
import { useRoute } from 'vue-router';
import { computed, defineAsyncComponent, onMounted, watch } from 'vue';
import { useChangeTitleHeader } from '@/shared/lib/meta/index.ts';


const route = useRoute();
const isCurrentStep = computed(() => {
  return Number(route.query.step);
});

onMounted(() => {
  setHeader(isCurrentStep.value);
});

const isCurrentComponent = computed({
  get: () => {
    switch (isCurrentStep.value) {
      case 1:
        return defineAsyncComponent({
          loader: () => import('@/widgets/createApplications.vue'),
        });
      case 2:
        return defineAsyncComponent(step2);
      case 3:
        return defineAsyncComponent(step3);
      default:
        return defineAsyncComponent(step2);
    }
  },
  set: () => {

  }
});

watch(isCurrentStep, (newStep) => {
  setHeader(newStep);
});

const setHeader = (newStep: number) => {
  const header = headerContentByStep.find(({ step }) => step === newStep);
  useChangeTitleHeader(header?.headerTitle as string);
};

//TODO сделать enums
const headerContentByStep = [
  { headerTitle: 'Создать заявку', step: 1 },
  { headerTitle: 'Проверить данные', step: 2 },
  { headerTitle: 'Заявка принята', step: 3 }
];



// const step1 = () => import('@/widgets/createApplications.vue', {});
const step2 = () => import('@/widgets/checkApplicationData.vue');
const step3 = () => import('@/widgets/confirmApplication.vue');
</script>

<template>
  <keep-alive>
    <component :is="isCurrentComponent" />
  </keep-alive>

</template>

<style scoped>

</style>