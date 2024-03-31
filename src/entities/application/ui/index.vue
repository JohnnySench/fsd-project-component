<script setup lang="ts">
import { shallowRef } from 'vue';
interface IUser {
  text: string,
  date: string | null,
  gender: string,
  type: string,
}
defineProps<IUser>()
const visible = shallowRef(false);
const toggleVisible = () => {
  visible.value = !visible.value;
};
</script>

<template>
  <div class="user-card">
    <div class="p-4 border rounded-md relative">
      <div class="flex flex-col gap-4">
        <span @click="toggleVisible" class="cursor-pointer absolute top-1/3 right-0">></span>
        <div>Текст - {{ text }}</div>
        <div>Дата - {{ date }}</div>
        <div v-if="visible">
          <div>Тип спорта - {{ type }}</div>
          <div>Пол - {{ gender }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>