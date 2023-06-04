import Vue from 'vue';
import Vuex from 'vuex';
import counter from './Modules/counter';
import * as actions from './StoreItems/StoreActions';
import * as mutations from './StoreItems/StoreMutations';
import * as getters from './StoreItems/StoreGetters';


Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    name: "Mohammad"
  },
  getters,
  mutations,
  actions,
  modules: {
    counter
  }
});
