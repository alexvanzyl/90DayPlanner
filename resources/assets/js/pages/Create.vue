<template>
  <div>
    <step-bar :steps="steps"></step-bar>

    <div class="row align-center">
      <div class="column large-8">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
  import StepBar from '../components/StepBar';

  export default {
    data() {
      return {
        steps: [
          {label: 'Goal', route: 'create.goal'},
          {label: 'Metrics', route: 'create.metrics'},
          {label: 'Actions', route: 'create.actions'}
        ]
      }
    },

    components: {
      StepBar
    }
  }
</script>