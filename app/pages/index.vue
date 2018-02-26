<template>
  <div class="container">
    <div class="content-top clearfix">
      <el-carousel class="content-top-carousel" height="248px">
        <el-carousel-item v-for="carousel in urls.carousel" :key="carousel">
          <img
            width=400
            height=248
            :src="'http://img.pigutu.com/img/'+carousel.coverUrl+'/thumb'"
          />
        </el-carousel-item>
      </el-carousel>
      <app-image
        v-for="hot in urls.hot"
        :key="hot"
        :width="160"
        :height="115"
        :src="'http://img.pigutu.com/img/'+hot.coverUrl+'/thumb'"
      />
    </div>
    <div class="content-0 clearfix" v-for="category in urls.categories" :key="category">
      <div class="mingxing">
        <div class="intro-title">
          <div class="header-line clearfix">
            <a class="name" href="javascript:;">{{category.name}}</a>
            <el-button class="more" size="mini">
              更多<i class="el-icon-arrow-right el-icon--right"></i>
            </el-button>
            <el-button class="refresh" size="mini" type="info">
              <i class="iconfont icon-shuaxin"></i>换一批
            </el-button>
          </div>
        </div>
        <div class="intro-img clearfix">
          <app-image
            v-for="item in category.categoryItem"
            :key="item"
            :width="160"
            :height="115"
            :src="'http://img.pigutu.com/img/'+item.coverUrl+'/thumb'"
          />
        </div>
      </div>
      <div class="view-rank">
        <div class="header-line clearfix">
          <a class="name" href="javascript:;">浏览排行</a>
          <a class="more" href="javascript:;">更多</a>
        </div>
                <div class="rank-ul">
          <ul>
            <li class="has-image" v-for="(item,index) in category.categoryViewCount" :key="item">
              <div v-if="index < 3">
                <i>{{ index+1 }}</i>
              <a class="detail">
                <div class="image">
                  <app-image
                    :width="80"
                    :height="50"
                    :src="'http://img.pigutu.com/img/'+item.coverUrl+'/thumb'"
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
