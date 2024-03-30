import { computed, ref } from 'vue';
import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', () => {
  const titleHeader = ref<null | string>(null)
  const getTitleHeader = computed(() => titleHeader.value)
  const changeTitleHeader = (name: string | null) => {
    titleHeader.value = name;
  }

  return { titleHeader, getTitleHeader, changeTitleHeader }
})