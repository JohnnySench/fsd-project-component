<script setup lang="ts">
import { computed } from 'vue';

interface IProps {
  currentRoute: any;
}

import { useCounterStore } from '@/widgets/headerStore.ts';
import { storeToRefs } from 'pinia';

const { titleHeader } = storeToRefs(useCounterStore());
const isCurrentTitleHeader = computed(() => {
  return titleHeader.value;
});



defineProps<IProps>();
</script>

<template>
  <div v-if="!currentRoute.meta.parent" @click="$router.go(-1)">GoBack</div>
  <div class="border-2 border-blue-900 h-20 w-full text-5xl">Шапка {{ isCurrentTitleHeader }}</div>
</template>

<style scoped>

</style>