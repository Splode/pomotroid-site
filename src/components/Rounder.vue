<template>
  <svg
    id="Layer_1"
    :class="RounderClasses"
    version="1.2"
    baseProfile="tiny"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    viewBox="0 0 1280 121.8"
    xml:space="preserve"
    class="Rounder"
  >
    <path
      :class="RounderFillClasses"
      d="M1280,121.8C1158.5,49.4,917.5,0,640,0C362.5,0,121.5,49.4,0,121.8L1280,121.8z"
    />
  </svg>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: 'lightNavy',
      required: false,
      validator: (val) => {
        return val === 'navy' || val === 'lightNavy'
      },
    },
    direction: {
      type: String,
      default: 'up',
      required: false,
      validator: (val) => {
        return val === 'up' || val === 'down'
      },
    },
  },

  computed: {
    RounderClasses() {
      return {
        isDown: this.direction === 'down',
        isUp: this.direction === 'up',
      }
    },

    RounderFillClasses() {
      return {
        isLightNavy: this.color === 'lightNavy',
        isNavy: this.color === 'navy',
      }
    },
  },
}
</script>

<style lang="scss" scoped>
@import './../assets/styles/_variables.scss';

.isDown {
  margin-top: -1px;
  transform: rotate(180deg);
}

.isUp {
  margin-bottom: -7px;
}

.isLightNavy {
  fill: $colorLightNavy;
}

.isNavy {
  fill: $colorNavy;
}
</style>
