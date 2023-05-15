import Vue from 'vue';
import App from './App.vue';


Vue.directive('custom', {
  bind(el, binding, vnode) {
    var delay = 0;

    if (binding.modifiers['delayed']) {
      delay = 3000;
    }

    setInterval(() => {
      if (binding.arg === 'textcolor') {
        el.style.color = binding.value;
      }
    }, delay);

    el.style.padding = '20px';
    el.style.fontSize = '1.5em';
    el.style.backgroundColor = 'gray';
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})



// Vue.directive('custom', {
//   bind(el, binding, vnode) {},
//   inserted(el, binding, vnode) {},
//   updated(el, binding, vnode, oldVnode) {},
//   componentUpdated(el, binding, vnode, oldVnode) {},
//   unbind(el, binding, vnode) {}
// });
