<template>
  <main class="flex-container mt-40 dashboard">
    <div class="flex-item-left">
      <StatCard />
      <ChartCards />
      <DashboardTable />
    </div>
    <div class="flex-item-right">
      <ToolsCard />
    </div>
  </main>
</template>

<script setup>
import StatCard from "../components/Dashboard/StatCards.vue";
import ToolsCard from "../components/Dashboard/ToolsCard.vue";
import ChartCards from "../components/Dashboard/ChartCards.vue";
import DashboardTable from "../components/Dashboard/DashboardTable.vue";
</script>

<style scoped>
.flex-item-left {
  flex-basis: 100%;
  flex: 70%;
  min-width: 70rem;
}
.flex-item-right {
  flex-basis: 100%;
  flex: 30%;
  min-width: 20rem;
}
</style>
