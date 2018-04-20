<template>
    <div id="findHeader">
      <div class="find findTabSelect">
        <div class="tab_icons">
          <icon class="favorite-icon" name="favorite"></icon>
        </div>
        <span class="tab_tit">精选</span>
      </div>
      <div class="find find_TabFood">
        <div class="tab_icons">
          <icon class="favorite-icon" name="favorite"></icon>
        </div>
        <span class="tab_tit">精选</span>
      </div>
      <div class="find find_TabPlay">
        <div class="tab_icons">
          <icon class="favorite-icon" name="favorite"></icon>
        </div>
        <span class="tab_tit">精选</span>
      </div>
      <div class="find find_TabBuy">
        <div class="tab_icons">
          <icon class="favorite-icon" name="favorite"></icon>
        </div>
        <span class="tab_tit">精选</span>
      </div>
      <div class="find find_TabLook">
        <div class="tab_icons">
          <icon class="favorite-icon" name="favorite"></icon>
        </div>
        <span class="tab_tit">精选</span>
      </div>
    </div>
</template>

<script>
export default {
  name: 'find-header'
}
</script>

<style scoped lang="scss">
  #findHeader {
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #b521211c;
    margin-bottom: 10px;
    .find {
      width: 40%;
      height: 100%;
      .tab_icons {
        width: 100%;
        height: 30px;
        margin-top: 10px;
        svg {
         width: 30px;
         height: 30px;
       }
      }
      .tab_tit {
        font-size: 14px;
        font-family: 宋体;
        width: 100%;
      }
    }
    .find:hover {
      background: -webkit-linear-gradient(left,#e93b3d,#ff9574);
      color: white;
    }
  }
</style>
