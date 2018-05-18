<template>
  <div id="logistics">
    物流详情页
  </div>
</template>

<script>
export default {
  name: 'logistics-page',
  created: function () {
    console.log(this.$route.query)
  }
}
</script>

<style scoped>

</style>
