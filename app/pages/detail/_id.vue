<template>
  <div id="detail">
    <div class="content clearfix">
      <div class="content-left">

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
  background: #F2F3F5;
  padding-top: 80px;

  .content {
    width: 980px;
    height: 1000px;
    margin: 0 auto;

    .content-left {
      width: 680px;
      height: 100px;
      float: left;
      background-color: #FFF;
      border: 1px solid #F2F3F5;
      box-shadow: 0 2px 6px 0 rgba(36, 33, 46, .08);
      border-radius: 10px;
    }

    .content-right {
      width: 240px;
      height: 100px;
      float: left;
      margin-left: 20px;
      background-color: #FFF;
      border: 1px solid #F2F3F5;
      box-shadow: 0 2px 6px 0 rgba(36, 33, 46, .08);
      border-radius: 10px;
    }
  }
}
</style>

