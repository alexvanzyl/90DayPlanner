import Vue from 'vue';
import Vuex from 'vuex';

import steps from './steps';
import goal from './goal';

// Make sure Vue is using Vuex
Vue.use(Vuex);

// Initialize Vuex Store
export default new Vuex.Store({
  modules: {
    steps,
    goal
  }
});