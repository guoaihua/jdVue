<template>
  <div id="classify">
    <el-container v-show="!isDetail">
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
              @select="select"
              class="el-menu-vertical-demo">
              <div  v-for="item in nameList" :key="item._id">
              <el-menu-item :index="item._id">
               <!-- <i class="el-icon-menu"></i>-->
                <span slot="title">{{item.shopName}}</span>
              </el-menu-item>
              </div>
            </el-menu>
          </el-aside>
            </el-col>
            <el-col :span="16" :offset="1" class="content-right">
                  <el-main class="detail">
                    <router-view @setID="getID"></router-view>
                  </el-main>
            </el-col>
          </el-row>
        </el-container>
      </el-main>
      <el-footer>
        <my-footer></my-footer>
      </el-footer>
    </el-container>
    <router-view v-show="isDetail"></router-view>
  </div>
</template>

<script>
import myFooter from '../components/myFooter'
import search from '../components/search'
export default {
  name: 'classify',
  data () {
    return {
      URL: 'http://localhost:3001/users/',
      nameList: [],
      isDetail: false
    }
  },
  methods: {
    select: function (index, indexPath) {
      var self = this
      self.$router.push({name: 'classifyDetail', query: {id: index}})
    },
    getID: function (id) {
      var self = this
      self.isDetail = true
      self.$router.push({name: 'goodsDetail', query: {id: id}})
    }
  },
  components: {
    myFooter, search
  },
  created: function () {
    var that = this
    that.$axios.get(that.URL + 'getShops').then(function (res) {
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
