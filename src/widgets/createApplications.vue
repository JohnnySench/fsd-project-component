<script setup lang="ts">
import { useRouter } from 'vue-router';
import Button from 'primevue/button';
import { onMounted, ref } from 'vue';
import { useApplicationStore } from '@/widgets/checkApplicationStore.ts';
import { storeToRefs } from 'pinia';

const { saveData } = useApplicationStore();
const { data } = storeToRefs(useApplicationStore());

onMounted(() => {
  if (data.value && data.value?.length > 0) {
    users.value = data.value;
  }
});

interface IUser {
  text: string,
  date: Date | null,
  gender: string,
  type: string,
}

const users = ref<IUser[]>([
  { text: '', date: null, gender: '', type: '' },
  { text: '', date: null, gender: '', type: ''  }
]);

const addUser = () => {
  const user = {
    text: '',
    date: null,
    gender: '',
    type: '',
  };
  users.value.push(user);
};

const deleteUser = (index: number) => {
  users.value.splice(index, 1);
};

const router = useRouter();
const goToStepTwo = () => {


  saveData(users.value);
  router.push({
    query: {
      step: 2
    }
  });

};

</script>

<template>
  <div class="grid grid-cols-1 gap-4">
    <h1 class="font-bold">Создание заявки ШАГ 1</h1>

    <div class="grid grid-cols-1">
      <div v-for="(user, index) in users" :key="index" class="border border-b-blue-950 rounded-md mb-4 p-4">
        <div class="flex flex-row gap-2">
          <input placeholder="Name" v-model="user.text" class="border" />
          <input placeholder="Date" v-model="user.date" type="date" class="border" />
          <input placeholder="Type of sport" v-model="user.type" type="text" class="border" />
          <input placeholder="Gender" v-model="user.gender" type="text" class="border" />
          <span class="ml-2 cursor-pointer" @click="deleteUser(index)">X</span>
        </div>
      </div>
    </div>
    <Button label="Добавить участника" @click="addUser" />
    <Button label="Продолжить" @click="goToStepTwo" />
  </div>
</template>

<style scoped>

</style>