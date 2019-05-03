<template>
  <div class="myHeaderBox">
    <div class="mycell myMenu">
      <router-link tag="i"
                   to="/"
                   class="fa fa-home">
      </router-link>
    </div>
    <div class="mycell myUser">
      <el-dropdown trigger="click"
                   @command="userFn">
        <span class="el-dropdown-link">
          <i class="fa fa-user-circle"></i><!-- <i class="el-icon-arrow-down el-icon--right"></i> -->
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="logIn">登录</el-dropdown-item>
          <el-dropdown-item command="logOut">注销</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>

    </div>
    <div class="sayHello">[ 游客 ],欢迎您!</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: this.$user
    };
  },
  methods: {
    logOut() {
      this.$axios
        .get(this.$url.userLogOut)
        .then(msg => {
          console.error("logOut");
        })
        .catch(error => {
          console.error("logOut error");
        });
    },
    userFn(val) {
      switch (val) {
        case "logIn":
          window.location.href = "#/user/logIn";
          break;
        case "logOut":
          this.logOut();
          break;
        default:
      }
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
  font-size: 16px;
  width: 160px;
  left: calc(50% - 80px);
  top: 5px;
}
.myHeaderBox .el-dropdown {
  color: #fff;
  font-size: 28px;
}
</style>
