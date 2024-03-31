<script setup lang="ts">
interface IProps {
  index: number,
}
defineProps<IProps>()

const text = defineModel('text')
const date = defineModel('date')
const type = defineModel('type')
const gender = defineModel('gender')


</script>

<template>
  <div class="border border-b-blue-950 rounded-md mb-4 p-4">
    <div class="flex flex-row gap-2">
      <input placeholder="Name" v-model="text" class="border" />
      <input placeholder="Date" v-model="date" type="date" class="border" />
      <input placeholder="Type of sport" v-model="type" type="text" class="border" />
      <input placeholder="Gender" v-model="gender" type="text" class="border" />
      <span class="ml-2 cursor-pointer" @click="$emit('deleteUser', index)">X</span>
    </div>
  </div>
</template>

<style scoped>

</style>