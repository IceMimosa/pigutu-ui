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
        :width="160"
        :height="115"
        :src="`http://s.moemoe.la/image/2017-10-09/2ca1636e-56d1-4b3a-af42-ca359963c889.jpg`"
      />
      <app-image
        :width="160"
        :height="115"
        :src="`http://s.moemoe.la/image/2017-10-09/2ca1636e-56d1-4b3a-af42-ca359963c889.jpg`"
      />
      <app-image
        :width="160"
        :height="115"
        :src="`http://s.moemoe.la/image/2017-10-09/2ca1636e-56d1-4b3a-af42-ca359963c889.jpg`"
      />
      <app-image
        :width="160"
        :height="115"
        :src="`http://s.moemoe.la/image/2017-10-09/2ca1636e-56d1-4b3a-af42-ca359963c889.jpg`"
      />
      <app-image
        :width="160"
        :height="115"
        :src="`http://s.moemoe.la/image/2017-10-09/2ca1636e-56d1-4b3a-af42-ca359963c889.jpg`"
      />
      <app-image
        :width="160"
        :height="115"
        :src="`http://s.moemoe.la/image/2017-10-09/2ca1636e-56d1-4b3a-af42-ca359963c889.jpg`"
      />
    </div>
    <div style="background-color: grey; height: 200px; width: 200px; display:block;">
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
  padding-left: 130px;
}
.content-top {
  width: 980px;
  height: 300px;
  .content-top-carousel {
    float: left;
    width: 400px;
    border-radius: 4px;
    background-color: #99a9bf;
    h3 {
      line-height: 210px;
    }
    .el-carousel__arrow {
      background-color: rgba(31, 45, 61, .6);
    }
  }
  .app-image {
    float: left;
    margin-left: 24px;
    margin-bottom: 12px;
  }
}
</style>
