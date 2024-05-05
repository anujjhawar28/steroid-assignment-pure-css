<template>
  <div class="flex overflow-hidden">
    <AppSidebar :toggle="toggle" />
    <div class="p-10 mt-50">
      <AppHeader :toggle="toggle" @menu-click="toggle = !toggle" />
      <RouterView />
    </div>
  </div>
</template>

<script setup>
import AppHeader from "../components/Header/AppHeader.vue";
import AppSidebar from "../components/AppSidebar.vue";
import { ref } from "vue";

const toggle = ref(true);
</script>
