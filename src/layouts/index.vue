<script setup lang="ts">
  import TheNavbar from '@/widgets/TheNavbar.vue';
  import TheSidebar from '@/widgets/TheSidebar.vue';


</script>

<template>
  <RouterView v-slot="{Component, route}">
    <div v-if="!route.meta.parent" @click="$router.go(-1)">GoBack</div>
    <div class="border-2 border-blue-900 h-20 w-full text-5xl">Шапка {{route.meta.title}}</div>
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