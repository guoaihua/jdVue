<template>
  <div id="orders">
    订单页面
    <template>
      <el-tabs v-model="activeName" >
        <el-tab-pane label="待发货" name="first">
          <el-row :gutter="20" v-for="(item, index) in state1" :key="item.id" class="list">
            <el-col :span="10"><div class="grid-content bg-purple" @click="lookdetail(index)"><img :src=item.shopImg alt=""></div></el-col>
            <el-col :span="14">
              <div class="grid-content ">{{item.shopTitle}}</div>
              <div class="grid-content ">{{item.shopPrice}}</div>
            </el-col>
          </el-row>
        </el-tab-pane>
        <el-tab-pane label="待收货" name="second">
          <el-row :gutter="20" v-for="item in state2" :key="item.id" class="list">
            <el-col :span="10"><div class="grid-content bg-purple"><img :src=item.shopImg alt=""></div></el-col>
            <el-col :span="14">
              <div class="grid-content ">{{item.shopTitle}}</div>
              <div class="grid-content ">{{item.shopPrice}}</div>
            </el-col>
          </el-row>
        </el-tab-pane>
        <el-tab-pane label="待评价" name="third">
          <el-row :gutter="20" v-for="item in state3" :key="item.id" class="list">
            <el-col :span="10"><div class="grid-content bg-purple" ><img :src=item.shopImg alt=""></div></el-col>
            <el-col :span="14">
              <div class="grid-content ">{{item.shopTitle}}</div>
              <div class="grid-content ">{{item.shopPrice}}</div>
            </el-col>
          </el-row>
        </el-tab-pane>
        <el-tab-pane label="售后" name="fourth">
          <el-row :gutter="20" v-for="item in state4" :key="item.id" class="list">
            <el-col :span="10"><div class="grid-content bg-purple"><img :src=item.shopImg alt=""></div></el-col>
            <el-col :span="14">
              <div class="grid-content ">{{item.shopTitle}}</div>
              <div class="grid-content ">{{item.shopPrice}}</div>
            </el-col>
          </el-row>
        </el-tab-pane>
      </el-tabs>
    </template>
  </div>
</template>

<script>
export default {
  name: 'orders-page',
  data () {
    return {
      activeName: 'first',
      state1: [],
      state2: [],
      state3: [],
      state4: []
    }
  },
  created: function () {
    var self = this
    self.$axios.get('http://localhost:3001/users/getOrders', {
      params: {
        user: self.$store.state.userInfos.user
      }
    }).then(function (res) {
      console.log(res.data)
      res.data.forEach(function (item) {
        switch (item.status) {
          case 0:
            self.state1.push(item)
            break
          case 1:
            self.state2.push(item)
            break
          case 2:
            self.state3.push(item)
            break
          case 3:
            self.state4.push(item)
            break
        }
      })
      console.log(self.state1)
    })
  },
  methods: {
    lookdetail: function (index) {
      var self = this
      self.$router.push({name: 'orders', query: {shops: self.state1[index]}})
    }
  }
}
</script>

<style scoped>

</style>
