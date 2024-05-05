<template>
  <div
    class="header-dropdown"
    @click="isOpen = !isOpen"
    @blur="isOpen = !isOpen"
  >
    <span class="dropdown-label flex"
      >{{ selectedValue }}
      <span class="material-icons dropdown-icon">
        {{ isOpen ? "expand_more" : "expand_less" }}
      </span>
    </span>
    <div v-if="isOpen" class="dropdown-menu">
      <ul>
        <li
          v-for="(item, index) in items"
          :key="index"
          :class="{ selected: selectedValue === item }"
          @click="handleItemClick(item)"
        >
          {{ item }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const isOpen = ref(false);
const items = ["Administrator", "Photos", "Videos", "Articles"];
const selectedValue = ref("Administrator");

const handleItemClick = (value) => {
  selectedValue.value = value;
};
</script>

<style scoped>
.header-dropdown {
  position: relative;
  display: inline-block;
  cursor: pointer;
  color: rgb(119, 121, 122) !important;
}

.dropdown-label {
  color: grey;
  padding: 10px;
}
.dropdown-label:hover {
  background-color: rgb(227, 227, 227) !important;
  border-radius: 4px;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: -20%;
  background-color: #fff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  z-index: 1000;
}

.dropdown-menu .selected {
  background-color: rgb(213, 216, 218) !important;
}

.dropdown-menu ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.dropdown-menu li {
  padding: 8px 16px;
  cursor: pointer;
}

.dropdown-menu li:hover {
  background-color: #f0f0f0;
}

.dropdown-icon {
  font-size: 20px;
}
</style>
