import Vue from 'vue';
import Vuex from 'vuex';


Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    counter: 0
  },
  getters: {
    doubleCounter(state) {
      return state.counter * 2;
    },
    stringCounter(state) {
      return state.counter + " clicks";
    }
  },
  mutations: {
    increment(state, time) {
      return state.counter += time;
    },
    decrement(state, time) {
      return state.counter -= time;
    }
  },
  actions: {
    increment(contex, time) {
      contex.commit('increment', time);
    },
    decrement(contex, time) {
      contex.commit('decrement', time);
    },
    asyncIncrement(contex, data) {
      setTimeout(() => {
        contex.commit('increment', data.time);
      }, data.duration);
    },
    asyncDecrement(contex, data) {
      setTimeout(() => {
        contex.commit('decrement', data.time);
      }, data.duration);
    }
  }
});
