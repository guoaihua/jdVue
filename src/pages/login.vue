<template>
  <div id="login">
    <el-form :model="form" status-icon :rules="rules" ref="form" label-width="100px" class="form" v-show="loginShow">
    <el-form-item label="用户名" prop="user">
      <el-input type="text" v-model="form.user" auto-complete="off"></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="pass">
      <el-input type="password" v-model="form.pw" auto-complete="off"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="login">提交</el-button>
      <el-button @click="toRegister">注册</el-button>
    </el-form-item>
    </el-form>
    <el-form :model="form" status-icon :rules="rules" ref="registerForm" label-width="100px" class="form" v-show="!loginShow">
      <el-form-item label="用户名" prop="user">
        <el-input type="text" v-model="form.user" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="收货地址" prop="address">
        <el-input type="text" v-model="form.address" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="手机号" prop="phone">
        <el-input type="text" v-model="form.phone" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pass">
        <el-input type="password" v-model="form.pw" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="checkPass">
        <el-input type="password" v-model="form.checkPass" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="register">提交</el-button>
        <el-button @click="toLogin">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    var validateUser = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入用户名'))
      } else {
        if (this.form.checkPass !== '') {
          this.$refs.form.validateField('checkPass')
        }
        callback()
      }
    }
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.form.checkPass !== '') {
          this.$refs.form.validateField('checkPass')
        }
        callback()
      }
    }
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.form.pw) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      loginShow: true,
      form: {
        user: '',
        checkPass: '',
        pw: '',
        address: '',
        phone: ''
      },
      rules: {
        user: [
          { validator: validateUser, trigger: 'blur' }
        ],
        pass: [
          { validator: validatePass, trigger: 'blur' }
        ],
        checkPass: [
          { validator: validatePass2, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    validate: function (formName) {
      var self = this
      self.$refs[formName].validate((valid) => {
        if (valid) {
          if (formName === 'loginForm') {
            self.login()
          } else {
            self.register()
          }
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    toRegister: function () {
      this.loginShow = false
    },
    toLogin: function () {
      this.loginShow = true
    },
    login: function () {
      var self = this
      self.$axios.get('http://localhost:3001/users/login', {
        params: {
          form: self.form
        }
      }).then(function (res) {
        var data = res.data
        if (data.ret_code === 0) {
          self.$store.dispatch('setSession', data.userInfos.user)
          self.$store.dispatch('setUserInfos', data.userInfos)
        }
        self.$router.push({name: 'my'})
      })
    },
    register: function () {
      var self = this
      self.$axios.get('http://localhost:3001/users/register', {
        params: {
          form: self.form
        }
      }).then(function (res) {
        alert(res.data.info)
        if (res.data.status === 0) {
          self.loginShow = true
        }
      })
    }
  }
}
</script>

<style  lang="scss">
  #login {
    .form {
      width: 90%;
      margin-top: 40px;
    }
  }
</style>
