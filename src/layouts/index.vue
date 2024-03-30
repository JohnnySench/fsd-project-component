<script setup lang="ts">
  import TheNavbar from '@/widgets/TheNavbar.vue';
  import TheSidebar from '@/widgets/TheSidebar.vue';
  import TheHeader from '@/widgets/TheHeader.vue';


</script>

<template>
  <RouterView v-slot="{Component, route}">
    <TheHeader :current-route="route" />
    <div class="flex flex-row">
      <TheSidebar v-if="route.meta.sidebar"/>
      <Component :is="Component" />
    </div>
    <!--NavBar-->
    <TheNavbar v-if="route.meta.layout"/>
  </RouterView>
</template>

<style scoped>

</style>