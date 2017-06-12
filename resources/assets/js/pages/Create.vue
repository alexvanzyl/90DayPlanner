<template>
  <div>
    <step-bar :steps="steps"></step-bar>

    <div class="row align-center">
      <div class="column large-8">
        <router-link class="mb-5 block" :to="{ name: 'home' }">
          <i class="fa fa-home"></i> Home
        </router-link>
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