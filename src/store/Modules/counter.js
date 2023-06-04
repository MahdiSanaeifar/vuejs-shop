const state = {
  counter: 0
};

const getters = {
  doubleCounter(state) {
    return state.counter * 2;
  },
  stringCounter(state) {
    return state.counter + " clicks";
  }
};

const mutations = {
  increment(state, time) {
    return state.counter += time;
  },
  decrement(state, time) {
    return state.counter -= time;
  }
};

const actions = {
  increment(context, time) {
    context.commit('increment', time);
  },
  decrement(context, time) {
    context.commit('decrement', time);
  },
  asyncIncrement(context, data) {
    setTimeout(() => {
      context.commit('increment', data.time);
    }, data.duration);
  },
  asyncDecrement(context, data) {
    setTimeout(() => {
      context.commit('decrement', data.time);
    }, data.duration);
  },
};


export default {
  state,
  getters,
  mutations,
  actions
};
