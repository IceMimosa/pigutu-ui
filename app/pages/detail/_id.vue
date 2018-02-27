<template>
  <div id="detail" class="bga-back-top">
    <div class="content clearfix">
      <div class="content-left">
        <div class="main">
          <div class="title">
            <h1>星座大全大全</h1>
          </div>
          <div class="tag clearfix">
            <div>双子座</div>
            <div>双子座</div>
            <div>双子座</div>
          </div>
          <div class="detail clearfix">
            <div class="upload-time">
              <span>上传时间：2017-10-27 13:22:50</span>
            </div>
            <div class="visit-info">
              <span>浏览：78000</span>
              <span>收藏：422</span>
              <span>支持：97</span>
            </div>
          </div>
          <div class="images">
            <img v-for="detail in detailData.details" :key="detail" :src="'http://img.pigutu.com/img/'+detail.url+'/pigutu'" alt=""  />
          </div>
          <el-pagination
            small
            layout="prev, pager, next"
            :total="50">
          </el-pagination>
        </div>
        <div class="recommend clearfix">
          <p class="title">美图推荐</p>
          <button class="more">
            <span>更多</span>
            <i class="el-icon-arrow-right" />
          </button>
          <div class="rec-img clearfix">
            <div class="img-detail" v-for="item in 4" :key="item">
              <app-image
                :width="200"
                :height="120"
                :src="`//s.moemoe.la/image/2017-10-25/1919b8d9-01b9-42d2-a91e-28c10837751b.png`"
              />
              <p>这首曲子成就了多少经典，至今无法被超越</p>
            </div>
          </div>
        </div>
      </div>
      <div class="content-right">
        <p class="title">最新点赞</p>
        <div class="content">
          <div class="detail clearfix" v-for="item in 6" :key="item">
            <app-image
              :width="120"
              :height="80"
              :src="`//s.moemoe.la/image/2017-10-25/1919b8d9-01b9-42d2-a91e-28c10837751b.png`"
            />
            <p class="title">这首曲子成就了多少经典，至今无法被超越</p>
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
  fetch ({ store }) {
    return store.dispatch('detail/getDetails')
  },
  computed: {
    ...mapState('detail', ['detailData'])
    // ...mapState('xxx', ['xx1', 'xx2']), 其他
  }
}
</script>

<style lang="scss">
$MAIN_COLOR: #6CF;
#detail{
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
        background-color: #FFF;
        border: 1px solid #E2E9EC;
        box-shadow: 0 2px 6px 0 rgba(36, 33, 46, .08);
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
            border: 1px solid #F2F3F5;
            background-color: #F2F3F5;
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
          border-bottom: 1px solid #ECECEC;
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
      background-color: #FFF;
      border: 1px solid #E2E9EC;
      box-shadow: 0 2px 6px 0 rgba(36, 33, 46, .08);
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

