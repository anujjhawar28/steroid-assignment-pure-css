<template>
  <Transition name="slide">
    <aside class="sidebar p-20" :class="{ closed: !toggle }" v-if="toggle">
      <SidebarBody />
    </aside>
  </Transition>
</template>

<script setup>
import SidebarBody from "./SidebarBody.vue";
defineProps({
  toggle: {
    type: Boolean,
    required: true,
  },
});
</script>

<style scoped>
.sidebar {
  min-width: 300px;
  min-height: 100vh;
  background-color: #041737;
  color: white;
}
.sidebar.closed {
  width: 0;
}
@media (min-width: 0px) and (max-width: 1024px) {
  .sidebar {
    display: none;
  }
}
.slide-enter-active,
.slide-leave-active {
  transition: 0.3s ease;
}
.slide-enter,
.slide-leave-to {
  transform: translateX(-100%);
}
</style>
