<script setup lang="ts">
const guides = [
  {pathName: 'enterprises', label: 'Справочник предприятий'},
  {pathName: 'sports', label: 'Справочник спорта'},
]
</script>

<template>
  <div class="grid grid-cols-1 gap-10 bg-white w-40 h-full border border-blue-900">
    <div class="text-base font-bold">Справочник</div>
    <template v-for="(item, _) in guides" :key="item.pathName">
      <router-link :to="{name: item.pathName}">{{item.label}}</router-link>
    </template>
  </div>

</template>

<style scoped>

</style>