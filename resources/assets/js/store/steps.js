import router from '../routes';

export default {
  state: {
    currentStepRoute: '',
    steps: []
  },

  mutations: {
    /**
     * Set the steps array on the state.
     *
     * @param state
     * @param steps
     * @constructor
     */
    SET_STEPS (state, steps) {
      state.steps = steps;
    },

    /**
     * Update the currentStepRoute property on the state.
     *
     * @param state
     * @param route
     * @constructor
     */
    UPDATE_CURRENT_STEP_ROUTE (state, route) {
      state.currentStepRoute = route;
    }
  },

  actions: {
    /**
     * Set the steps on the state.
     *
     * @param commit
     * @param steps
     */
    setSteps({commit}, steps) {
      commit('SET_STEPS', steps);
    },

    /**
     * Update the current step route.
     *
     * @param commit
     * @param route
     */
    updateCurrentStepRoute({commit}, route) {
      commit('UPDATE_CURRENT_STEP_ROUTE', route);
    },

    /**
     * Go to the next step.
     *
     * @param state
     */
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
}