<template>
  <header class="app-header" :class="{ closed: !toggle }">
    <div class="flex align-center">
      <span
        @click="$emit('menu-click')"
        class="material-symbols-outlined menu-icon"
      >
        menu
      </span>
      <div class="heading">Overview</div>
    </div>

    <div class="flex mr-20 align-center hidden-sm">
      <span class="material-icons"> notifications </span>
      <img src="https://cdn.quasar.dev/img/avatar.png" class="image" />
      <Dropdown />
    </div>
  </header>
</template>

<script setup>
import Dropdown from "./Dropdown.vue";

defineProps({
  toggle: {
    type: Boolean,
    required: true,
  },
});
</script>

<style scoped>
.app-header {
  display: flex;
  justify-content: space-between;
  padding: 20px 0px;
  position: fixed;
  top: 0;
  width: calc(100% - 340px);
  background-color: white;
}
.app-header.closed {
  width: 100%;
}
.menu-icon {
  color: var(--vt-c-text-light-2);
  user-select: none;
  cursor: pointer;
  font-size: 15px;
}
.menu-icon:hover {
  background-color: rgb(246, 241, 241);
  border-radius: 100%;
}

.image {
  height: 3rem;
  width: 3rem;
  border-radius: 100%;
  margin: 0px 10px;
}
.heading {
  font-weight: 700 !important;
  font-size: 2.125rem;
  font-weight: 400;
  line-height: 2.5rem;
  color: black;
  margin-left: 10px;
}
</style>
