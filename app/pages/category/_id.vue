<template>
  <div id="category">
    <div class="header">
      <ul class="tabs clearfix">
        <li><nuxt-link to="/">全部</nuxt-link></li>
        <li v-for="item in categoryData" v-bind:class="{active: id == item.id}" :key="item">
          <nuxt-link to="/">{{ item.name }}</nuxt-link>
        </li>
      </ul>
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
  },
  data () {
    return {
      categoryData: [
        {id: 0, name: '明星', title: '名人明星'},
        {id: 1, name: '清纯', title: '唯美清纯'},
        {id: 2, name: '运动', title: '运动阳光'},
        {id: 3, name: '动漫', title: '动漫游戏'},
        {id: 4, name: '模特', title: '车展模特'},
        {id: 5, name: '比基尼', title: '比基尼'},
        {id: 6, name: '丝袜', title: '美腿丝袜'},
        {id: 7, name: '内衣', title: '性感妖娆'},
        {id: 8, name: '制服', title: '制服诱惑'},
        {id: 9, name: 'Cosplay', title: 'Cosplay'}
      ]
    }
  }
}
</script>

<style lang="scss">
$MAIN_COLOR: #6CF;
#category{
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding-top: 80px;
  min-height: 600px;

  .header {
    width: 980px;
    margin: 0 auto;
    border-bottom: 1px solid #6d757a;
    .tabs {
      list-style: none outside none;
      li {
        float: left;
        height: 50px;
        width: 50px;
        text-align: center;
        margin: 0 5px;
        a {
          display: block;
          height: 100%;
          width: 100%;
          color: #6d757a;
          padding-top: 16px;
          font-size: 16px;
          border-bottom: 4px solid transparent;
          transition: all .35s ease;
          text-decoration: none;
        }
        &.active a {
          color: $MAIN_COLOR;
        }
        a:hover {
          border-bottom: 4px solid $MAIN_COLOR;
        }
      }
      a.nuxt-link-exact-active {
        border-bottom: 4px solid $MAIN_COLOR;
      }
    }
  }
}
</style>

