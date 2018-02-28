<template>
  <div id="category">
    <div class="header">
      <ul class="tabs clearfix">
        <li><nuxt-link to="/">全部</nuxt-link></li>
        <li v-for="item in categoryData" v-bind:class="{active: id == item.id}" :key="item">
          <nuxt-link :to="`/category/${item.id}`">{{ item.name }}</nuxt-link>
        </li>
      </ul>
    </div>
    <div class="cate-list">
      <ul class="list clearfix">
        <li v-for="imageList in imageListData" :key="imageList" @click="goImageSet(imageList.id)">
          <el-card :body-style="{ padding: '0px', width: '200px' }">
            <img :src="'http://img.pigutu.com/img/'+imageList.coverUrl+'/thumb'" class="image">
            <div style="padding: 14px;">
              <span style="white-space:nowrap">{{imageList.title}}</span>
              <div class="bottom clearfix">
                <time class="time">{{ currentDate }}</time>
                <el-button type="text" class="button">操作按钮</el-button>
              </div>
            </div>
          </el-card>
        </li>
      </ul>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage1"
        :page-size="100"
        layout="total, prev, pager, next"
        :total="1000">
      </el-pagination>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import AppImage from '~/components/common/AppImage.vue'

export default {
  components: {
    AppImage
  },
  fetch ({ store }) {
    return store.dispatch('category/getCategory')
  },
  computed: {
    ...mapState('category', ['imageListData'])
  },
  methods: {
    goImageSet: function (id) {
      this.$router.push({ path: '/detail/' + id })
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
  padding-top: 60px;
  min-height: 600px;

  .header {
    width: 980px;
    margin: 0 auto;
    // border-bottom: 1px solid #6d757a;
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

  .cate-list {
    width: 980px;
    margin: 0 auto;
    margin-top: 20px;
    display: inline-block;
    .list {
      list-style: none;
      padding: 0;
      li {
        float: left;
        margin-right: 40px;
        margin-bottom: 20px;
        .time {
          font-size: 13px;
          color: #999;
        }
        .bottom {
          margin-top: 13px;
          line-height: 12px;
        }
        .button {
          padding: 0;
          margin-top: 10px;
          float: right;
        }
        .image {
          width: 100%;
          display: block;
        }
      }
    }
    .el-pagination {
      margin-top: 10px;
      text-align: left;
    }
  }
}
</style>

