<template>
  <div class="app-image" v-bind:style="{ width: width + 'px'}">
    <img :src="src" :alt="alt" :width="width" :height="height" style="cursor:pointer"/>
  </div>
</template>

<script>
export default {
  props: {
    src: String,
    alt: String,
    width: [Number, String],
    height: [Number, String]
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
