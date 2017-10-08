<template>
  <div>
    <app-header active='index'/>
    <nuxt/>
  </div>
</template>

<script>
import AppHeader from '~/components/AppHeader.vue'

export default {
  components: {
    AppHeader
  }
}
</script>

<style lang='scss'>

</style>
