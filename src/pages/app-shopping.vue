<template>
    <div id="shopping">
      <el-container>
        <el-main>Main</el-main>
        <el-footer>
          <my-footer></my-footer>
        </el-footer>
      </el-container>
    </div>
</template>

<script>
import myFooter from '../components/myFooter'
export default {
  name: 'shopping',
  components: {
    myFooter
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
    background-color: gold;
  }
  .el-footer {
    padding: 0;
    background-color: greenyellow;
  }
  }
  }
</style>
