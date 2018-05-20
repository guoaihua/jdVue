<template>
  <div id="logistics">
    物流详情页
    <div class="steps">
      <el-steps :active="1">
        <el-step title="步骤 1" icon="el-icon-edit"></el-step>
        <el-step title="步骤 2" icon="el-icon-upload"></el-step>
        <el-step title="步骤 3" icon="el-icon-picture"></el-step>
      </el-steps>
    </div>
    <div>
      <el-steps direction="vertical" :active="1" v-for="item in orders" :key="item.id">
        <el-step :title=item.time :description=item.infos></el-step>
      </el-steps>
    </div>
  </div>
</template>

<script>
export default {
  name: 'logistics-page',
  data () {
    return {
      orders: []
    }
  },
  created: function () {
    console.log(this.$route.query)
    this.getLogInfos(this.$route.query.shops._id)
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
    }
  }
}
</script>

<style scoped lang="scss">
  #logistics {
    .steps {

    }
  }
</style>
