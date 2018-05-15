<template>
    <div id="classifyDetail">
      <div class="img1">
        <img :src="imgs[0].imgSrc" alt="">
      </div>
      <div class="img2">
        <p>热卖分类</p>
        <el-row :gutter="0">
          <el-col :span="8"><img :src="imgs[1].imgSrc" alt=""></el-col>
          <el-col :span="8"><img :src="imgs[1].imgSrc" alt=""></el-col>
          <el-col :span="8"><img :src="imgs[1].imgSrc" alt=""></el-col>
        </el-row>
        <el-row :gutter="0">
          <el-col :span="8"><img :src="imgs[1].imgSrc" alt=""></el-col>
          <el-col :span="8"><img :src="imgs[1].imgSrc" alt=""></el-col>
          <el-col :span="8"><img :src="imgs[1].imgSrc" alt=""></el-col>
        </el-row>
      </div>
      <div class="img3">
        <p>热卖选购</p>
        <el-row :gutter="0">
            <el-col :span="8"><img :src="imgs[1].imgSrc" alt=""></el-col>
            <el-col :span="8"><img :src="imgs[1].imgSrc" alt=""></el-col>
            <el-col :span="8"><img :src="imgs[1].imgSrc" alt=""></el-col>
        </el-row>
        <el-row :gutter="0">
          <el-col :span="8"><img :src="imgs[1].imgSrc" alt=""></el-col>
          <el-col :span="8"><img :src="imgs[1].imgSrc" alt=""></el-col>
          <el-col :span="8"><img :src="imgs[1].imgSrc" alt=""></el-col>
        </el-row>
        <el-row>
          <el-col :span="8"><img :src="imgs[1].imgSrc" alt=""></el-col>
          <el-col :span="8"><img :src="imgs[1].imgSrc" alt=""></el-col>
          <el-col :span="8"><img :src="imgs[1].imgSrc" alt=""></el-col>
        </el-row>
      </div>
    </div>
</template>

<script>
export default {
  name: 'classify-detail',
  data () {
    return {
      msg: '这是一个详细页面',
      imgs: [
        {imgSrc: '/static/imgs/classify_man.jpg'},
        {imgSrc: '/static/imgs/classify_close.jpg'}
      ],
      shopID: 0
    }
  },
  watch: {
    '$route': function (to, from) {
      this.shopID = to.query.id
      this.getDetail(this.shopID)
    }
  },
  methods: {
    getDetail: function (id) {
      this.$axios.get('http://localhost:3001/users/getDetail', {
        params: {
          id: id
        }
      }).then(function (res) {
        console.log(res)
      })
    }
  },
  created: function () {
    this.getDetail(this.$route.query.id)
  }
}
</script>

<style scoped lang="scss">
    #classifyDetail {
      width: 100%;
      height: 100%;
      .img1 {
        width: 100%;
        margin: 10px 0;
        img {
          width: 100%;
          height: auto;
        }
      }
      .img2,.img3{
        background-color: #fff;
        p {
          margin: 10px 0;
          background-color: #ccc;
          text-align: left;
          font-size: 16px;
          padding-bottom: 10px;
        }
      }
    }
</style>
