import { createRouter, createWebHistory } from "vue-router";

const routes = [
  // {
  //   path: `/home`,
  //   name: "Home",
  //   component: Home,
  // },
];
export default function (store) {
  console.log("vuex store:", store);
  const router = createRouter({
    history: createWebHistory(`${process.env.BASE_URL}base`),
    routes,
    linkActiveClass: "active",
  });
  // 라우터가드
  // router.beforeEach(async (to, from, next) => {});
  return router;
}
