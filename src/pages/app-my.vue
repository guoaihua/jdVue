<template>
  <div id="my">
    <el-container>
      <el-main>
        <my-header></my-header>
        <!--订单详情-->
        <!--商家店铺管理-->
        <router-view></router-view>
      </el-main>
      <el-footer>
        <my-footer></my-footer>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import myFooter from '../components/myFooter'
import myHeader from '../components/myHeader'
export default {
  name: 'my',
  components: {
    myFooter, myHeader
  }
}
</script>

<style scoped lang="scss">
  div {
    width: 100%;
    height: 100%;
  .el-container {
    display: flex;
    width: 100%;
    height: 100%;
  .el-main {
    padding: 0;
    background-color: #f7f7f7;
  }
  .el-footer {
    padding: 0;
    background-color: #ffffff;
  }
  }
  }
</style>
