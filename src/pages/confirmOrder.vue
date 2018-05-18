<template>
    <div id="confirm">
     <!-- 收货人信息-->
      <el-row :gutter="20">
        <el-col :span="12"><div class="grid-content bg-purple">收件人：{{userInfos.user}}</div></el-col>
        <el-col :span="12"><div class="grid-content bg-purple">{{userInfos.phone}}</div></el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="12"><div class="grid-content bg-purple"></div></el-col>
        <el-col :span="12"><div class="grid-content bg-purple">{{userInfos.address}}</div></el-col>
      </el-row>
      <!--商品信息-->
      <el-row :gutter="20" v-for="item in shops" :key="item.id" class="list">
        <el-col :span="10"><div class="grid-content bg-purple"><img :src=item.imgSrc alt=""></div></el-col>
        <el-col :span="14">
          <div class="grid-content ">{{item.title}}</div>
          <div class="grid-content ">{{item.price}}</div>
        </el-col>
      </el-row>
      <div class="footer">
        <el-row :gutter="20" justify="space-between">
          <el-col :span="8"><div class="grid-content bg-purple">合计：{{count}}</div></el-col>
          <el-col :span="8"><div class="grid-content bg-purple"><el-button @click="submitOrder">提交订单</el-button></div></el-col>
          <el-col :span="8"><div class="grid-content bg-purple"><el-button @click="back">返回主页</el-button></div></el-col>
        </el-row>
      </div>
    </div>
</template>

<script>
export default {
  name: 'confirm-order',
  data () {
    return {
      userInfos: {},
      count: 0,
      shops: []
    }
  },
  created: function () {
    var self = this
    self.userInfos = self.$store.state.userInfos
    self.count = self.$route.query.count
    self.shops = self.$route.query.shops
    console.log(self.$route.query)
  },
  methods: {
    back: function () {
      var self = this
      self.$router.push({name: 'appMain'})
    },
    submitOrder: function () {
      // 每个商品创建一个订单
      var self = this
      var orders = []
      self.shops.forEach(function (item, index) {
        var order = {}
        order.goodsInfos = item
        order.customer = self.userInfos
        orders.push(order)
      })
      console.log(orders)
      // 提交订单
      self.$axios.post('http://localhost:3001/users/createOrder', {
        params: {
          orders: orders
        }
      }).then(function (res) {
        if (res.data.status === 0) {
          alert('success')
          self.$router.push({name: 'appMain'})
        }
      })
    }
  }
}
</script>

<style scoped lang="scss">
    #confirm {
      width: 100%;
      height: 100%;
      font-size: 20px;
      font-family: 宋体;
      overflow: hidden;
      .list {
        background-color: #ccc;
      }
      .footer {
        position: fixed;
        left: 0;
        bottom: 0;
      }
    }
</style>
