import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: '/home', componet: () => import('../views/Home/home.vue') }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router