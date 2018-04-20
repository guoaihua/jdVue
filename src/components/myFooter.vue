<template>
    <div id="myFooter">
          <ul>
            <li>
              <p><icon class="home-icon icon" name="home"></icon></p>
              <p>
                <router-link :to="{name:'appMain'}">首页</router-link>
              </p>
            </li>
            <li>
              <p><icon class="sort-icon icon" name="sort"></icon></p>
              <p>
                <router-link :to="{name:'classifyDetail'}">分类</router-link>
              </p>
            </li>
            <li>
              <p><icon class="cart-icon icon" name="cart"></icon></p>
              <p>
                <router-link :to="{name:'shopping'}">购物车</router-link>
              </p>
            </li>
            <li>
              <p><icon class="find-icon icon" name="find"></icon></p>
              <p>
                <router-link :to="{name:'find'}">发现</router-link>
              </p>
            </li>
            <li>
              <p><icon class="people-icon icon" name="people"></icon></p>
              <p>
                <router-link :to="{name:'my'}">我的</router-link>
              </p>
            </li>
          </ul>
    </div>
</template>

<script>
export default {
  name: 'myFooter',
  data () {
    return {
    }
  }
}
</script>

<style scoped lang="scss">
  #myFooter {
    font-size: 12px;
    width: 100%;
    height: 100%;
    ul{
      width: 100%;
      height: 100%;
      margin: 0;
      padding: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      li {
         display: inline-block;
         width: 20%;
        p {
          margin: 0;
          .icon {
            width: 30px;
            height: 30px;
          }
        }
      }
    }
  }
</style>
