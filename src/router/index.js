import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: import("../layout/MainLayout.vue"),
      children: [
        {
          path: "/",
          name: "home",
          component: import("../views/Dashboard.vue"),
        },
      ],
    },
  ],
});

export default router;
