<template>
  <div>
    <app-header active='index'/>
    <nuxt/>
  </div>
</template>

<script>
import Vue from 'vue';
import ElementUI from 'element-ui';
import AppHeader from '~/components/AppHeader.vue';
Vue.use(ElementUI)

export default {
  components: {
    AppHeader
  }
}
</script>

<style lang='scss'>

</style>
