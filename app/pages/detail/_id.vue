<template>
  <div class="container">

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
.container {
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: #F7FBFC;
  padding-top: 80px;
}
</style>

