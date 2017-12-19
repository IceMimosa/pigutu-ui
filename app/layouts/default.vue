<template>
  <div class="main">
    <app-header active="index"/>
    <nuxt/>
    <app-footer/>
  </div>
</template>

<script>
import Vue from 'vue'
import ElementUI from 'element-ui'
import AppHeader from '~/components/AppHeader.vue'
import AppFooter from '~/components/AppFooter.vue'
Vue.use(ElementUI)

export default {
  components: {
    AppHeader,
    AppFooter
  }
}
</script>

<style lang='scss'>
.main {
  height: 100%;
}
</style>
