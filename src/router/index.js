import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/sites",
    name: "Sites",
    component: () => import(/* webpackChunkName: "sites" */ "@/views/Sites.vue")
  },
  {
    path: "/sites/:id",
    name: "Site",
    props: true,
    component: () => import(/* webpackChunkName: "site" */ "@/views/Site.vue")
  },
  { path: "/", redirect: "/sites" }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
