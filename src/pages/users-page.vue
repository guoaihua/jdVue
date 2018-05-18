<template>
    <div id="users-page">
      用户界面
      <div class="card_items" >
        <div class="item_header">
          <span>我的订单</span>
          <span>查看更多订单</span>
        </div>
        <div class="item_content">
          <div class="item" @click="look">
            <el-badge :value="value1" class="item">
            <icon class="deliverGoods-icon" name="deliverGoods"></icon>
            <div class="item_text">待发货</div>
            </el-badge>
          </div>
          <div class="item" @click="look">
            <el-badge :value="value2" class="item">
            <icon class="deliverGoods-icon" name="deliverGoods"></icon>
            <div class="item_text">待收货</div>
            </el-badge>
          </div>
          <div class="item" @click="look">
            <el-badge :value="value3" class="item">
            <icon class="deliverGoods-icon" name="deliverGoods"></icon>
            <div class="item_text">待评价</div>
            </el-badge>
          </div>
          <div class="item" @click="look">
            <el-badge :value="value4" class="item">
            <icon class="deliverGoods-icon" name="deliverGoods"></icon>
            <div class="item_text">退款/售后</div>
            </el-badge>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'users-page',
  data () {
    return {
      value1: 0,
      value2: 0,
      value3: 0,
      value4: 0
    }
  },
  created: function () {
    var self = this
    self.$axios.get('http://localhost:3001/users/getOrderStatus', {
      params: {
        user: self.$store.state.userInfos.user
      }
    }).then(function (res) {
      console.log(res.data)
      res.data.forEach(function (item) {
        switch (item.status) {
          case 0:
            self.value1++
            break
          case 1:
            self.value2++
            break
          case 2:
            self.value3++
            break
          case 3:
            self.value4++
            break
        }
      })
    })
  },
  methods: {
    look: function () {
      this.$router.push({name: 'orders'})
    }
  }
}
</script>

<style scoped lang="scss">
  #users-page {
    width: 100%;
    .card_items {
      width: 92%;
      margin: 10px 4%;
      border-radius: 10px;
      background-color: #ffffff;
      .item_header {
        display: flex;
        justify-content: space-between;
        height: 50px;
        line-height: 50px;
        border-bottom: 1px solid #f7f7f7;
      }
      .item_content {
        display: flex;
        justify-content: space-around;
        height: 70px;
          .item_text {
            font-size: 14px;
            font-family: 宋体;
          }
          svg {
            width: 25px;
            height: 25px;
        }
      }
    }
  }
</style>
