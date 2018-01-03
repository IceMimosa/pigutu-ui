<template>
  <div id="category">
    <div class="header">

    </div>
  </div>
</template>

<script>
import AppImage from '~/components/common/AppImage.vue'

export default {
  components: {
    AppImage
  },
  fetch ({ params }) {
    // const id = params.id
  },
  asyncData ({ params }) {
    return {
      id: params.id
    }
  }
}
</script>

<style lang="scss">
#category{
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding-top: 80px;
  min-height: 600px;
}
</style>

