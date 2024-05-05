<template>
  <div>
    <div class="main-logo">CRM.io</div>
    <DashboardButton class="mt-20" />
    <SidebarList />
  </div>
</template>

<script setup>
import DashboardButton from "./DashboardButton.vue";
import SidebarList from "./SidebarList.vue";
</script>
<style scoped>
.main-logo {
  color: rgb(211, 150, 111);
  font-style: italic;
  font-size: 20px;
  margin-left: 20px;
}
.dashboard {
  background-color: #3963ad !important;
  font-size: 16px !important;
  border-radius: 20px;
}
.menu-heading {
  color: #496082 !important;
  font-size: 16px;
  margin-left: 20px;
  padding: 10px 0px !important;
}
</style>
