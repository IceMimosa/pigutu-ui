<template>
  <div id="update">
    <div class="header">
      <ul class="tabs clearfix">
        <li><nuxt-link to="/">全部</nuxt-link></li>
        <li v-for="item in categoryData" v-bind:class="{active: name == item.name}" :key="item">
          <nuxt-link :to="`/category/${item.name}`">{{ item.name }}</nuxt-link>
        </li>
      </ul>
    </div>
    <div class="cate-list">
      <ul class="list clearfix">
        <li v-for="(imageList,index) in updateImg.data" :key="imageList" >
          <el-card :body-style="{ padding: '0px', width: '200px' }">
            <router-link target="_blank" :to="'/detail/' + imageList.id">
              <img :src="'http://img.pigutu.com/img/'+imageList.coverUrl+'/thumb'" class="image">
            </router-link>
            <div style="padding: 14px;">
              <p style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;">{{imageList.title}}</p>
              <div class="bottom clearfix">
                <time class="time"></time>
                <el-button type="text" class="button" @click="addLikeCount(index)">喜欢({{imageList.likeCount}})</el-button>
              </div>
            </div>
          </el-card>
        </li>
      </ul>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="pageNo"
        :page-size="20"
        layout="prev, pager, next"
        :total="updateImg.total">
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
  fetch ({ store, params, route }) {
    const pageNo = route.query.pageNo || 1
    return store.dispatch('update/getUpdateImg', {pageNo: pageNo})
  },
  computed: {
    ...mapState('update', ['updateImg'])
  },
  asyncData ({ query }) {
    console.log('query pageNo= ' + query.pageNo)
    const pageNo = parseInt(query.pageNo)
    return {pageNo: pageNo}
  },
  methods: {
    goImageSet: function (id) {
      this.$router.push({ path: '/detail/' + id })
    },
    handleCurrentChange: function (pageNo) {
      location.href = `/update?pageNo=${pageNo}`
    },
    addLikeCount: function (index) {
      const id = this.updateImg.data[index].id
      this.$store.dispatch('update/addLikeCount', {index: index, id: id})
    }
  },
  data () {
    return {
      title: '美女图片 - Pigutu - 明星美女写真专辑 高清性感美女图片欣赏',
      keywords: '美女,图片,美女图片,美女写真,私房,写真,妹子图',
      description: 'pigutu美女图片，收集精美的美女图片，包括明星美女写真图片专辑，大学校花美女贴图，性感车模写真等各类最新最好看的性感美女图片。',
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
  },
  head () {
    return {
      title: this.title,
      meta: [
        { charset: 'utf-8' },
        { name: 'keywords', content: this.keywords },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: this.description }
      ]
    }
  }
}
</script>

<style lang="scss">
$MAIN_COLOR: #6CF;
#update{
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
          cursor: pointer;
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

