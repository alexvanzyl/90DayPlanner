<template>
  <div class="callout secondary shadow">
    <div class="callout-header primary">
      <h4>Metrics</h4>
      <p>What criteria or metric(s) will be used to measure success?</p>
    </div>

    <form>
      <div class="input-group">
        <span class="input-group-label"><i class="fa fa-line-chart"></i></span>
        <input class="input-group-field" type="text">
        <div class="input-group-button">
          <button type="button" class="button"><i class="fa fa-plus"></i></button>
        </div>
      </div>

      <button class="button expanded" type="submit" @click.prevent="next">Next</button>
    </form>
  </div>
</template>

<script>
  export default {
    methods: {
      next() {
        this.$store.dispatch('goToNextStep')
      }
    }
  }
</script>