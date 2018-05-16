<template>
    <div id="goodsDetail">
      <el-card :body-style="{ padding: '0px' }">
        <img :src=img.imgSrc class="image">
        <div style="padding: 14px;">
          <div class="bottom clearfix">
            <span>{{img.price}}元</span>
            <time class="time">{{img.time}}</time>
          </div>
        </div>
      </el-card>
      <el-row :gutter="20">
        <el-col :span="24"><div class="grid-content bg-purple">{{img.title}}</div></el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="24"><div class="grid-content bg-purple">评论专区</div></el-col>
      </el-row>
    <div class="footer">
      <el-button @click="addTo">加入购物车</el-button>
      <el-button>立即购买</el-button>
      <el-button @click="back">返回主页</el-button>
    </div>
    </div>
</template>

<script>
export default {
  name: 'goods-detail',
  data () {
    return {
      img: {}
    }
  },
  created: function () {
    var self = this
    this.$axios.get('http://localhost:3001/users/getGoodsInfos', {
      params: {
        id: self.$route.query.id
      }
    }).then(function (res) {
      self.img = res.data[0]
    })
  },
  methods: {
    addTo: function () {
      var self = this
      self.$store.dispatch('setShops', self.img)
    },
    back: function () {
      var self = this
      self.$router.push({name: 'appMain'})
    }
  }
}
</script>

<style scoped lang="scss">
  #goodsDetail {
    overflow: hidden;
    .image {
      width: 40%!important;
    }
    .footer {
      position: fixed;
      width: 100%;
      bottom: 4px;
      left: 0;
    }
  }
</style>
