<script setup lang="ts">
import InputSwitch, { InputSwitchProps } from 'primevue/inputswitch';
import { useAttrs } from 'vue';
import { usePassThrough } from 'primevue/passthrough';
import OskInputSwitchTheme from './OskInputSwitch.theme.ts';
import {IOskInputSwitchEmits, IOskInputSwitchSlots} from './OskInputSwitch.types.ts';

defineEmits<IOskInputSwitchEmits>();
defineProps<InputSwitchProps>();
defineSlots<IOskInputSwitchSlots>();

defineOptions({
  inheritAttrs: false
});

const attrs = useAttrs() as InputSwitchProps;
const theme = usePassThrough(
  {
    inputSwitch: OskInputSwitchTheme
  },
  {
    inputSwitch: attrs.pt
  },
  {
    ...attrs.ptOptions,
  }
);
</script>

<template>
  <input-switch
    v-bind="attrs"
    :pt="theme"
  >
    <tepmlate v-for="(_, slot) in $slots" #[slot]="{scope}">
      <slot :name="slot" v-bind="scope" />
    </tepmlate>
  </input-switch>
</template>

<style scoped>

</style>