<template>
  <div class="row align-center mt-50">
    <div class="column large-8">
      <ul class="step-bar">
        <li v-for="step in steps" :class="{'active': step.route == $route.name}">
          <router-link :to="{name: step.route}">{{ step.label }}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      steps: {
        type: Array,
        required: true
      }
    },

    created() {
      this.$store.dispatch('setSteps', this.steps);
      this.$store.dispatch('updateCurrentStepRoute', this.$route.name);
    },

    watch: {
      $route({name}) {
        this.$store.dispatch('updateCurrentStepRoute', name);
      }
    }
  }
</script>

<style lang="scss">
  @import "../../sass/settings";

  .step-bar {
    display: flex;
    margin: 0;
    padding: 0;
    counter-reset: step; // Reset the step count to zero
    text-align:center;
    margin-bottom: 1rem;
    flex-flow: row wrap;

    li {
      color: $medium-gray;
      list-style-type: none;
      font-size: rem-calc(12px);
      text-transform: uppercase;
      position: relative;
      flex: 1 0 auto;

      > a.disabled {
        color: $medium-gray;
        cursor: not-allowed;
      }

      // Create the circle around the step number
      &::before {
        display: block;
        color: $medium-gray;
        width: rem-calc(30px);
        height: rem-calc(30px);
        content: counter(step);  // Set the content to the current step count (first <li> is 1)
        counter-increment: step; // Increment the step count by one
        line-height: rem-calc(27px);
        border: rem-calc(2px) solid $medium-gray;
        text-align: center;
        margin: 0 auto 10px auto;
        border-radius: 50%;
        background-color: $white;
      }

      // Create the line after the circle.
      &::after {
        width: 100%;
        height: rem-calc(2px);
        content: '';
        position: absolute;
        background-color: $medium-gray;
        top: rem-calc(15px);
        left: -50%;
        z-index: -1;
      }

      &:first-child:after {
        content: none;
      }

      &.done {
        color: $success-color;
        > a {
          color: $success-color;
        }

        &::before {
          color: $success-color;
          border-color: scale-color($success-color, $lightness: 25%);
        }

        &::after {
          background-color: scale-color($success-color, $lightness: 25%);
        }
      }

      &.active {
        color: $primary-color;
        &::before {
          color: $primary-color;
          border-color: scale-color($primary-color, $lightness: 25%);
        }

        &::after {
          background-color: scale-color($primary-color, $lightness: 25%);
        }
      }
    }
  }
</style>