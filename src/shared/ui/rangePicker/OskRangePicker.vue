<script setup lang="ts">
import PrimeSlider, {SliderProps} from "primevue/slider"
import OskRangePickerTheme from './OskRangePicker.theme.ts';
import {IOskRangePickerProps} from './OskRangePicker.types.ts'
import { computed, useAttrs } from 'vue';
import {usePassThrough} from "primevue/passthrough";

defineOptions({
  name: 'OskRangePicker',
  inheritAttrs: false,
});
const props = withDefaults(defineProps<IOskRangePickerProps>(), {
  min: 0,
  max: 100,
});
const attrs = useAttrs() as SliderProps;
const theme = usePassThrough(
  {
    rangePicker: OskRangePickerTheme,
  },
  {
    rangePicker: attrs.pt,
  },
  {
    ...attrs.ptOptions,
  },
);
const modelValue = defineModel<{ min: number, max: number }>({ default: (p: IOskRangePickerProps) => ({ min: p.min, max: p.max }) });
const inputValue = computed({
  get: () => {
    const minValue = Math.min(modelValue.value.min, modelValue.value.max);
    const maxValue = Math.max(modelValue.value.min, modelValue.value.max);
    return [
      minValue < props.min ? props.min : minValue,
      maxValue > props.max ? props.max : maxValue,
    ];
  },
  set: (value) => {
    const minValue = Math.min(...value);
    const maxValue = Math.max(...value);
    modelValue.value = {
      min: minValue < props.min ? props.min : minValue,
      max: maxValue > props.max ? props.max : maxValue,
    };
  },
});
const minValue = computed({
  get: () => {
    return modelValue.value.min;
  },
  set: (value) => {
    modelValue.value = {...modelValue.value, min: value};
  },
});

const maxValue = computed({
  get: () => {
    return modelValue.value.max;
  },
  set: (value) => {
    modelValue.value = {...modelValue.value, max: value};
  },
});
</script>

<template>
  <div class="osk-range-input">
    <div class="osk-range-input__container">
      <input v-model="minValue" type="text">
      <prime-slider
        v-model="inputValue"
        :pt="theme"
        :max="props.max"
        :min="props.min"
        class="w-full"
        range
      />
      <input v-model="maxValue" type="text">
    </div>
  </div>
</template>

<style scoped lang="postcss">
.osk-range-input__container {
  @apply w-full flex justify-between items-center pb-4 text-black gap-4 md:gap-6;
}
.osk-range-input__container input {
  text-align: center;
  padding: 10px;
  width: 60px;
  border: 1px solid var(--dark-blue-site-osk);
}
</style>