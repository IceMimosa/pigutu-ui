<template>
  <div id="detail">
    <div class="content clearfix">
      <div class="content-left">
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
          <img src="http://i0.hdslb.com/bfs/vc/05cec4d484508ef72e2fb03dafe90c49619ecc42.jpg" alt=""/>
          <img src="http://i0.hdslb.com/bfs/vc/05cec4d484508ef72e2fb03dafe90c49619ecc42.jpg" alt=""/>
          <img src="http://i0.hdslb.com/bfs/vc/05cec4d484508ef72e2fb03dafe90c49619ecc42.jpg" alt=""/>
          <img src="http://i0.hdslb.com/bfs/vc/05cec4d484508ef72e2fb03dafe90c49619ecc42.jpg" alt=""/>
          <img src="http://i0.hdslb.com/bfs/vc/05cec4d484508ef72e2fb03dafe90c49619ecc42.jpg" alt=""/>
        </div>
      </div>
      <div class="content-right">

      </div>
    </div>
  </div>
</template>

<script>
export default {
  fetch ({ params }) {
    // const id = params.id
  },
  asyncData ({ params }) {
    return {
      id: params.id
    }
  }
}
</script>

<style lang="scss">
#detail{
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding-top: 80px;

  .content {
    width: 980px;
    margin: 0 auto;
    display: inline-block;

    .content-left {
      width: 720px;
      min-height: 480px;
      float: left;
      background-color: #FFF;
      border: 1px solid #E2E9EC;
      box-shadow: 0 2px 6px 0 rgba(36, 33, 46, .08);
      border-radius: 10px;
      padding: 10px 20px;

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
    }

    .content-right {
      width: 240px;
      height: 400px;
      float: left;
      margin-left: 20px;
      background-color: #FFF;
      border: 1px solid #E2E9EC;
      box-shadow: 0 2px 6px 0 rgba(36, 33, 46, .08);
      border-radius: 10px;
    }
  }
}
</style>

