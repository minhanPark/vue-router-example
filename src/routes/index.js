import Vue from "vue";
import VueRouter from "vue-router";
import LatestNews from "../components/LatestNews.vue";
import SearchNews from "../components/SearchNews.vue";

Vue.use(VueRouter);
export const router = new VueRouter({
  routes: [
    {
      path: "/",
      component: LatestNews
    },
    {
      path: "/search",
      component: SearchNews
    }
  ]
});
