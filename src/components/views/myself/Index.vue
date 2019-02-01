<template>
  <div class="myselfBox">
    <el-card shadow="always">
      <div class="myPic"></div>
    </el-card>
    <el-collapse v-model="activeNames"
                 @change="handleChange">
      <el-collapse-item title="基本资料"
                        name="1">
        <div>名字：XXX</div>
        <div>性别：男</div>

      </el-collapse-item>
      <el-collapse-item title="自我介绍"
                        name="2">
        <div>我是一个帅气的男人</div>
      </el-collapse-item>
      <el-collapse-item title="工作经验"
                        name="3">
        <div>帮华为撸代码</div>
      </el-collapse-item>
      <el-collapse-item title="技能特长"
                        name="4">
        <div>技能特长</div>
      </el-collapse-item>
      <el-collapse-item title="未来规划"
                        name="5">
        <div>不用上班，有钱拿，还有美女来勾搭</div>
      </el-collapse-item>
      <el-collapse-item title="Hi!交个朋友"
                        name="6">
        <div>微信加起来：XXXXX</div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeNames: ["1"]
    };
  },
  methods: {
    handleChange(val) {
      console.log(val);
    }
  }
};
</script>
<style scoped>
.myselfBox {
  margin-top: 20px;
}
.myselfBox .el-card__body {
  padding: 10px 0;
}
.myselfBox .el-card__body .myPic {
  width: 80px;
  height: 80px;
  border-radius: 40px;
  margin: 0 auto;
  background: url("../../../assets/imgs/myself.png") no-repeat;
  background-size: 80px 80px;
}
</style>