<template>
  <div class="table-container">
    <div class="flex-item">
      <div class="table">
        <div class="table-header">
          <div class="header-left">
            <div class="heading">Document</div>
            <div class="description">Document Tracking Information</div>
          </div>
          <div class="header-right">
            <div class="dropdown">
              <button class="dropdown-btn">Weekly</button>
              <div class="dropdown-content">
                <a href="#">Monthly</a>
                <a href="#">Daily</a>
                <a href="#">Yearly</a>
              </div>
            </div>
          </div>
        </div>
        <div class="table-body">
          <div class="table-row table-header-row">
            <div class="table-cell">Name</div>
            <div class="table-cell">File</div>
            <div class="table-cell">Category</div>
            <div class="table-cell">Author</div>
            <div class="table-cell">Status</div>
          </div>
          <div v-for="(row, index) in rows" :key="index" class="table-row">
            <div class="table-cell">{{ row.name }}</div>
            <div class="table-cell">{{ row.file }}</div>
            <div class="table-cell">{{ row.category }}</div>
            <div class="table-cell">{{ row.author }}</div>
            <div class="table-cell">
              <button
                v-if="row.status === 'Send'"
                class="status-btn status-send"
              >
                Send
              </button>
              <button v-else class="status-btn status-pending">Pending</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const rows = [
  {
    name: "Annual Report",
    file: "PDF",
    category: "Property",
    author: "Diana Mathews",
    status: "Send",
  },
  {
    name: "Buisness plan",
    file: "Word",
    category: "Cryptocurrency",
    author: "Philip James",
    status: "Send",
  },
  {
    name: "Marketing Tool",
    file: "PDF",
    category: "Content Creator",
    author: "Amanda Ross",
    status: "Pending",
  },
];
</script>

<style scoped>
.table-container {
  display: flex;
  padding-left: 10px;
  padding-right: 10px;
}

.flex-item {
  flex: 1;
}

.table {
  border: 1px solid #ccc;
  border-collapse: collapse;
  padding: 10px;
}

.table-header {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 0.5px solid #dedede;
}

.header-left {
  display: flex;
  flex-direction: column;
}

.heading {
  font-weight: bold;
  margin-bottom: 5px;
}

.description {
  font-size: 10px;
  color: grey;
}

.header-right {
  display: flex;
  align-items: center;
}

.dropdown {
  position: relative;
}

.dropdown-btn {
  border-radius: 5px;
  background-color: #eeebeb;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 120px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.dropdown-content a {
  display: block;
  padding: 10px;
  text-decoration: none;
  color: #333;
}

.dropdown-content a:hover {
  background-color: #ddd;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.table-body {
  padding: 10px;
}

.table-row {
  display: flex;
  border-bottom: 0.5px solid #dedede;
}

.table-cell {
  flex: 1;
  padding: 10px;
}

.table-header-row {
  font-weight: bold;
  font-size: 14px;
}
.status-btn {
  border: none;
  padding: 5px 10px;
  cursor: pointer;
}

.status-send {
  padding: 5px 10px;
  border-radius: 10px;
  background-color: rgb(188, 252, 188);
  color: rgb(34, 201, 34);
}

.status-pending {
  padding: 5px 10px;
  border-radius: 10px;
  background-color: rgb(254, 154, 154);
  color: rgb(218, 60, 60);
}
</style>
