import { createWebHistory, createRouter } from "vue-router";

import { HomeView, SelectedUniverseView, SelectedTableView } from "../views";

const routes = [
  { path: "/", component: HomeView },
  {
    path: "/universe/:universeName/:universeId",
    component: SelectedUniverseView,
  },
  {
    path: "/universe/:universeName/:universeId/table/:tableName/:tableId",
    component: SelectedTableView,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export { router };
