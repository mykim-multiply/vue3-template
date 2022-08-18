import { createRouter, createWebHistory } from "vue-router";

const routes = [
  // {
  //   path: `/home`,
  //   name: "Home",
  //   component: Home,
  // },
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
