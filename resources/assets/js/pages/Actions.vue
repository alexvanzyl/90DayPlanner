<template>
  <div class="callout secondary shadow">
    <div class="callout-header primary">
      <h4>Action Steps</h4>
      <p>What actions need to be taken to achieve your goal?</p>
    </div>

    <form @submit.prevent="save">
      <div class="row" v-for="(action, index) in actions">
        <div class="medium-6 small-12 columns">
          <div class="input-group">
            <span class="input-group-label"><i class="fa fa-list"></i></span>
            <input class="input-group-field" type="text" placeholder="Action..." v-model="action.name" v-focus>
          </div>
        </div>

        <div class="medium-6 small-12 columns">
          <div class="input-group">
            <span class="input-group-label"><i class="fa fa-user"></i></span>
            <input class="input-group-field"
                   type="text"
                   placeholder="Who will perform the action?"
                   v-model="action.person_responsible"
            >
            <div class="input-group-button">
              <button type="button"
                      class="button alert"
                      title="Remove action"
                      v-show="actions.length > 1"
                      @click="remove(index)"
              >
                <i class="fa fa-minus"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      <button type="button"
              class="button expanded tiny warning"
              title="Add another action"
              @click="add"
      >
        <i class="fa fa-plus"></i>
      </button>
      <hr>

      <button class="button expanded" type="submit">Done</button>
    </form>
  </div>
</template>

<script>
  export default {
    mounted() {
      Foundation.Motion.animateIn(this.$el, 'slide-in-left fast');
    },

    methods: {
      save() {
        this.updateState();
        alert('Saving...');
      },

      add() {
        this.updateState();
        this.actions.push({ name: '', person_responsible: ''});
      },

      remove(index) {
        if (this.actions.length > 1) {
          this.actions.splice(index, 1);
          this.updateState();
        }
      },

      updateState() {
        this.$store.dispatch('updateActions', this.actions);
      }
    },

    computed: {
      actions() {
        return this.$store.state.goal.actions;
      }
    }
  }
</script>