<template>
  <div class="CalculatioinsList">
    <el-card shadow="always"
             class="box-card">
      <div slot="header"
           class="clearfix">
        <span>添加产品</span>
      </div>
      <div @click="$router.push('./Calculatioins')">
        +
      </div>
    </el-card>

    <el-card shadow="always"
             class="box-card"
             v-for="(item,index) in productData"
             :key="index">
      <div slot="header"
           class="clearfix">
        <span>{{item.productId}}({{item.productName}})</span>
        <i class="el-icon-delete"
           style="float: right; padding: 3px 0"
           @click="delProduct(item)"></i>
      </div>
      <div @click="$router.push('./Calculatioins?id='+item._id)">
        {{'操作次数：' + item.productPriceArrs.length }}
      </div>
    </el-card>

  </div>
</template>
<script>
export default {
  name: "FCIndex",
  data() {
    return {
      productData: []
    };
  },
  created() {
    this.loadListData();
  },
  methods: {
    delProduct(item) {
      this.$confirm("确认删除该记录?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$axios.post(this.$url.delProduct, item).then(msg => {
            this.$alert(msg.data.msg, "消息", {
              confirmButtonText: "确定",
              callback: action => {
                this.loadListData();
              }
            });
          });
        })
        .catch(() => {});
    },
    loadListData() {
      this.$axios.post(this.$url.findAllList).then(msg => {
        if (msg.data.status === false) {
          this.$alert(msg.data.msg, "消息", {
            confirmButtonText: "确定",
            callback: action => {}
          });
        } else {
          this.productData = msg.data;
        }
      });
    }
  }
};
</script>

<style lang="less" scoped>
.CalculatioinsList {
  text-align: center;
}
</style>