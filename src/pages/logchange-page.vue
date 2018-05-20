<template>
  <div id="logisticsChange">
    物流信息更新界面/ 扫码获取单号
    <el-form label-position="left" label-width="80px" :model="form">
      <el-form-item label="订单号">
        <el-input v-model="form.orderSid"></el-input>
      </el-form-item>
      <el-form-item label="订单号">
        <el-button @click="query">点击提交</el-button>
      </el-form-item>
    </el-form>
    <div>
      <el-steps direction="vertical" :active="1" v-for="item in orders" :key="item.id">
        <el-step :title=item.time :description=item.infos></el-step>
      </el-steps>
    </div>

    <el-form label-position="left" label-width="80px" :model="form2">
      <el-form-item label="最新地址">
        <el-input v-model="form2.adchange"></el-input>
      </el-form-item>
      <el-form-item label="订单号">
        <el-button @click="change">点击提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'logistics-change',
  data () {
    return {
      form: {
        orderSid: '5b01761cd6a54804c806a5f6'
      },
      form2: {
        adchange: ''
      },
      orders: []
    }
  },
  methods: {
    getLogInfos: function (sid) {
      var self = this
      self.$axios.get('http://localhost:3001/users/getOrderInfos', {
        params: {
          sid: sid
        }
      }).then(function (res) {
        console.log(res.data)
        self.orders = res.data.logistics
      })
    },
    query: function () {
      this.getLogInfos(this.form.orderSid)
    },
    change: function () {
      var self = this
      self.$axios.get('http://localhost:3001/users/changeOrder', {
        params: {
          sid: this.form.orderSid,
          infos: self.form2.adchange
        }
      }).then(function (res) {
        if (res.data.status === 0) {
          self.getLogInfos(self.form.orderSid)
          alert(res.data.infos)
        }
      })
    }
  },
  created: function () {
    // 默认获取仓库第一单
    this.getLogInfos(this.form.orderSid)
  }
}
</script>

<style scoped>

</style>
