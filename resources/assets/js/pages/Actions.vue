<template>
  <div class="callout secondary shadow">
    <div class="callout-header primary">
      <h4>Action Steps</h4>
      <p>What actions need to be taken to achieve your goal?</p>
    </div>

    <form @submit.prevent="save">
      <div class="input-group">
        <span class="input-group-label"><i class="fa fa-list"></i></span>
        <input class="input-group-field" type="text">
        <div class="input-group-button">
          <button type="button" class="button"><i class="fa fa-plus"></i></button>
        </div>
      </div>

      <button class="button expanded" type="submit">Done</button>
    </form>
  </div>
</template>

<script>
  export default {
    methods: {
      save() {
        alert('Saving...')
      }
    }
  }
</script>