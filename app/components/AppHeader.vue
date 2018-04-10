<template>
  <header>
    <div class="header clearfix">
      <div class="logo">
        <a href="/" style="text-decoration: none;"><i class="iconfont icon-pigutu-logo"></i></a>
      </div>
      <div class="tabs">
        <ul class="tabs-float clearfix">
          <li v-bind:class="{active: active === 'index'}"><nuxt-link to="/">首页</nuxt-link></li>
          <li v-bind:class="{active: active === 'category'}"><nuxt-link to="/category/明星">分类</nuxt-link></li>
          <li v-bind:class="{active: active === 'feedback'}"><a target="_blank" href="http://www.pigutu.com">反馈</a></li>
        </ul>
      </div>
      <div class="search">
        <el-input
          placeholder="请输入内容"
          icon="search"
          size="small"
          v-model="keyword"
          @keyup.enter.native="onKeyDown($event)"
          :on-icon-click="handleIconClick">
        </el-input>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    active: String
  },
  data () {
    return {
      keyword: ''
    }
  },
  methods: {
    handleIconClick: function () {
      location.href = '/search?pageNo=1&key=' + this.keyword
    },
    onKeyDown: function (e) {
      const keycode = window.event ? e.keyCode : e.which
      if (keycode === 13) {
        location.href = '/search?pageNo=1&key=' + this.keyword
      }
    }
  }
}
</script>

<style lang="scss" scoped>
$MAIN_COLOR: #6CF;
header {
  height: 50px;
  border-bottom: 1px solid #E8E8E8;
  box-shadow: 0 2px 6px 0 rgba(36, 33, 46, .08);
  background: white;
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  right: 0;
}
.header {
  width: 1140px;
  margin: 0 auto;
  .logo {
    width:138px;
    float: left;
    padding: 14px 0 0 24px;
    i {
      font-size: 30px;
      color: $MAIN_COLOR;
    }
  }

  .tabs {
    float: left;
    .tabs-float {
      list-style: none outside none;
      li {
        float: left;
        height: 50px;
        width: 75px;
        text-align: center;
        margin: 0 9px;
        a {
          display: block;
          color: $MAIN_COLOR;
          height: 100%;
          width: 100%;
          padding-top: 16px;
          font-size: 16px;
          border-bottom: 4px solid transparent;
          transition: all .35s ease;
          text-decoration: none;
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
  .search {
    float: left;
    margin: 12px 0 0 420px;
  }
}
</style>
