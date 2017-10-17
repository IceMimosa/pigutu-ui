<template>
  <div class="container">
    <div class="content-top clearfix">
      <el-carousel class="content-top-carousel" height="248px">
        <el-carousel-item v-for="item in 4" :key="item">
          <img
            width=400
            height=248
            src='http://s.moemoe.la/image/2017-10-09/2ca1636e-56d1-4b3a-af42-ca359963c889.jpg'
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
    <div class="content-0 clearfix">
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

      </div>
    </div>
  </div>
</template>

<script>
import AppImage from '~/components/common/AppImage.vue'

export default {
  components: {
    AppImage
  }
}
</script>

<style lang='scss'>
.container {
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: #F7FBFC;
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
  height: 300px;
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
    background-color: black;
    width: 260px;
    height: 320px;
  }
}
</style>
