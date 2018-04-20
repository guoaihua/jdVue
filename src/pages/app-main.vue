<template>
  <div id="appMain">
    <el-container>
      <el-main>
         <!--搜索框-->
        <search></search>
        <!--卡片轮播-->
        <template>
          <el-carousel indicator-position="inside" height="159px">
            <el-carousel-item v-for="item in imgs" :key="item.id">
              <h3><img  :src="item.src" style="width: 100%;" ></h3>
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
        <div class="pics" v-for="item in List" :key="item.id">
          <el-row type="flex">
            <el-col :span="24" ><img :src="item.banner" alt=""></el-col>
          </el-row>
          <el-row>
            <el-col :span="12" >
              <div class="pic-content">
                <div >ceshi1</div>
                <img :src="item.imgs[0].imgSrc" alt="">
                <img :src="item.imgs[1].imgSrc" alt="">
              </div>
            </el-col>
            <el-col :span="12" >
              <div class="pic-content">
                <div>推荐手机adadad</div>
                <img :src="item.imgs[2].imgSrc" alt="">
                <img :src="item.imgs[3].imgSrc" alt="">
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12" >
              <div class="pic-content">
                <div>推荐手机dadad</div>
                <img :src="item.imgs[4].imgSrc" alt="">
                <img :src="item.imgs[5].imgSrc" alt="">
              </div>
            </el-col>
            <el-col :span="12" >
              <div class="pic-content">
                <div>推荐手机dadada</div>
                <img :src="item.imgs[6].imgSrc" alt="">
                <img :src="item.imgs[7].imgSrc" alt="">
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12" >
              <div class="pic-content">
                <div>推荐手机dadsad</div>
                <img :src="item.imgs[8].imgSrc" alt="">
                <img :src="item.imgs[9].imgSrc" alt="">
              </div>
            </el-col>
            <el-col :span="12" >
              <div class="pic-content">
                <div>推荐手机adsadsad</div>
                <img  :src="item.imgs[10].imgSrc" alt="">
                <img  :src="item.imgs[11].imgSrc" alt="">
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
      URL: 'http://localhost:3000',
      imgs: [],
      icons1: [
        {imgSrc: '/static/imgs/main_icons/1.png', title: 'XX超市'},
        {imgSrc: '/static/imgs/main_icons/2.png', title: '全球购'},
        {imgSrc: '/static/imgs/main_icons/3.png', title: 'XX生鲜'},
        {imgSrc: '/static/imgs/main_icons/4.png', title: 'XX到家'},
        {imgSrc: '/static/imgs/main_icons/5.png', title: '充值缴费'}
      ],
      icons2: [
        {imgSrc: '/static/imgs/main_icons/6.png', title: '9.9拼购'},
        {imgSrc: '/static/imgs/main_icons/7.png', title: '领劵'},
        {imgSrc: '/static/imgs/main_icons/8.png', title: '借钱'},
        {imgSrc: '/static/imgs/main_icons/9.png', title: '物流服务'},
        {imgSrc: '/static/imgs/main_icons/10.png', title: 'XX服饰'}
      ],
      List: [
      ]
    }
  },
  components: {
    myFooter, search
  },
  created: function () {
    var self = this
    self.$axios.get(self.URL + '/users/slide_imgs').then(function (res) {
      self.imgs = res.data
    })
    self.$axios.get(self.URL + '/users/list_imgs').then(function (res) {
      console.log(res.data)
      self.List = res.data
    })
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
