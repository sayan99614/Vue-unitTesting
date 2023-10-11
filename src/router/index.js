import { Posts } from "@/components/RealRouting";
import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: {
      template: "welcome to the app",
    },
  },
  {
    path: "/posts",
    component: Posts,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
});

export { routes };

export default router;
