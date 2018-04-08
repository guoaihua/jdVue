<template>
  <div id="appMain">
    <el-container>
      <el-main>
        <search></search>
        <template>
          <el-carousel indicator-position="outside">
            <el-carousel-item v-for="img in imgs" :key="img.id">
              <h3><img  :src="img" ></h3>
            </el-carousel-item>
          </el-carousel>
        </template>
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
import img1 from '../assets/imgs/bg1.jpg'
export default {
  name: 'appMain',
  data () {
    return {
      imgs: [{
        img1,
        id: 0
      }, {
        img1,
        id: 1
      }]
    }
  },
  components: {
    myFooter, search
  }
}
</script>

<style scoped lang="scss">
  #appMain {
    width: 100%;
    height: 100%;
    .el-container {
      display: flex;
      width: 100%;
      height: 100%;
      .el-main {
        padding: 0;
        background-color: gold;
        #search {
          position: fixed;
          top: 0;
          width: 100%;
          z-index:999;
        }
        .el-carousel__item h3 {
          color: #475669;
          font-size: 18px;
          opacity: 0.75;
          line-height: 183px;
          margin: 0;
        }
      }
      .el-footer {
        padding: 0;
        background-color: greenyellow;
      }
    }
  }
</style>
