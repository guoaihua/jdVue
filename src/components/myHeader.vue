<template>
    <div id="myHeader">
      <div class="my_container">
        <div class="img">
          <img :src="imgs.imgSrc" alt="">
        </div>
        <div class="detail">
          <div class="id">1132131adsa</div>
          <div class="username">用户名：{{userInfos.user}}</div>
          <div class="icons" v-if="userInfos.usertype === '0'"><router-link :to="{name:'goods'}">商店管理</router-link> </div>
          <div class="icons" v-else><router-link :to="{name:'users'}">个人用户</router-link> </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'my-header',
  data () {
    return {
      imgs: {imgSrc: '/static/imgs/my_head.png'},
      userInfos: this.$store.state.userInfos
    }
  }
}
</script>

<style scoped lang="scss">
   #myHeader {
     margin-bottom: 10px;
     width: 100%;
     border-radius: 2%;
     background: linear-gradient(90deg,#eb3c3c,#ff7459);
     .my_container {
       display: flex;
       justify-content: left;
       align-items: center;
       padding: 25px;
       .img {
          width: 60px;
         height: 60px;
         img {
           width: 100%;
         }
       }
       .detail {
         margin-left: 10px;
         .id, .username {
           font-size: 14px;
           font-family: 宋体;
           text-align: left;
         }
       }
     }
   }
</style>
