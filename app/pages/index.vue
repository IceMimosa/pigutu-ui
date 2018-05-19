<template>
  <div class="container">
    <div class="content-top clearfix">
      <el-carousel class="content-top-carousel" height="248px">
        <el-carousel-item v-for="carousel in urls.carousel" :key="carousel" style="cursor:pointer">
          <router-link target="_blank" :to="'/detail/' + carousel.id">
            <img width=400 height=248 :src="'//img.pigutu.com/img/'+carousel.coverUrl+'/carousel'" />
          </router-link>
        </el-carousel-item>
      </el-carousel>
      <router-link target="_blank" v-for="hot in urls.hot" :key="hot" :to="'/detail/' + hot.id">
        <app-image :width="160" :height="115" :src="'//img.pigutu.com/img/'+hot.coverUrl+'/hot'" />
      </router-link>
    </div>
    <div class="content-0 clearfix" v-for="category in urls.categories" :key="category">
      <div class="mingxing">
        <div class="intro-title">
          <div class="header-line clearfix">
            <a class="name" href="javascript:;">{{category.name}}</a>
            <router-link target="_blank" :to="'/category/' + category.name">
              <el-button class="more" size="mini">
                更多
                <i class="el-icon-arrow-right el-icon--right"></i>
              </el-button>
            </router-link>
          </div>
        </div>
        <div class="intro-img clearfix">
          <router-link target="_blank" v-for="item in category.categoryItem" :key="item" :to="'/detail/' + item.id">
            <app-image :lazy="true" :width="160" :height="115" :src="'//img.pigutu.com/img/'+item.coverUrl+'/hot'" />
          </router-link>
        </div>
      </div>
      <div class="view-rank">
        <div class="header-line clearfix">
          <a class="name" href="javascript:;">浏览排行</a>
        </div>
        <div class="rank-ul">
          <ul>
            <li class="has-image" v-for="(item,index) in category.categoryViewCount" :key="item" >
              <div v-if="index < 3">
                <i>{{ index+1 }}</i>
                <a class="detail" target="_blank" :href="'/detail/' + item.id">
                  <div class="image">
                    <app-image :lazy="true" :width="80" :height="50" :src="'//img.pigutu.com/img/'+item.coverUrl+'/rank'" />
                  </div>
                  <div class="text">
                    <p class="title">{{item.title}}</p>
                    <p class="point">浏览：{{item.viewCount}}</p>
                  </div>
                </a>
              </div>
              <div v-else>
                <i>{{ index+1 }}</i>
                <a class="detail little" target="_blank" :href="'/detail/' + item.id">
                  <div class="text">
                    <p class="title">{{item.title}}</p>
                  </div>
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
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
      return store.dispatch('getData')
    },
    computed: {
      ...mapState({
        urls: 'urls'
      })
    },
    data () {
      return {
        title: '美女图片 - Pigutu - 明星美女写真专辑 高清性感美女图片欣赏'
      }
    },
    head () {
      return {
        title: this.title,
        meta: [
          { charset: 'utf-8' },
          { name: 'keywords', content: '美女,图片,美女图片,美女写真,私房,写真,妹子图' },
          { name: 'viewport', content: 'width=device-width, initial-scale=1' },
          { hid: 'description', name: 'description', content: 'pigutu美女图片，收集精美的美女图片，包括明星美女写真图片专辑，大学校花美女贴图，性感车模写真等各类最新最好看的性感美女图片。' }
        ]
      }
    }
  }
</script>

<style lang='scss'>
  $MAIN_COLOR: #6cf;
  .container {
    margin: 0 auto;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding-top: 80px;
  }

  .content-top {
    width: 980px;
    height: 300px;
    margin: 0 auto;
    .content-top-carousel {
      float: left;
      width: 400px;
      border-radius: 4px;
      background-color: #99a9bf;
      margin-right: 20px;
      h3 {
        line-height: 210px;
      }
      .el-carousel__arrow {
        background-color: rgba(31, 45, 61, 0.6);
      }
    }
    .app-image {
      float: left;
      margin-left: 26px;
      margin-bottom: 12px;
    }
  }

  .content-0 {
    width: 980px;
    height: 340px;
    margin: 0 auto;
    .mingxing {
      float: left;
      width: 720px;
      .intro-title {
        height: 24px;
      }
      .header-line {
        .name {
          font-size: 24px;
          line-height: 24px;
          float: left;
          color: #222;
          text-decoration: none;
          margin-left: 8px;
        }
        i {
          font-size: 12px;
        }
        .more {
          float: right;
          margin-right: 20px;
        }
        .refresh {
          float: right;
          margin-right: 12px;
        }
      }
      .intro-img {
        height: 300px;
        margin-top: 12px;
        .app-image {
          float: left;
          margin-bottom: 12px;
          margin-right: 20px;
        }
      }
    }
    .view-rank {
      float: left;
      width: 260px;
      height: 320px;
      .header-line {
        height: 24px;
        a {
          text-decoration: none;
        }
        .name {
          font-size: 20px;
          line-height: 20px;
          float: left;
          color: #222;
          margin-left: 8px;
        }
        .more {
          font-size: 16px;
          line-height: 20px;
          float: right;
          color: $MAIN_COLOR;
        }
      }
      .rank-ul {
        margin-top: 10px;
        ul {
          list-style: none;
          padding-left: 10px;
          li {
            height: 60px;
            a {
              cursor: pointer;
            }
          }
        }
        i {
          display: block;
          width: 18px;
          height: 18px;
          background: #f25d8e;
          color: #fff;
          font-size: 12px;
          text-align: center;
          border-radius: 4px;
          font-weight: bolder;
          font-style: normal;
          float: left;
        }
        .detail {
          float: left;
          margin-left: 10px;
          .image {
            float: left;
          }
          .text {
            float: left;
            width: 130px;
            text-align: left;
            margin-left: 10px;
            font-family: PingFang SC, Hiragino Sans GB, WenQuanYi Micro Hei, Microsoft Yahei, Helvetica Neue, Helvetica, sans-serif;
            transition: color 0.3s ease;
            .title {
              height: 36px;
              line-height: 18px;
              font-size: 12px;
              color: #222;
            }
            .point {
              font-size: 12px;
              line-height: 12px;
              color: #99a2aa;
              height: 12px;
              margin-top: 5px;
            }
          }
        }
        .no-image {
          height: 35px;
        }
        .little {
          margin-left: 0;
          .text {
            width: 210px;
          }
        }
      }
    }
  }
</style>
