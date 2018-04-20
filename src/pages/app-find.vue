<template>
  <div id="find">
    <el-container>
      <el-main>
        <find-header></find-header>
        <div class="share_list" v-for=" item in imgs" :key="item.id">
          <div class="find_title">
            墙面改一改，衣柜、书架、置物架统统不用买
          </div>
          <img :src="item.imgSrc" alt="">
          <div class="tips">
            <div class="logo">在家</div>
            <div class="red">3w+阅读</div>
          </div>
        </div>
      </el-main>
      <el-footer>
        <my-footer></my-footer>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import myFooter from '../components/myFooter'
import findHeader from '../components/findHeader'
export default {
  name: 'find',
  data () {
    return {
      imgs: [
        {imgSrc: '/static/imgs/find_back.jpg'},
        {imgSrc: '/static/imgs/find_back.jpg'},
        {imgSrc: '/static/imgs/find_back.jpg'}
      ]
    }
  },
  components: {
    myFooter, findHeader
  }
}
</script>

<style scoped lang="scss">
  #find {
    width: 100%;
    height: 100%;
  .el-container {
    display: flex;
    width: 100%;
    height: 100%;
  .el-main {
    padding: 0;
    background-color: #f7f7f7;
    .share_list {
      background-color: #ffffff;
      position: relative;
      width: 92%;
      margin: 0 4% 10px 4%;
      .find_title {
        font-family: -apple-system,Helvetica,sans-serif;
        font-size: 16px;
        height: 45px;
        line-height: 45px;
      }
      img {
        width: 100%;
      }
      .tips {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 90%;
        height: 50px;
        background-color: #ffffff;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 5%;
        .logo, .red {
            font-size: 16px;
          font-family: 宋体;
        }
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
