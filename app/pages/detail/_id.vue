<template>
  <div class="container">
    {{ id }}
  </div>
</template>

<script>
export default {
  asyncData ({ params }) {
    return {
      id: params.id
    }
  }
}
</script>

<style lang="sass">

</style>

