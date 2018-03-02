<template>
  <div id="detail" class="bga-back-top">
    <div class="content clearfix">
      <div class="content-left">
        <div class="main">
          <div class="title">
            <h1>{{detailData.imageDetail.title}}</h1>
          </div>
          <div class="tag clearfix">
            <div v-for="label in detailData.imageDetail.label.split(',')" :key="label" @click="labelClick(label)">{{label}}</div>
          </div>
          <div class="detail clearfix">
            <div class="upload-time">
              <span>上传时间：{{detailData.imageDetail.createTime}}</span>
            </div>
            <div class="visit-info">
              <span>浏览：{{detailData.imageDetail.viewCount}}</span>
              <span>收藏：422</span>
              <span>支持：{{detailData.imageDetail.likeCount}}</span>
            </div>
          </div>
          <div class="images">
            <img v-for="detail in detailData.details" :key="detail" :src="'http://img.pigutu.com/img/'+detail.url+'/pigutu'" alt="" />
          </div>

        </div>
        <div class="recommend clearfix">
          <p class="title">美图推荐</p>
          <button class="more" @click="changeRecommend()">
            <span>换一批</span>
            <i class="el-icon-arrow-right" />
          </button>
          <div class="rec-img clearfix">
            <div class="img-detail" v-for="recommend in detailData.recommends" :key="recommend" @click="goImageSet(recommend.id)">
              <app-image
                :width="200"
                :height="280"
                :src="`http://img.pigutu.com/img/`+recommend.coverUrl+'/pigutu'"
              />
              <p>{{recommend.title}}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="content-right">
        <p class="title">最新点赞</p>
        <div class="content">
          <div class="detail clearfix" v-for="like in detailData.likes" :key="like" @click="goImageSet(like.allImagesId)">
            <app-image
              :width="120"
              :height="100"
              :src="`http://img.pigutu.com/img/`+like.coverUrl+'/thumb'"
            />
            <p class="title">{{like.title}}</p>
          </div>
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
  fetch ({ store, params }) {
    const id = params.id
    return store.dispatch('detail/getDetails', {id: id})
  },
  asyncData ({ params }) {
    return {id: params.id}
  },
  computed: {
    ...mapState('detail', ['detailData'])
    // ...mapState('xxx', ['xx1', 'xx2']), 其他
  },
  methods: {
    goImageSet: function (id) {
      this.$router.push({ path: '/detail/' + id })
    },
    labelClick: function (label) {
      this.$router.push({ path: '/search?pageNo=1&key=' + label })
    },
    changeRecommend: function () {
      this.$store.dispatch('detail/randomRecommend')
    }
  }
}
</script>

<style lang="scss">
$MAIN_COLOR: #6cf;
#detail {
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding-top: 80px;

  .content {
    width: 1080px;
    margin: 0 auto;
    display: inline-block;

    .content-left {
      width: 760px;
      float: left;

      @mixin left-border {
        background-color: #fff;
        border: 1px solid #e2e9ec;
        box-shadow: 0 2px 6px 0 rgba(36, 33, 46, 0.08);
        border-radius: 10px;
        padding: 10px 20px;
      }
      .main {
        min-height: 480px;
        @include left-border();

        .title {
          margin: 0 0 8px 0;
          h1 {
            text-align: left;
            font-size: 24px;
            color: #666;
            font-weight: 400;
          }
        }
        .tag {
          height: 24px;
          div {
            border: 1px solid #f2f3f5;
            background-color: #f2f3f5;
            color: #666;
            cursor: default;
            max-width: 100%;
            padding: 0 14px;
            margin-right: 12px;
            border-radius: 25px;
            vertical-align: middle;
            height: 20px;
            line-height: 18px;
            float: left;
            font-size: 12px;
            font-weight: bold;
          }
        }
        .detail {
          height: 30px;
          margin: 12px 0;
          vertical-align: middle;
          border-bottom: 1px solid #ececec;
          .upload-time {
            height: 24px;
            line-height: 24px;
            float: left;
            font-size: 12px;
            color: #999;
            span {
              font-weight: bold;
            }
          }
          .visit-info {
            height: 24px;
            line-height: 24px;
            float: right;
            font-size: 12px;
            color: #999;
            span {
              padding: 0 6px;
              font-weight: bold;
            }
          }
        }
        .images {
          margin-top: 18px;
          img {
            max-width: 100%;
            height: auto;
            display: block;
            margin-bottom: 32px;
          }
        }
        .el-pagination {
          text-align: right;
        }
      }

      .recommend {
        @include left-border();
        position: relative;
        margin-top: 20px;
        width: 760px;
        height: auto;
        .title {
          text-align: left;
        }
        .more {
          position: absolute;
          top: 12px;
          right: 32px;
          background-color: transparent;
          outline: none;
          border: 1px solid #e1e1e1;
          border-radius: 0 25px 25px 0;
          color: #828282;
          font-weight: 600;
          font-size: 12px;
          box-sizing: border-box;
          cursor: pointer;
          &:hover {
            color: $MAIN_COLOR;
          }
        }
        .rec-img {
          margin-top: 20px;
          .img-detail {
            width: 200px;
            float: left;
            margin-right: 38px;
            margin-bottom: 16px;
            p {
              padding: 2px 4px 0 4px;
              white-space: nowrap;
              text-overflow: ellipsis;
              overflow: hidden;
              text-align: left;
              font-size: 12px;
              color: #666;
            }
          }
        }
      }
    }

    .content-right {
      width: 280px;
      height: auto;
      float: left;
      margin-left: 20px;
      background-color: #fff;
      border: 1px solid #e2e9ec;
      box-shadow: 0 2px 6px 0 rgba(36, 33, 46, 0.08);
      border-radius: 10px;

      .title {
        font-weight: bold;
        text-align: left;
        margin: 20px 0 20px 15px;
      }

      .content {
        width: 260px;
        .detail {
          margin-left: 20px;
          margin-bottom: 14px;
          .app-image {
            float: left;
          }
          p {
            float: left;
            margin: 0 0 0 10px;
            font-size: 12px;
            color: #666;
            width: 100px;
          }
        }
      }
    }
  }
}
</style>

