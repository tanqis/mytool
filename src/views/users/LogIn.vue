<template>
  <div>
    <el-form :model="logInForm"
             status-icon
             :rules="rules"
             ref="logInForm"
             label-width="100px"
             class="demo-ruleForm">
      <el-form-item prop="userEmail"
                    label="邮箱">
        <el-input v-model="logInForm.userEmail"
                  placeholder="请输入邮箱账号"></el-input>
      </el-form-item>
      <el-form-item label="密码"
                    prop="userPwd">
        <el-input type="password"
                  placeholder="请输入密码"
                  v-model="logInForm.userPwd"
                  autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary"
                   size="mini"
                   @click="submitForm('logInForm')">登录</el-button>
        <el-button size="mini"
                   @click="register">注册</el-button>
        <el-button size="mini"
                   type="text"
                   @click="forgetPwd">忘记密码</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    var validatePwd = (rule, value, callback) => {
      if (value === "" || value === undefined) {
        callback(new Error("请输入密码"));
      } else if (value.length < 8 || value.length > 16) {
        callback(new Error("请输入8-16位数密码"));
      } else {
        callback();
      }
    };
    var validateEmail = (rule, value, callback) => {
      if (value === "" || value === undefined) {
        callback(new Error("请输入邮箱账号"));
      } else {
        callback();
      }
    };
    return {
      logInForm: {},
      rules: {
        userPwd: [{ validator: validatePwd, trigger: "blur" }],
        userEmail: [
          {
            validator: validateEmail,
            trigger: "blur"
          },
          {
            type: "email",
            message: "请输入正确的邮箱地址",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    userLogIn(obj) {
      this.$axios
        .post(this.$url.userLogIn, obj)
        .then(msg => {
          const errMsg = msg.data.data.msg;
          if (errMsg) {
            this.$message({
              showClose: true,
              message: errMsg,
              type: "error"
            });
          } else {
            this.$message({
              showClose: true,
              message: "登录成功",
              type: "success"
            });
            window.setTimeout(() => {
              window.location.href = "#/";
            }, 1000);
          }
        })
        .catch(err => {
          this.$message({
            showClose: true,
            message: "登录失败请确认账号或者密码正确",
            type: "error"
          });
        });
    },
    register() {
      window.location.href = "#/user/register";
    },
    forgetPwd() {
      window.location.href = "#/user/forgetPwd";
    },
    submitForm(ref) {
      this.$refs[ref].validate(valid => {
        if (valid) {
          this.userLogIn(this.logInForm);
        } else {
          this.$message.error("输入有误，请确认信息无误再登录");
          return false;
        }
      });
    }
  }
};
</script>
