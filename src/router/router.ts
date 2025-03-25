import { createWebHistory, createRouter } from "vue-router";

import { HomeView, SelectedUniverseView, SelectedTableView } from "../views";

const routes = [
  { path: "/", component: HomeView },
  { path: "/universe/:universe", component: SelectedUniverseView },
  {
    path: "/universe/:universe/table/:tableName/:tableId",
    component: SelectedTableView,
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
