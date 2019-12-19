<template>
  <div class="minMapManageCom">
    <div v-for="(item,index) in arrDatas"
         :key="index"
         class="box">
      <span class="itemBoxSolid"></span>
      <div class="itemParent">
        {{item.name}}
        <span v-if="item.children"
              class="itemSolid"></span>
      </div>
      <template v-if="item.children">
        <min-map-manage-com :arrDatas='item.children'
                            class="itemChilden"></min-map-manage-com>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: "minMapManageCom",
  props: {
    arrDatas: Array
  }
};
</script>

<style lang="less" scoped>
.minMapManageCom {
  .box {
    display: flex;
    position: relative;
    .itemBoxSolid {
      width: 6px;
      height: 1px;
      background: #c6c6c6;
      border: 0;
      position: absolute;
      left: 0;
      top: 13px;
    }
    .itemParent {
      width: 60px;
      float: left;
      text-align: center;
      position: relative;
      height: 26px;
      line-height: 26px;
      .itemSolid {
        width: 6px;
        height: 1px;
        background: #c6c6c6;
        border: 0;
        position: absolute;
        right: 0;
        top: 13px;
      }
    }
    .itemChilden {
      //   width: 80%;
      min-width: 60px;
      float: left;
      border-left: 1px solid #c6c6c6;
    }
  }
}
</style>