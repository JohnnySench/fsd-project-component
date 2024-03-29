<script setup lang="ts" generic="TComponent extends Object">
import SelectButton from 'primevue/selectbutton';
import { IOskSelectButtonProps, IOskSelectButtonSlots, IOskSelectButtonEmits } from './OskSelectButton.types.ts';
import { useAttrs } from 'vue';
import { usePassThrough } from 'primevue/passthrough';
import OskSelectButtonTheme from './OskSelectButton.theme.ts';


defineOptions({
  name: 'OskSelectButton',
  inheritAttrs: false
});
defineSlots<IOskSelectButtonSlots>();
defineEmits<IOskSelectButtonEmits>();

const attrs = useAttrs() as IOskSelectButtonProps;

const theme = usePassThrough(
  {
    selectbutton: OskSelectButtonTheme
  },
  {
    selectbutton: attrs.pt
  },
  {
    ...attrs.ptOptions
  }
);

</script>

<template>
  <!-- Using dynamic class for passing CSS limitation? Hell, yeah! -->

  <select-button
    v-bind="$attrs"
    :pt="theme"
  />

</template>

<style lang="postcss">

</style>
