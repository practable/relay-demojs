import VueRouter, { Route } from "vue-router";

declare module "vue/types/vue" {
  interface Vue {
    $route: VueRouter;
  }
}
