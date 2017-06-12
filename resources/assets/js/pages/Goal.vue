<template>
  <div class="secondary callout shadow">
    <div class="callout-header">
      <h4>Focus area</h4>
      <p>What area would you like to focus on within the next 90 days?</p>
    </div>

    <form>
      <label>What area would you like to focus on?</label>
      <div class="input-group">
        <span class="input-group-label"><i class="fa fa-trophy"></i></span>
        <input class="input-group-field" type="text" placeholder="Title of your focus area">
      </div>

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
          this.$store.dispatch('goToNextStep');
        });
      }
    }
  }
</script>