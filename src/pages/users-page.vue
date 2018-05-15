<template>
    <div id="users-page">
      用户界面
      <div class="card_items" >
        <div class="item_header">
          <span>我的订单</span>
          <span>查看更多订单</span>
        </div>
        <div class="item_content">
          <div class="item">
            <icon class="deliverGoods-icon" name="deliverGoods"></icon>
            <div class="item_text">代付款</div>
          </div>
          <div class="item">
            <icon class="deliverGoods-icon" name="deliverGoods"></icon>
            <div class="item_text">待发货</div>
          </div>
          <div class="item">
            <icon class="deliverGoods-icon" name="deliverGoods"></icon>
            <div class="item_text">待收货</div>
          </div>
          <div class="item">
            <icon class="deliverGoods-icon" name="deliverGoods"></icon>
            <div class="item_text">待评价</div>
          </div>
          <div class="item">
            <icon class="deliverGoods-icon" name="deliverGoods"></icon>
            <div class="item_text">退款/售后</div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'users-page'
}
</script>

<style scoped lang="scss">
  #users-page {
    width: 100%;
    .card_items {
      width: 92%;
      margin: 10px 4%;
      border-radius: 10px;
      background-color: #ffffff;
      .item_header {
        display: flex;
        justify-content: space-between;
        height: 50px;
        line-height: 50px;
        border-bottom: 1px solid #f7f7f7;
      }
      .item_content {
        display: flex;
        justify-content: space-around;
        height: 70px;
          .item_text {
            font-size: 14px;
            font-family: 宋体;
          }
          svg {
            width: 25px;
            height: 25px;
        }
      }
    }
  }
</style>
