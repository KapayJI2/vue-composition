import { createApp } from "vue";
import routers from "./routes";
import store from "./store";
import App from "./App.vue";

import "@/assets/styles.css";

const app = createApp(App);
app.use(routers);
app.use(store);
app.mount("#app");
