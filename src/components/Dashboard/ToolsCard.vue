<template>
  <div class="tools-card">
    <div class="col my-card">
      <div v-for="(card, index) in cards" :key="index">
        <div class="card-heading">{{ card.heading }}</div>
        <div
          class="card-section"
          v-for="(child, idx) in card.children"
          :key="idx"
        >
          <div class="card-content">
            <div class="avatar">
              <img src="https://cdn.quasar.dev/img/avatar.png" alt="Avatar" />
            </div>
            <div>
              <div class="item-title">{{ child.title }}</div>
              <div class="item-description">{{ child.description }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const cards = [
  {
    heading: "Popular Product",
    children: [
      {
        title: "Gadget Converter",
        description: "$250",
      },
      {
        title: "Lens Camera",
        description: "$50",
      },
      {
        title: "Airpods",
        description: "$100",
      },
      {
        title: "Macbook",
        description: "$999",
      },
    ],
  },
  {
    heading: "Chat",
    children: [
      {
        title: "Debra Young Converter",
        description: "How's my product?",
      },
      {
        title: "Dorothy Collins",
        description: "How was the meeting?",
      },
      {
        title: "Chris Jordan",
        description: "How's employee performance?",
      },
      {
        title: "Denise Murphy",
        description: "How was the meeting?",
      },
    ],
  },
];
</script>

<style scoped>
.tools-card {
  display: flex;
}
.col {
  flex: 1;
  padding: 0px 20px;
  padding-right: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}
.grid-container {
  padding: 0px 20px;
  background-color: rgba(255, 255, 255, 0.8);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  margin-top: 20px;
}
.my-card {
  font-size: 30px;
  border-radius: 10px;
}

.card-section {
  padding: 5px;
  border-radius: 4px;
  margin-bottom: 15px;
}

.card-heading {
  font-weight: bold;
  font-size: 14px;
  line-height: 1.5;
  margin-bottom: 10px;
}

.card-content {
  display: flex;
}

.avatar img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 15px;
}

.item-title {
  font-size: 14px;
  line-height: 1.2em !important;
  max-width: 100%;
}

.item-description {
  color: rgba(0, 0, 0, 0.54);
  margin-top: 4px;
  font-size: 0.75rem;
  font-weight: 400;
}
</style>
