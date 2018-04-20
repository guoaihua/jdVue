<template>
  <div id="classify">
    <el-container>
      <el-main class="elmain">
        <!--搜索框-->
        <search></search>
        <!--侧边栏和内容-->
        <el-container>
          <el-row class="content">
            <el-col :span="6" class="aside-left">
                 <el-aside width="100%">
            <el-menu
              default-active="1"
              class="el-menu-vertical-demo">
              <el-menu-item :index="index" v-for="{item, index} in nameList" :key="item">
                <i class="el-icon-menu"></i>
                <span slot="title">{{item}}</span>
              </el-menu-item>
            </el-menu>
          </el-aside>
            </el-col>
            <el-col :span="16" :offset="1" class="content-right">
                  <el-main class="detail">
                    <router-view></router-view>
                  </el-main>
            </el-col>
          </el-row>
        </el-container>
      </el-main>
      <el-footer>
        <my-footer></my-footer>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import myFooter from '../components/myFooter'
import search from '../components/search'
export default {
  name: 'classify',
  data () {
    return {
      URL: 'http://localhost:3000/users/',
      nameList: []
    }
  },
  components: {
    myFooter, search
  },
  created: function () {
    var that = this
    that.$axios.get(that.URL + 'class_names').then(function (res) {
      that.nameList = res.data
    })
  }
}
</script>

<style scoped lang="scss">
  #classify{
    width: 100%;
    height: 100%;
  .el-container {
    display: flex;
    width: 100%;
    height: 100%;
    .elmain {
      padding: 50px 0 0 0;
      width: 100%;
      height: 100%;
    }
    #search {
      position: fixed;
      top: 0;
      width: 100%;
      z-index:999;
    }
    .content {
      width: 100%;
      height: 100%;
      background-color: #ccc;
      .aside-left {
        height: 100%;
       overflow-y: auto;
      }
      .content-right {
        height: 100%;
        .detail {
          width: 100%;
          height: 100%;
          background-color: #ccc;
          overflow: hidden;
          padding: 0px;
          overflow-y: auto;
        }
      }
      ul li {
        padding: 0px!important;
        span {
          font-size: 12px;
          font-family: 宋体;
        }
      }
    }

  .el-footer {
    padding: 0;
    background-color: greenyellow;
  }
  }
  }
</style>
