<template>
  <div class="flex-container">
    <AppSidebar :toggle="toggle" />
    <div class="p-10 mt-40 w-full">
      <AppHeader :toggle="toggle" @menu-click="toggle = !toggle" />
      <RouterView />
    </div>
  </div>
</template>

<script setup>
import AppHeader from "../components/Header/AppHeader.vue";
import AppSidebar from "../components/Sidebar/AppSidebar.vue";
import { ref } from "vue";

const toggle = ref(true);
</script>
