import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "index",
      component: () => import("@/layout/HomeView.vue"),
      redirect:'chart',
      children: [
        {
          path: "/chart",
          name: "chart",
          component: () => import("@/layout/pages/UsageView.vue"),
        },
        {
          path: "other",
          name: "other",
          component: () => import("@/layout/pages/Other.vue"),
        },
      ],
    },
  ],
});

export default router;
