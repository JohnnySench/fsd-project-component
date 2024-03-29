<script setup lang="ts">
const items = [
  {namePath: 'schedule', label: 'Расписание'},
  {namePath: 'results', label: 'Результаты'},
  {namePath: 'applications', label: 'Результаты'},
]
</script>

<template>
  <div class="w-full h-20 bg-blue-300">
    <div class="grid grid-cols-3">
      <template v-for="(item, _) in items" :key="item.namePath">
        <RouterLink :to="{name: item.namePath}">{{item.label}}</RouterLink>
      </template>
    </div>
  </div>
</template>

<style scoped>

</style>