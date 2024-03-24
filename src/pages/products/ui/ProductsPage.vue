<script setup lang="ts">
import OskButton from '@shared/ui/button';
import { ref } from 'vue';
import OskRangePicker from '@shared/ui/rangePicker';
const text = ref('Hello world')
const classes = ref('bg-blue-500')
const range = ref()
</script>

<template>
  <h1>Products Page</h1>
  <osk-button  :class-container="classes" :label="text" jopa="text">
    <template #icon="slotProps">
      {{slotProps.icon}}
    </template>
  </osk-button>

  <osk-range-picker v-model="range"/>
</template>

<style scoped>

</style>