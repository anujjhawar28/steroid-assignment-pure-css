<template>
  <div class="mt-20">
    <div v-for="(menu, index) in sideMenu" :key="index">
      <div class="menu-heading">{{ menu.mainheading }}</div>
      <div class="menu-items">
        <div
          v-for="(child, idx) in menu.children"
          :key="idx"
          class="menu-item"
          @click="handleItemClick(child)"
        >
          <span class="material-icons icon"> {{ child.icon }} </span>
          <span class="q-ml-md">{{ child.label }}</span>
        </div>
      </div>
      <div class="separator my-20" v-if="index < sideMenu.length - 1" />
    </div>
  </div>
</template>

<script setup>
const sideMenu = [
  {
    mainheading: "Managment",
    children: [
      {
        icon: "inbox",
        label: "Document",
      },
      {
        icon: "perm_contact_calendar",
        label: "Contact",
      },
      {
        icon: "shopping_cart",
        label: "Prospect",
      },
      {
        icon: "autorenew",
        label: "Workflow",
      },
    ],
  },
  {
    mainheading: "Connection",
    children: [
      {
        icon: "chat",
        label: "Chat Integration",
      },
      {
        icon: "description",
        label: "Marketing Automation",
      },
      {
        icon: "email",
        label: "Email Integration",
      },
    ],
  },
  {
    mainheading: "Customer",
    children: [
      {
        icon: "paid",
        label: "Transaction",
      },
      {
        icon: "engineering",
        label: "Maintenance",
      },
    ],
  },
];

const handleItemClick = (item) => {};
</script>

<style scoped>
.menu-heading {
  color: #496082;
  font-size: 16px;
  margin-left: 20px;
  padding: 10px 0;
}

.menu-item {
  display: flex;
  align-items: center;
  padding: 15px 0;
  font-size: 14px;
  color: #496082;
  cursor: pointer;
}

.menu-item:hover {
  background-color: #071c41;
}

.menu-item .icon {
  margin-left: 20px;
  margin-right: 10px;
  color: #496082;
}

.separator {
  border-top: 1px solid #496082;
}
</style>
