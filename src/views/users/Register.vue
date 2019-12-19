<template>
  <div>
    <el-form :model="registerForm"
             status-icon
             :rules="rules"
             ref="registerForm"
             label-width="100px"
             class="demo-ruleForm">
      <el-form-item label="名字"
                    prop="userName">
        <el-input type="text"
                  v-model="registerForm.userName"
                  autocomplete="off"
                  placeholder="请输入名字"></el-input>
      </el-form-item>
      <el-form-item prop="userEmail"
                    label="邮箱">
        <el-input v-model="registerForm.userEmail"
                  placeholder="请输入邮箱账号"></el-input>
      </el-form-item>
      <el-form-item label="密码"
                    prop="userPwd">
        <el-input type="password"
                  placeholder="请输入密码"
                  v-model="registerForm.userPwd"
                  autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="确认密码"
                    prop="checkUserPwd">
        <el-input type="password"
                  placeholder="请再次输入密码"
                  v-model="registerForm.checkUserPwd"
                  autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary"
                   size="mini"
                   @click="submitForm('registerForm')">注册</el-button>
        <el-button type="text"
                   size="mini"
                   @click="logIn">已有账号</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    var validateName = (rule, value, callback) => {
      if (value === "" || value === undefined) {
        callback(new Error("请输入名字"));
      } else if (value.length > 8) {
        callback(new Error("名字长度不能超过8个"));
      } else {
        callback();
      }
    };
    var validatePwd = (rule, value, callback) => {
      if (value === "" || value === undefined) {
        callback(new Error("请输入密码"));
      } else if (value.length < 8 || value.length > 16) {
        callback(new Error("请输入8-16位数密码"));
      } else {
        if (this.registerForm.checkUserPwd !== "") {
          this.$refs.registerForm.validateField("checkUserPwd");
        }
        callback();
      }
    };
    var validatePwd2 = (rule, value, callback) => {
      if (value === "" || value === undefined) {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.registerForm.userPwd) {
        callback(new Error("两次输入密码不一致"));
      } else {
        callback();
      }
    };
    var validateEmail = (rule, value, callback) => {
      // const reg = new RegExp(
      //   "^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$"
      // );
      if (value === "" || value === undefined) {
        callback(new Error("请输入邮箱账号"));
      } /*else if (reg.test(value)) {
        callback(new Error("请输入正确的邮箱账号"));
      }*/ else {
        callback();
      }
    };
    return {
      registerForm: {},
      rules: {
        userName: [{ validator: validateName, trigger: "blur" }],
        userPwd: [{ validator: validatePwd, trigger: "blur" }],
        checkUserPwd: [
          {
            validator: validatePwd2,
            trigger: "blur"
          }
        ],
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
    sava(obj) {
      this.$axios
        .post(this.$url.userRegister, obj)
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
              dangerouslyUseHTMLString: true,
              message: "注册成功，3秒后将跳转登录",
              type: "success"
            });
            window.setTimeout(() => {
              window.location.href = "#/user/logIn";
            }, 3000);
          }
        })
        .catch(err => {
          this.$message({
            showClose: true,
            message: "注册失败，请联系管理员",
            type: "error"
          });
          console.log(err);
        });
    },
    logIn() {
      window.location.href = "#/user/logIn";
    },
    submitForm(ref) {
      this.$refs[ref].validate(valid => {
        if (valid) {
          this.sava(this.registerForm);
        } else {
          this.$message.error("输入有误，请确认信息无误再注册");
          return false;
        }
      });
    }
  }
};
</script>
