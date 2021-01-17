import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import(/* webpackChunkName: "home" */ "@/views/Home.vue")
  },
  {
    path: "/about",
    name: "About",
    component: () => import(/* webpackChunkName: "about" */ "@/views/About.vue")
  },
  {
    path: "/sites",
    name: "Sites",
    component: () => import(/* webpackChunkName: "sites" */ "@/views/Sites.vue")
  },
  {
    path: "/sites:id",
    name: "Site",
    component: () => import(/* webpackChunkName: "site" */ "@/views/Site.vue")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
