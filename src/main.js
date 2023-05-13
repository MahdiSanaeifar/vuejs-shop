import Vue from "vue";
import App from "./App.vue";

export const BusEvent = new Vue({
  methods: {
    changeAge(age) {
      this.$emit("changeAge", age);
    }
  },
  data() {
    return {
      PublicAge: 45
    };
  }
});

new Vue({
  el: "#app",
  render: h => h(App)
});
