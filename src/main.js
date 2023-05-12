import Vue from "vue";
import App from "./App.vue";
import AppFooter from "./components/shared/AppFooter.vue";

Vue.component("app-footer", AppFooter);

new Vue({
  el: "#app",
  render: h => h(App)
});
