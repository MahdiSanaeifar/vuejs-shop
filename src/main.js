import Vue from 'vue';
import VueRouter from 'vue-router';
import {
  Routes
} from './Routes.js';
import App from './App.vue';

Vue.use(VueRouter);

const router = new VueRouter({
  routes: Routes,
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {

    if (savedPosition) {
      return savedPosition;
    }

    if (to.hash) {
      return {
        selector: to.hash
      };
    }
  }
});

router.beforeEach((to, from, next) => {
  console.log('enter in route global....');
  next();
});


new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
