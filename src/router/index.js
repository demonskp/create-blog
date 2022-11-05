import { createRouter, createWebHistory } from "vue-router";
import game from "./modules/game";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: () => import("../views/root.vue"),
      children: [
        {
          path: "home",
          name: "home",
          component: () => import("../views/home/index.vue"),
        },
        ...game,
      ],
    },
  ],
});

export default router;
