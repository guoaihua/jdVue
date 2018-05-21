<template>
    <div id="manage">
    用户管理页面
      <el-table
        :data="tableData"
        style="width: 100%">
        <el-table-column
          label="用户名"
          width="80">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.user }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="用户类型"
          width="80">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.usertype }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="密码"
          width="80">
          <template slot-scope="scope">
              <div slot="reference" class="name-wrapper">
                <span style="margin-left: 10px">{{ scope.row.password }}</span>
              </div>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-form label-position="left" label-width="80px" :model="form" v-show="isShow">
        <el-form-item label="用户名">
          <el-input v-model="form.user "></el-input>
        </el-form-item>
        <el-form-item label="用户类型">
          <el-input v-model="form.usertype "></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="form.password"></el-input>
        </el-form-item>
        <el-button @click="update">点击修改</el-button>
      </el-form>
    </div>
</template>

<script>
export default {
  name: 'manage',
  data () {
    return {
      tableData: [],
      isShow: false,
      form: {
        usertype: '',
        password: '',
        user: ''
      }
    }
  },
  methods: {
    getUsers: function () {
      var self = this
      self.$axios.get('http://localhost:3001/users/getUsers').then(function (res) {
        console.log(res.data)
        self.tableData = res.data
      })
    },
    upodateUser: function (user, pw, usertype) {
      var self = this
      self.$axios.get('http://localhost:3001/users/updateUser', {
        params: {
          user: user,
          password: pw,
          usertype: usertype
        }
      }).then(function (res) {
        console.log(res.data)
        if (res.data.status === 0) {
          self.getUsers()
        }
      })
    },
    update: function () {
      var self = this
      self.upodateUser(self.form.user, self.form.password, self.form.usertype)
    },
    deleteUser: function (user) {
      var self = this
      self.$axios.get('http://localhost:3001/users/deleteUser', {
        params: {
          user: user
        }
      }).then(function (res) {
        console.log(res.data)
        if (res.data.status === 0) {
          self.getUsers()
        }
      })
    },
    handleEdit (index, row) {
      console.log(index, row)
      var self = this
      self.form.user = row.user
      self.form.usertype = row.usertype
      self.form.password = row.password
      self.isShow = true
    },
    handleDelete (index, row) {
      console.log(index, row)
      this.deleteUser(row.user)
    }
  },
  created: function () {
    this.getUsers()
  }
}
</script>

<style scoped lang="scss">
</style>
