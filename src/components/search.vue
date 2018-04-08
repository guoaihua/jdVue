<template>
  <div id="search">
    <el-input
      placeholder="请输入内容"
      prefix-icon="el-icon-search"
      v-model="inputData">
    </el-input>
    <icon class="phone-icon" name="phone"></icon>
  </div>
</template>

<script>
export default {
  name: 'search',
  data () {
    return {
      inputData: ''
    }
  }
}
</script>

<style scoped lang="scss">
  #search {
    height: 50px;
    display: flex;
    background-color: #ffffff6e;
    justify-content: center;
    align-items: center;
    .el-input {
      width: 80%;
     input .el-input__inner {
        border-radius: 25px;
      }
    }
    .phone-icon {
      width: 40px;
      height: 40px;
    }
  }
</style>
