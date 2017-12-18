<template>
  <div class="container">
    <div class="content-top clearfix">
      <el-carousel class="content-top-carousel" height="248px">
        <el-carousel-item v-for="url in urls" :key="url">
          <img
            width=400
            height=248
            :src="url"
          />
        </el-carousel-item>
      </el-carousel>
      <app-image
        v-for="item in 6"
        :key="item"
        :width="160"
        :height="115"
        :src="`http://s.moemoe.la/image/2017-10-09/2ca1636e-56d1-4b3a-af42-ca359963c889.jpg`"
      />
    </div>
    <div class="content-0 clearfix" v-for="item in 4" :key="item">
      <div class="mingxing">
        <div class="intro-title">
          <div class="header-line clearfix">
            <a class="name" href="javascript:;">明星</a>
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
            v-for="item in 8"
            :key="item"
            :width="160"
            :height="115"
            :src="`http://s.moemoe.la/image/2017-10-17/835fabc6-9c7f-4714-ba97-c7224e1d9b90.png`"
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
            <li class="has-image" v-for="item in 3" :key="item">
              <i>{{ item }}</i>
              <a class="detail">
                <div class="image">
                  <app-image
                    :width="80"
                    :height="50"
                    :src="`http://s.moemoe.la/image/2017-10-17/835fabc6-9c7f-4714-ba97-c7224e1d9b90.png`"
                  />
                </div>
                <div class="text">
                  <p class="title">这首曲子成就了多少经典，至今无法被超越</p>
                  <p class="point">综合评分：21.0万</p>
                </div>
              </a>
            </li>
            <li class="no-image" v-for="item in 2" :key="item">
              <i>{{ item }}</i>
              <a class="detail little">
                <div class="text">
                  <p class="title">这首曲子成就了多少经典，至今无法被超越</p>
                </div>
              </a>
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
$MAIN_COLOR: #6CF;
.container {
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: #F2F3F5;
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
      background-color: rgba(31, 45, 61, .6);
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
          font-family: PingFang SC,Hiragino Sans GB,WenQuanYi Micro Hei,Microsoft Yahei,Helvetica Neue,Helvetica,sans-serif;          transition: color .3s ease;
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
