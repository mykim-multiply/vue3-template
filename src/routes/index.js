import { createRouter, createWebHistory } from "vue-router";
// layouts
import LayoutDefault from "@/components/layout/LayoutDefault";
import LayoutFluid from "@/components/layout/LayoutFluid";
// views
import Home from "@/views/home";
import Login from "@/views/login";
import Plate from "./plate";

const routes = [
  {
    path: `/`,
    component: LayoutDefault,
    children: [
      {
        path: `/`,
        name: "Home",
        component: Home,
      },
      ...Plate,
    ],
  },
  {
    path: "/login",
    component: LayoutFluid,
    children: [
      {
        path: `/login`,
        name: "Login",
        component: Login,
      },
    ],
  },
];
export default function (store) {
  // console.log("vuex store:", store);
  const router = createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass: "active",
  });
  // 네비게이션 가드
  // routes.beforeEach(async (to, from, next) => {});
  return router;
}
