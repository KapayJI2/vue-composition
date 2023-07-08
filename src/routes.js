import { createRouter, createWebHistory } from "vue-router";
const routerHistory = createWebHistory();
import HomePage from "@/pages/HomePage";
const routers = createRouter({
  history: routerHistory,
  routes: [
    {
      // path: "/examples/vue3-exam-prod",
      path: "/dev",
      name: "home",
      component: HomePage,
    },
  ],
});
export default routers;
