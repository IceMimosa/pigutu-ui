<template>
  <div class="main">
    <app-header active="index"/>
    <nuxt/>
    <app-footer/>
    <app-back-top :threshold="150" :right="160" :bottom="60" :width="50" :height="50" :svgMajorColor="'#7b79e5'"
                 :svgMinorColor="'#ba6fda'" :svgType="'rocket_smoke'"/>
  </div>
</template>

<script>
import Vue from 'vue'
import ElementUI from 'element-ui'
import AppHeader from '~/components/AppHeader.vue'
import AppFooter from '~/components/AppFooter.vue'
import AppBackTop from '~/components/common/AppBackTop.vue'
import VueLazyload from 'vue-lazyload'
import moment from 'moment'
Vue.use(ElementUI)
Vue.use(VueLazyload)
Vue.filter('moment', function (value, formatString) {
  formatString = formatString || 'MM-DD HH:mm:ss'
  return moment(value).format(formatString)
})

export default {
  components: {
    AppHeader,
    AppFooter,
    AppBackTop
  }
}
</script>

<style lang='scss'>
.main {
  height: 100%;
}
</style>
