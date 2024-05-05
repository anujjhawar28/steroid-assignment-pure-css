<template>
  <button class="button" @click="$emit('click')">
    <div class="flex justify-center align-center">
      <span class="material-icons button-icon"> dashboard </span>
      Dashboard
    </div>
  </button>
</template>

<script setup>
defineEmits(["click"]);
</script>

<style scoped>
.button {
  display: inline-block;
  background-color: #3963AD;
  color: white;
  font-size: 16px;
  padding: 14px;
  border: none;
  border-radius: 20px;
  width: 100%;
  cursor: pointer;
  text-transform: uppercase;
  transition: background-color 0.3s ease;
}

.button:hover {
  background-color: #3b6ab9;
}

.button-icon {
  font-size: 30px;
  margin-right: 8px;
}
</style>
