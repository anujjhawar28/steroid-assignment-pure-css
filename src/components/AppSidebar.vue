<template>
  <Transition name="slide">
    <aside class="sidebar" :class="{ closed: !toggle }" v-if="toggle">
      This is Sidebar Content
    </aside>
  </Transition>
</template>

<script setup>
defineProps({
  toggle: {
    type: Boolean,
    required: true,
  },
});
</script>

<style scoped>
.sidebar {
  width: 300px;
  min-height: 100vh;
  background-color: #041737;
  color: white;
}
.sidebar.closed {
  width: 0;
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
