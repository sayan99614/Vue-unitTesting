import { createRouter, createWebHashHistory } from "vue-router";
import HomeComponent from "../pages/HomeComponent.vue";
import LoginComponent from "../pages/LoginComponent.vue";
import SignupComponent from "../pages/SignupComponent.vue";
import CreateTask from "../pages/CreateTask.vue";

const routes = [
  { path: "/", component: HomeComponent },
  { path: "/login", component: LoginComponent },
  { path: "/signup", component: SignupComponent },
  { path: "/task", component: CreateTask },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
