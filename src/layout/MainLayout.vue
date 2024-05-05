<template>
  <div class="flex-container overflow-hidden">
    <AppSidebar :toggle="toggle" />
    <div class="p-10 mt-40">
      <AppHeader :toggle="toggle" />
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
