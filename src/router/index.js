import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import OurStory from "../views/OurStory.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/our-story",
    name: "OurStory",
    component: OurStory,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
