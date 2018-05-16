<template>
    <div id="classifyDetail">
      <p>热卖分类</p>
      <div class="img">
        <div v-for="item in imgs " :key="item._id" class="list">
          <img :src=item.imgSrc alt="" @click="getID(item._id)" >
        </div>
    </div>
     </div>
</template>

<script>
export default {
  name: 'classify-detail',
  data () {
    return {
      msg: '这是一个详细页面',
      imgs: [
        {imgSrc: '/static/imgs/classify_close.jpg'}
      ],
      shopID: 0
    }
  },
  watch: {
    '$route': function (to, from) {
      this.shopID = to.query.id
      this.getDetail(this.shopID)
    }
  },
  methods: {
    getDetail: function (id) {
      var self = this
      self.$axios.get('http://localhost:3001/users/getDetail', {
        params: {
          id: id
        }
      }).then(function (res) {
        self.imgs = res.data
      })
    },
    getID: function (id) {
      this.$emit('setID', id)
    }
  },
  created: function () {
    this.getDetail(this.$route.query.id)
  }
}
</script>

<style scoped lang="scss">
    #classifyDetail {
      width: 100%;
      height: 100%;
      background-color: white;
      .img {
        .list {
          display: inline-block;
        }
      }
    }
</style>
