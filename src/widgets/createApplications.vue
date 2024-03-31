<script setup lang="ts">
import { useRouter } from 'vue-router';
import Button from 'primevue/button';
import { onMounted, ref } from 'vue';
import { useApplicationStore } from '@/widgets/checkApplicationStore.ts';
import { storeToRefs } from 'pinia';
import { CreatApplicationFormCard } from '@/entities/createApplication';

const { saveData } = useApplicationStore();
const { data } = storeToRefs(useApplicationStore());

onMounted(() => {
  if (data.value && data.value?.length > 0) {
    users.value = data.value;
  }
});

interface IUser {
  text: string,
  date: Date | null | string,
  gender: string,
  type: string,
}

const users = ref<IUser[]>([
  { text: '', date: null, gender: '', type: '' },
  { text: '', date: null, gender: '', type: '' }
]);

const addUser = () => {
  const user = {
    text: '',
    date: '',
    gender: '',
    type: ''
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
        <CreatApplicationFormCard
          v-model:text="user.text"
          v-model:date="user.date"
          v-model:type="user.type"
          v-model:gender="user.gender"
          :index="index"
          @delete-user="deleteUser"
        />
      </div>
    </div>
    <Button label="Добавить участника" @click="addUser" />
    <Button label="Продолжить" @click="goToStepTwo" />
  </div>
</template>

<style scoped>

</style>