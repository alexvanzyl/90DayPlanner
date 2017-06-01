<template>
  <div class="secondary callout shadow">
    <div class="callout-header">
      <h4>Focus area</h4>
      <p>What area you would like to focus on within the next 90 days?</p>
    </div>

    <form>
      <label>What area would you like to focus on?</label>
      <div class="input-group">
        <span class="input-group-label"><i class="fa fa-trophy"></i></span>
        <input class="input-group-field" type="text" placeholder="Title for your focus area">
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