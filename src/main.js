import Vue from 'vue';
import VueRouter from 'vue-router';
import {
  Routes
} from './Routes.js'
import App from './App.vue';

Vue.use(VueRouter);

const router = new VueRouter({
  routes: Routes,
  mode : 'history'
});


new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
