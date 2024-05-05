<template>
  <div class="stats-card">
    <div class="col" v-for="(card, index) in cards" :key="index">
      <div class="my-card">
        <div class="card-section">
          <div class="flex align-center justify-space-between">
            <div class="card-heading">{{ card.heading }}</div>
            <button class="card-button" @click="handleButtonClick(card)">
              <span class="material-icons icon"> {{ card.icon }} </span>
            </button>
          </div>
          <div class="card-stat">
            {{ card.stat }}
          </div>
          <div class="flex align-center card-content">
            <span class="material-icons text-green icon"> trending_up </span>
            <div class="text-green percentage">17 %</div>
            <div class="time">Since Last week</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const cards = [
  {
    heading: "Document",
    icon: "inbox",
    stat: "146.000",
  },
  {
    heading: "Contact",
    icon: "perm_contact_calendar",
    stat: "1400",
  },
  {
    heading: "Email",
    icon: "email",
    stat: "150.700",
  },
];
</script>

<style scoped>
.stats-card{
  display: flex;
}
.col {
  flex: 1;
  padding-left: 10px;
  padding-right: 10px;
}

.my-card {
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

.card-section {
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.card-button {
  background: none;
  cursor: pointer;
  border-radius: 100%;
  padding: 5px;
  border: 1px solid #198bdf;
}

.icon {
  font-size: 20px;
  color: #198bdf;
}

.card-heading {
  font-size: 16px;
  font-weight: 700;
  text-align: left;
}

.card-stat {
  margin: 20px 0px;
  font-size: 1.5rem;
  font-weight: 700;
  text-align: left;
}

.card-content {
  margin-top: 20px;
  font-size: 16px;
}

.percentage {
  font-size: 16px;
  margin-left: 5px;
  margin-right: 10px;
}

.time {
  color: rgb(107, 104, 104);
}

.text-green {
  color: green;
}
</style>
