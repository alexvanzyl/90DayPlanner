<template>
  <div class="callout secondary shadow">
    <div class="callout-header primary">
      <h4>Metrics</h4>
      <p>What criteria or metric(s) will be used to measure success?</p>
    </div>

    <form>
      <div class="input-group" v-for="(metric, index) in metrics">
        <span class="input-group-label"><i class="fa fa-line-chart"></i></span>
        <input class="input-group-field"
               type="text"
               v-model="metric.name"
               placeholder="Metric..."
               v-focus
        >
        <div class="input-group-button" v-show="metrics.length > 1">
          <button type="button"
                  class="button alert"
                  @click="remove(index)"
                  title="Remove metric"
          >
            <i class="fa fa-minus"></i>
          </button>
        </div>
      </div>

      <button class="button expanded tiny warning"
              type="button"
              @click="add"
              title="Add another metric"
      >
        <i class="fa fa-plus"></i>
      </button>
      <hr>

      <button class="button expanded" type="submit" @click.prevent="next">Next</button>
    </form>
  </div>
</template>

<script>
  export default {
    mounted() {
      Foundation.Motion.animateIn(this.$el, 'slide-in-left fast');
    },

    methods: {
      next() {
        Foundation.Motion.animateOut(this.$el, 'slide-out-right fast', () => {
          this.updateState();
          this.$store.dispatch('goToNextStep');
        });
      },

      add() {
        this.updateState();
        this.metrics.push({ name: '' });
      },

      remove(index) {
        if (this.metrics.length > 1) {
          this.metrics.splice(index, 1)
          this.updateState();
        }
      },

      updateState() {
        this.$store.dispatch('updateMetrics', this.metrics);
      }
    },

    computed: {
      metrics() {
        return this.$store.state.goal.metrics;
      }
    }
  }
</script>