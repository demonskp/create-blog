export default [
  {
    path: "/game",
    name: "game-index",
    component: () => import("../../views/game/index.vue"),
  },
  {
    path: "/game/link-game",
    name: "link-game",
    component: () => import("../../views/game/link-game/index.vue"),
  },
  {
    path: "/game/settings",
    name: "game-settings",
    component: () => import("../../views/game/settings/index.vue"),
  },
];
