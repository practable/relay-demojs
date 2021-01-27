import { createWebHistory, createRouter } from "vue-router";
import About from "../views/About.vue";
import NotFound from "../views/NotFound.vue";
import Default from "../views/Default.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Default,
  },
  {
    path: "/about",
    name: "about",
    component: About,
  },
  { path: "/:pathMatch(.*)*", name: "not-found", component: NotFound },
];

const router = createRouter({
  history: createWebHistory("/ui/debug-1.0/"),
  routes,
});

export default router;
