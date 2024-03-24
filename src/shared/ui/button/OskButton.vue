<script setup lang="ts">
import PrimeButton, { ButtonProps } from 'primevue/button';
import { IOskButtonProps } from './OskButton.types.ts';
import OskButtonTheme from './OskButton.theme.ts';
import { useAttrs } from 'vue';
import { usePassThrough } from 'primevue/passthrough';

defineProps<IOskButtonProps>();
defineOptions({
  name: 'OskButton',
  inheritAttrs: false
});
const attrs = useAttrs() as ButtonProps;
const theme = usePassThrough(
  {
    button: OskButtonTheme
  },
  {
    button: attrs.pt
  },
  {
    ...attrs.ptOptions
  }
);
console.log(attrs);
</script>

<template>
  <div :class="classContainer">
    <prime-button :pt="theme" v-bind="attrs">
      <template v-if="$slots.icon" #icon="{slotProps}">
        <slot name="icon" :icon="slotProps"/>
      </template>
    </prime-button>
  </div>
</template>

<style scoped>

</style>