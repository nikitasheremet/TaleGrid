import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { openDB } from "./db/db";
import { router } from "./router/router";
import { initializeStore } from "./store/store";

(async () => {
  initializeStore();
  await openDB();
  createApp(App).use(router).mount("#app");
})();
