<template>
  <div class="app-image" v-bind:style="{ width: width + 'px'}">
    <img v-if="lazy" v-lazy="src" :alt="alt" :width="width" :height="height" style="cursor:pointer"/>
    <img v-else :src="src" :alt="alt" :width="width" :height="height" style="cursor:pointer"/>
  </div>
</template>

<script>
export default {
  props: {
    src: String,
    alt: String,
    width: [Number, String],
    height: [Number, String],
    lazy: {
      default: false,
      type: Boolean
    }
  }
}
</script>

<style lang="scss" scoped>
.app-image {
  img {
    border-radius: 4px;
  }
}
</style>
