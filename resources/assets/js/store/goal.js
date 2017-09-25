export default {
  state: {
    id: null,
    name: '',
    errors: [],
    actions: [{ name: '', person_responsible: '' }],
    metrics: [{ name: '' }],
  },

  mutations: {
    /**
     * Update the goal's name on the state.
     *
     * @param state
     * @param name
     * @constructor
     */
    UPDATE_GOAL_NAME (state, name) {
      state.name = name;
    },

    UPDATE_GOAL_ID (state, id) {
      state.id = id;
    },

    /**
     * Update the goal's metrics on the state
     *
     * @param state
     * @param metrics
     * @constructor
     */
    UPDATE_METRICS (state, metrics) {
      state.metrics = metrics;
    },

    /**
     * Update the Goals actions on the state
     *
     * @param state
     * @param actions
     * @constructor
     */
    UPDATE_ACTIONS (state, actions) {
      state.actions = actions;
    }
  },

  actions: {
    /**
     * Update goals name.
     *
     * @param commit
     * @param name
     */
    updateGoalName({commit}, name) {
      commit('UPDATE_GOAL_NAME', name);
    },

    saveGoal({commit, state}, name) {
      if (state.id) {
        return axios.patch('/api/goal/' + state.id, { name });
      }

      return axios.post('/api/goal', { name }).then((response) => {
        commit('UPDATE_GOAL_ID', response.data.id);
      });
    },

    /**
     * Update goals metrics.
     *
     * @param commit
     * @param metrics
     */
    updateMetrics({commit}, metrics) {
      commit('UPDATE_METRICS', metrics);
    },

    /**
     * Update goals actions.
     *
     * @param commit
     * @param actions
     */
    updateActions({commit}, actions) {
      commit('UPDATE_METRICS', actions);
    },
  }
}