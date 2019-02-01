<template>
  <div class="myHeaderBox">
    <div class="mycell myMenu">
      <router-link tag="i"
                   to="/"
                   class="fa fa-home">
      </router-link>
    </div>
    <div class="mycell myUser">
      <!-- <i class="el-icon-search"></i> -->
      <!-- <el-badge is-dot
                class="item">
        <i class="fa fa-user-circle"
           @click="userFn"></i>
      </el-badge> -->
      <i class="fa fa-user-circle"
         @click="userFn"></i>
    </div>
    <div class="sayHello">[游客],欢迎您!</div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    userFn() {
      this.$message("用户模块正在建设中，请稍后");
    }
  }
};
</script>
<style socped>
.myHeaderBox {
  width: 100%;
  height: 60px;
  line-height: 60px;
  padding: 0 10px;
  font-size: 28px;
  color: #fff;
  position: relative;
}
.myHeaderBox .mycell {
  display: inline-block;
  float: left;
  width: calc(50% - 10px);
  border: 0;
}
.myHeaderBox .myMenu {
  text-align: left;
}
.myHeaderBox .myUser {
  text-align: right;
}
.myHeaderBox .sayHello {
  position: absolute;
  text-align: center;
  font-size: 12px;
  width: 80px;
  left: calc(50% - 40px);
  top: 5px;
}
</style>
