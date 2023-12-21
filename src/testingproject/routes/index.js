import { createRouter, createWebHashHistory } from "vue-router";
import HomeComponent from "../pages/HomeComponent.vue";
import LoginPage from "../pages/LoginPage.vue";
import SignupComponent from "../pages/SignupComponent.vue";

const routes = [
  { path: "/", component: HomeComponent },
  { path: "/login", component: LoginPage },
  { path: "/signup", component: SignupComponent },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
