import { createWebHistory, createRouter } from "vue-router";

import Home from "@/views/Home";
import About from "@/views/About";
import Error from "@/views/Error";
import CoinDetail from "@/views/CoinDetail";

const history = createWebHistory();

export default new createRouter({
  history,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/coin/:id",
      name: "coin-detail",
      component: CoinDetail,
    },
    {
      path: "/about",
      name: "about",
      component: About,
    },
    {
      path: "/:catchAll(.*)",
      name: "Error",
      component: Error,
    },
  ],
});
