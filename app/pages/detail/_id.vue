<template>
  <div id="detail" class="bga-back-top">
    <div class="content clearfix">
      <div class="content-left">
        <div class="main">
          <div class="title">
            <h1>{{detailData.imageDetail.title}}</h1>
          </div>
          <div class="tag clearfix">
            <div v-for="label in detailData.imageDetail.label.split(',')" :key="label" @click="labelClick(label)" style="cursor:pointer">{{label}}</div>
          </div>
          <div class="detail clearfix">
            <div class="upload-time">
              <span>上传时间：{{detailData.imageDetail.createTime}}</span>
              <el-button type="text" class="button" @click="addLikeCount(detailData.imageDetail.id)">喜欢({{detailData.imageDetail.likeCount}})</el-button>
            </div>
            <div class="visit-info">
              <span>浏览：{{detailData.imageDetail.viewCount}}</span>
              <span>收藏：422</span>
              <span>支持：{{detailData.imageDetail.likeCount}}</span>
            </div>
          </div>
          <div class="images">
            <img v-for="detail in showData" :key="detail" v-lazy="`//img.pigutu.com/img/${detail.url}/pigutu`" alt="" />
          </div>

        </div>
        <div class="recommend clearfix">
          <p class="title">美图推荐</p>
          <button class="more" @click="changeRecommend()">
            <span>换一批</span>
            <i class="el-icon-arrow-right" />
          </button>
          <div class="rec-img clearfix">
            <div class="img-detail" v-for="recommend in detailData.recommends" :key="recommend">
              <router-link target="_blank" :to="'/detail/' + recommend.id">
                <app-image
                  :lazy="true"
                  :width="200"
                  :height="280"
                  :src="`//img.pigutu.com/img/${recommend.coverUrl}/recommend`"
                />
              </router-link>
              <p>{{recommend.title}}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="content-right">
          <div class="content-comment">
            <p class="title">评论</p>
            <div class="comment">
              <div class="comment-item" v-for="(comment,index) in detailData.comments" :key="index">
                <p v-if="comment.fromUser == ''">游客</p>
                <p v-else>
                  {{ comment.fromUser}}
                </p>
                {{ comment.content }}
                <p class="comment-footer">#{{ index+1}}   {{comment.time | moment}}</p>
              </div>
            </div>
            <el-input
              class="text-input"
              type="textarea"
              :rows="4"
              placeholder="请输入内容"
              v-model="commentContent">
            </el-input>
            <el-button type="primary" v-on:click="comment" class="commentBtn">评论</el-button>
          </div>
          <div class="content-like">
            <p class="title">最新点赞</p>
            <div class="content">
              <div class="detail clearfix" v-for="like in detailData.likes" :key="like">
                <router-link target="_blank" :to="'/detail/' + like.allImagesId">
                  <app-image
                    :width="120"
                    :height="100"
                    :src="`//img.pigutu.com/img/`+like.coverUrl+'/like'"
                  />
                </router-link>
                <p class="title">{{like.title}}</p>
              </div>
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
  data () {
    return {
      title: '美女图片 - Pigutu - 明星美女写真专辑 高清性感美女图片欣赏',
      commentContent: ''
    }
  },
  fetch ({ store, params }) {
    const id = params.id
    return store.dispatch('detail/getDetails', {id: id})
  },
  asyncData ({ params }) {
    return {id: params.id}
  },
  computed: {
    ...mapState('detail', ['detailData', 'showData', 'recommendData'])
    // ...mapState('xxx', ['xx1', 'xx2']), 其他
  },
  methods: {
    goImageSet: function (id) {
      this.$router.push({ path: '/detail/' + id })
    },
    labelClick: function (label) {
      location.href = '/search?pageNo=1&key=' + label
    },
    changeRecommend: function () {
      this.$store.dispatch('detail/randomRecommend')
    },
    addLikeCount: function (id) {
      this.$store.dispatch('detail/addLikeCount', {id: id})
    },
    comment: function () {
      const commentContent = this.commentContent
      this.$store.dispatch('detail/addComment', { imageId: this.id, commentContent: commentContent })
      this.commentContent = ''
    }
  },
  head () {
    return {
      title: this.detailData.imageDetail.title,
      meta: [
        { charset: 'utf-8' },
        { name: 'keywords', content: '美女,图片,美女图片,美女写真,私房,写真,妹子图,' + this.detailData.imageDetail.label },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: this.detailData.imageDetail.title }
      ]
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
              padding: 0 6px;
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
      float: left;
      margin-left: 20px;
      width: 280px;
      height: auto;
        .title {
          font-weight: bold;
          text-align: left;
          margin: 20px 0 20px 15px;
        }
        .content-comment{
          background-color: #fff;
          border: 1px solid #e2e9ec;
          box-shadow: 0 2px 6px 0 rgba(36, 33, 46, 0.08);
          border-radius: 10px;
          .comment {
            width: auto;
            height: auto;
            text-align: left;
            margin: 20px 0 20px 15px;
            .comment-item {
              p {
                font-size: 14px;
                color: #f25d8e;
              }
              .comment-footer {
                font-size: 12px;
                color: #99a2aa;
              }
              width: 240px;
              margin-top: 20px;
            }
          }
          .commentBtn {
            margin-top: 10px;
            margin-bottom: 10px;
            text-align: right;
          }
          .text-input {
            width: 260px;
            margin-left:10px;
            margin-right:10px;
          }
      }
      .content-like{
        margin-top: 20px;
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
}
</style>

