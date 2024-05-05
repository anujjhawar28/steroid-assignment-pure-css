<template>
  <div class="chart-card mt-20">
    <div class="flex-item">
      <div class="card">
        <div class="card-section">
          <div class="heading">Recent Workflow</div>
          <div class="flex">
            <div class="flex-item">
              <div class="icon">
                <span class="material-icons text-green icon">
                  trending_up
                </span>
                <div class="text-green">17 %</div>
              </div>
              <div class="chart-container">
                <canvas id="myChart" class="chart"></canvas>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="flex-item">
      <div class="card">
        <div class="card-section">
          <div class="heading">Recent Marketing</div>
          <div class="flex">
            <div class="flex-item">
              <div class="icon">
                <span class="material-icons text-green icon">
                  trending_up
                </span>
                <div class="text-green">17 %</div>
              </div>
              <div class="chart-container">
                <canvas id="myChart1" class="chart"></canvas>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Chart from "chart.js/auto";
import { onMounted } from "vue";

onMounted(() => {
  const ctx1 = document.getElementById("myChart");
  new Chart(ctx1, {
    type: "bar",
    data: {
      labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange", "black"],
      datasets: [
        {
          label: "# of Votes",
          data: [12, 19, 3, 5, 2, 3, 50],
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });

  const ctx2 = document.getElementById("myChart1");
  new Chart(ctx2, {
    type: "line",
    data: {
      labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange", "black"],
      datasets: [
        {
          label: "My First Dataset",
          data: [65, 59, 80, 81, 56, 55, 40, 100],
          fill: false,
          borderColor: "rgb(75, 192, 192)",
          tension: 0.1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
});
</script>

<style scoped>
.chart-card {
  display: flex;
}
.flex-item {
  flex: 50%;
  flex-basis: 1;
  padding-left: 10px;
  padding-right: 10px;
}

.card {
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 15px;
}

.card-section {
  padding: 24px;
}

.heading {
  font-weight: bold;
  margin-bottom: 10px;
}

.icon {
  display: flex;
  align-items: center;
}

.text-green {
  color: green;
}

.chart-container {
  margin-top: 15px;
}
</style>
