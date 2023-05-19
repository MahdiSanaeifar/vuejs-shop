import Vue from 'vue';
import VueResource from 'vue-resource';
import App from './App.vue';

Vue.use(VueResource);

Vue.http.options.root = "https://vue-resource-32d1a.firebaseio.com/";

Vue.http.interceptors.push((request, next) => {

  request.headers.set('Authentication', 'this is for auth');

  console.log(request);

  // if (request.method === 'POST') {
  //   request.method = "PUT";
  // }

  next(response => {
    console.log(response);
  });
});

new Vue({
  el: '#app',
  render: h => h(App)
});
