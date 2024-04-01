<script setup lang="ts">
import { OskSelectButton } from '@shared/ui/selectButton';
import SelectButton from 'primevue/selectbutton';
import { ref } from 'vue';
import OskInputSwitch from '@shared/ui/inputSwitch/OskInputSwitch.vue';
import {CustomFilter} from '@/features';

const options = [
  {label: '1', value: 1},
  {label: '2', value: 2},
]
const select = ref()
const switched = ref()
</script>

<template>
<!--  <h1>Test UI</h1>-->
<!--  <div>{{select}}</div>-->
<!--  <SelectButton v-model="select" :options="options" :option-label="'label'" :option-value="'value'"/>-->
<!--  <OskSelectButton v-model="select" :options="options" :option-label="'label'" :option-value="'value'">-->
<!--    <template #option>-->
<!--      <div>dasdasd</div>-->
<!--    </template>-->
<!--  </OskSelectButton>-->

<!--  <OskInputSwitch :v-model="switched"/>-->
  <CustomFilter :vertical="false"/>
</template>

<style scoped>

</style>