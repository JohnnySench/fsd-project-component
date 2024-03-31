import { ref } from 'vue';
import { defineStore } from 'pinia';

interface ICheck {
  text: string,
  date: Date | null | string,
  gender: string,
  type: string,
}



export const useApplicationStore = defineStore('application', () => {
  let data = ref<ICheck[] | null>(null);
  const saveData = (payload: ICheck[]) => {
    data.value = payload;
  };

  return { saveData, data };
});