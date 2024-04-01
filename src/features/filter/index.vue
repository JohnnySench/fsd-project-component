<script setup lang="ts">
import Button from 'primevue/button';
import { ref } from 'vue';

interface IProps {
  vertical: boolean,
}

interface ISelectedFilter {
  label: string,
  id: number,
  icon: string,
}

defineProps<IProps>();
const filters = [
  { label: 'Все', id: 1, icon: '' },
  { label: 'Футбол', id: 10, icon: '' },
  { label: 'Теннис', id: 11, icon: '' },
  { label: 'Шахматы', id: 12, icon: '' },
  { label: 'Бирпонг', id: 13, icon: '' },
  { label: 'Литрбол', id: 14, icon: '' },
  { label: 'Баскетбол', id: 15, icon: '' },
];
const selectedFilter = ref<ISelectedFilter>(filters[0]);

const selectFilter = (index: number) => {
  selectedFilter.value= filters.find((_, i) => index === i) as ISelectedFilter;
};
</script>

<template>
  <div class="custom-filter-container flex gap-2"
       :class="vertical ? 'flex-wrap' : 'overflow-y-auto'"
  >
    <div v-for="(item, index) in filters" :key="index">
      <Button
        @click="selectFilter(index)"
        :class="[selectedFilter && selectedFilter.id === item.id ? 'bg-red-500': '' ]"
        :text="selectedFilter && selectedFilter.id !== item.id"
        :label="item.label"
        class="h-10 rounded-none outlined-none ring-none hover:bg-blue-800" />
    </div>
  </div>
</template>

<style scoped lang="postcss">
.custom-filter-container {
  max-width: 344px;
}

.custom-filter-container::-webkit-scrollbar {
  display: none;
}
</style>