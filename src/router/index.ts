import { createRouter, createWebHashHistory } from "vue-router";
const AppMain = () => import("@/view/AppMain.vue");
const routes = [{ path: "/", component: AppMain }];

const router = createRouter({
  routes,
  history: createWebHashHistory(),
});
export default router;
