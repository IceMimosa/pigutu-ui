<template>
  <div class="container">
    <div class="content-top clearfix">
      <el-carousel class="content-top-carousel" height="248px">
        <el-carousel-item v-for="carousel in urls.carousel" :key="carousel" style="cursor:pointer">
          <img
            width=400
            height=248
            :src="'http://img.pigutu.com/img/'+carousel.coverUrl+'/carousel'"
            @click="goImageSet(carousel.id)"
          />
        </el-carousel-item>
      </el-carousel>
      <app-image
        v-for="hot in urls.hot"
        :key="hot"
        :width="160"
        :height="115"
        :src="'http://img.pigutu.com/img/'+hot.coverUrl+'/hot'"
        v-on:click.native="goImageSet(hot.id)"
      />
    </div>
    <div class="content-0 clearfix" v-for="category in urls.categories" :key="category">
      <div class="mingxing">
        <div class="intro-title">
          <div class="header-line clearfix">
            <a class="name" href="javascript:;">{{category.name}}</a>
            <el-button class="more" size="mini" @click="moreImage(category.name)">
              更多<i class="el-icon-arrow-right el-icon--right"></i>
            </el-button>
          </div>
        </div>
        <div class="intro-img clearfix">
          <app-image
            :lazy="true"
            v-for="item in category.categoryItem"
            :key="item"
            :width="160"
            :height="115"
            :src="'http://img.pigutu.com/img/'+item.coverUrl+'/hot'"
            v-on:click.native="goImageSet(item.id)"
          />
        </div>
      </div>
      <div class="view-rank">
        <div class="header-line clearfix">
          <a class="name" href="javascript:;">浏览排行</a>
        </div>
                <div class="rank-ul">
          <ul>
            <li class="has-image" v-for="(item,index) in category.categoryViewCount" :key="item"  @click="goImageSet(item.id)">
              <div v-if="index < 3">
                <i>{{ index+1 }}</i>
              <a class="detail">
                <div class="image">
                  <app-image
                    :lazy="true"
                    :width="80"
                    :height="50"
                    :src="'http://img.pigutu.com/img/'+item.coverUrl+'/rank'"
                  />
                </div>
                <div class="text">
                  <p class="title">{{item.title}}</p>
                  <p class="point">浏览：{{item.viewCount}}</p>
                </div>
              </a>
              </div>
              <div v-else>
                <i>{{ index+1 }}</i>
              <a class="detail little">
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
  methods: {
    goImageSet: function (id) {
      this.$router.push({ path: 'detail/' + id })
    },
    moreImage: function (category) {
      this.$router.push({ path: '/category/' + category })
    }
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
          font-family: PingFang SC, Hiragino Sans GB, WenQuanYi Micro Hei,
            Microsoft Yahei, Helvetica Neue, Helvetica, sans-serif;
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
