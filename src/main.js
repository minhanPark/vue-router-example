import Vue from "vue";
import App from "./App.vue";
import { router } from "./routes";
import babelPolyfill from "babel-polyfill";

new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
