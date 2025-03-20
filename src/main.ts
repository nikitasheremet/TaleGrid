import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { openDB } from "./db/db";
import { router } from "./router/router";

(async () => {
  await openDB();
  createApp(App).use(router).mount("#app");
})();
