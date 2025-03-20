import { createWebHistory, createRouter } from "vue-router";

import { HomeView, SelectedUniverseView } from "../views";

const routes = [
  { path: "/", component: HomeView },
  { path: "/universe/:universe", component: SelectedUniverseView },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
