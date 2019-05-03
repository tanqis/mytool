<template>
  <div class="myHeaderBox">
    <div class="mycell">
      <router-link tag="i"
                   to="/"
                   class="fa fa-home">
      </router-link>
    </div>
    <div class="mycell">
      <router-link tag="i"
                   to="/"
                   class="fa fa-book">
        <!-- heartbeat -->
      </router-link>
    </div>
    <div class="mycell">
      <router-link tag="i"
                   to="/"
                   class="fa fa-balance-scale">
      </router-link>
    </div>
    <div class="mycell">
      <router-link tag="i"
                   to="/"
                   class="fa fa-shopping-cart">
      </router-link>
    </div>
    <div class="mycell">
      <el-dropdown trigger="click"
                   @command="userFn">
        <span class="el-dropdown-link">
          <i class="fa fa-user-circle"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="logIn">登录</el-dropdown-item>
          <el-dropdown-item command="logOut">注销</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>

    </div>
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
  width: calc(100% - 20px);
  height: 48px;
  line-height: 48px;
  padding: 0 10px;
  font-size: 18px;
  color: #fff;
  position: relative;
}
.myHeaderBox .mycell {
  display: inline-block;
  float: left;
  width: 20%;
  border: 0;
}
.myHeaderBox .el-dropdown {
  color: #fff;
  font-size: 18px;
}
</style>
