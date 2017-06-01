import Vue from 'vue';
import Vuex from 'vuex';
import router from '../routes';

// Make sure Vue is using Vuex
Vue.use(Vuex);

// Initialize Vuex Store
export default new Vuex.Store({
  state: {
    currentStepRoute: '',
    steps: []
  },

  mutations: {
    SET_STEPS (state, steps) {
      state.steps = steps;
      state.currentStepRoute = steps[0].route;
    },

    UPDATE_CURRENT_STEP_ROUTE (state, route) {
      state.currentStepRoute = route;
    }
  },

  actions: {
    setSteps({commit}, steps) {
      commit('SET_STEPS', steps);
    },

    updateCurrentStepRoute({commit}, route) {
      commit('UPDATE_CURRENT_STEP_ROUTE', route);
    },

    goToNextStep({state}) {
      // Find the current steps index using the route
      // name and add one for the next steps index
      let nextStepIndex = _.findIndex(state.steps, (step) => {
          return step.route === state.currentStepRoute;
      }) + 1;

      // Only go to the next step if it isn't the last one...
      if (nextStepIndex !== state.steps.length) {
        router.push({name: state.steps[nextStepIndex].route});
      }
    }
  }
});