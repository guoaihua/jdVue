<template>
  <div id="appMain">
    <el-container>
      <el-main>
         <!--搜索框-->
        <search></search>
        <!--卡片轮播-->
        <template>
          <el-carousel indicator-position="inside" height="190px">
            <el-carousel-item v-for="item in imgs" :key="item.id">
              <h3><img  :src="item.src" ></h3>
            </el-carousel-item>
          </el-carousel>
        </template>
        <!--图标导航-->
        <div class="icons">
          <el-row type="flex" justify="center" >
            <el-col :span="4" v-for="item in icons1" :key="item.id"><div class="grid-content" ><img :src="item.imgSrc" alt=""> <div>{{item.title}}</div></div></el-col>
          </el-row>
          <el-row type="flex" justify="center">
            <el-col :span="4"  v-for="item in icons2" :key="item.id"><div class="grid-content" ><img :src="item.imgSrc" alt=""> <div>{{item.title}}</div></div></el-col>
          </el-row>
        </div>
        <!--爱生活-->
        <div class="pics">
          <el-row type="flex">
            <el-col :span="24" ><img :src="banners.imgSrc" alt=""></el-col>
          </el-row>
          <el-row>
            <el-col :span="12" >
              <div class="pic-content">
                <div >推荐手机dadad</div>
                <img :src="banners.imgs[0].imgSrc" alt="">
                <img :src="banners.imgs[0].imgSrc" alt="">
              </div>
            </el-col>
            <el-col :span="12" >
              <div class="pic-content">
                <div>推荐手机adadad</div>
                <img :src="banners.imgs[0].imgSrc" alt="">
                <img :src="banners.imgs[0].imgSrc" alt="">
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12" >
              <div class="pic-content">
                <div>推荐手机dadad</div>
                <img :src="banners.imgs[0].imgSrc" alt="">
                <img :src="banners.imgs[0].imgSrc" alt="">
              </div>
            </el-col>
            <el-col :span="12" >
              <div class="pic-content">
                <div>推荐手机dadada</div>
                <img :src="banners.imgs[0].imgSrc" alt="">
                <img :src="banners.imgs[0].imgSrc" alt="">
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12" >
              <div class="pic-content">
                <div>推荐手机dadsad</div>
                <img :src="banners.imgs[0].imgSrc" alt="">
                <img :src="banners.imgs[0].imgSrc" alt="">
              </div>
            </el-col>
            <el-col :span="12" >
              <div class="pic-content">
                <div>推荐手机adsadsad</div>
                <img :src="banners.imgs[0].imgSrc" alt="">
                <img :src="banners.imgs[0].imgSrc" alt="">
              </div>
            </el-col>
          </el-row>
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
import search from '../components/search'
export default {
  name: 'appMain',
  data () {
    return {
      imgs: [
        {src: '/static/imgs/bg1.jpg'},
        {src: '/static/imgs/bg1.jpg'}
      ],
      icons1: [
        {imgSrc: '/static/imgs/icons.png', title: '京东服饰'},
        {imgSrc: '/static/imgs/icons.png', title: '京东服饰'},
        {imgSrc: '/static/imgs/icons.png', title: '京东服饰'},
        {imgSrc: '/static/imgs/icons.png', title: '京东服饰'},
        {imgSrc: '/static/imgs/icons.png', title: '京东服饰'}
      ],
      icons2: [
        {imgSrc: '/static/imgs/icons.png', title: '京东服饰'},
        {imgSrc: '/static/imgs/icons.png', title: '京东服饰'},
        {imgSrc: '/static/imgs/icons.png', title: '京东服饰'},
        {imgSrc: '/static/imgs/icons.png', title: '京东服饰'},
        {imgSrc: '/static/imgs/icons.png', title: '京东服饰'}
      ],
      banners: {
        imgSrc: '/static/imgs/pics.jpg',
        imgs: [
          {imgSrc: '/static/imgs/imgs.jpg'},
          {imgSrc: '/static/imgs/imgs.jpg'},
          {imgSrc: '/static/imgs/imgs.jpg'},
          {imgSrc: '/static/imgs/imgs.jpg'},
          {imgSrc: '/static/imgs/imgs.jpg'},
          {imgSrc: '/static/imgs/imgs.jpg'},
          {imgSrc: '/static/imgs/imgs.jpg'},
          {imgSrc: '/static/imgs/imgs.jpg'}
        ]
      }
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
        .icons {
          width: 100%;
          height: 200px;
          background-color: white;
          border-top-left-radius: 30px;
          border-top-right-radius: 30px;
         .el-row {
           height: 50%;
           .grid-content {
             width: 100%;
             height: 100%;
             padding-top: 13px;
             img {
               width: 45px;
               height: 45px;
             }
             div {
               font-family: "宋体";
               font-size: 14px;
             }
           }
         }
        }
        .pics img{
          width: 100%;
          height: 40px;
          background-color: #f6f6f6;
        }
        .pic-content {
          div {
            font-size: 14px;
            font-family: 宋体;
            margin-left: -42px;
          }
          img {
            width: 72px;
            height: 72px;
          }
        }
      }
      .el-footer {
        padding: 0;
        border-top: #6704041c solid 2px;
      }
    }
  }
</style>
