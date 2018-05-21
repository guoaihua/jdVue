<template>
  <div id="shop-page">
   <div>资料修改</div>
    <el-form label-position="left" label-width="80px" :model="form1">
      <el-form-item label="店铺名称">
        <el-input v-model="form1.shopName"></el-input>
      </el-form-item>
      <el-button @click=" changeName">点击修改</el-button>
    </el-form>
    <div>商品上传</div>
    <el-form label-position="left" label-width="80px" :model="form">
      <el-form-item label="商品名字">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="商品介绍">
        <el-input v-model="form.title"></el-input>
      </el-form-item>
      <el-form-item label="商品价格">
        <el-input v-model="form.price"></el-input>
      </el-form-item>
      <el-form-item label="发货地址">
        <el-input v-model="form.address"></el-input>
      </el-form-item>
    </el-form>
    <div class="form">
      <input type="file" ref="file">
      <el-button  @click="submit">点击上传</el-button>
    </div>
    <div>商品列表</div>
      <el-table
        :data="goodsData"
        stripe
        style="width: 100%">
        <el-table-column
          prop="time"
          label="日期"
          width="180">
        </el-table-column>
        <el-table-column
          prop="name"
          label="名字"
          width="180">
        </el-table-column>
        <el-table-column
          prop="price"
          label="价格">
        </el-table-column>
      </el-table>
  </div>
</template>

<script>
export default {
  name: 'shops-page',
  data () {
    return {
      form: {
        name: '',
        title: '',
        price: '',
        address: ''
      },
      form1: {
        shopName: ''
      },
      goodsData: []
    }
  },
  methods: {
    submit: function () {
      var self = this
      console.log(this.$refs.file.files[0])
      let data = new FormData()
      data.append('avatar', self.$refs.file.files[0])
      console.log()
      self.$axios.post('http://localhost:3001/users/addGoods', data, {
        params: {
          data: self.form
        }
      }, {
        headers: {'content-type': 'multipart/form-data'}
      }).then(function (res) {
        console.log(res)
      })
    },
    changeName: function () {
      var self = this
      self.$axios.get('http://localhost:3001/users/changeName', {
        params: {
          shopName: self.form1.shopName
        }
      }).then(function (res) {
        console.log(res)
      })
    }
  },
  created: function () {
    var self = this
    var user = self.$store.state.userInfos.name
    self.$axios.get('http://localhost:3001/users/getGoods', {
      params: {
        user: user
      }
    }).then(function (res) {
      self.goodsData = res.data
    })
  }
}
</script>

<style scoped lang="scss">

</style>
