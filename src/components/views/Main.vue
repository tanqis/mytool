<template>
  <div class="myMainBox">
    <div class="myCard  bounceIn"
         v-for="(iteme,index) in cardsData"
         :key="index">
      <!-- @click="cardClick(iteme.url,iteme.name)" -->
      <router-link tag="p"
                   :to="iteme.url"><i :class="iteme.icon"></i>{{iteme.name}}</router-link>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      cardsData: [
        {
          name: "个人简介",
          style: "",
          icon: "fa fa-user-secret",
          url: "/myself"
        },
        { name: "代办事项", style: "", icon: "el-icon-time", url: "/toDos" },
        {
          name: "在线记账",
          style: "",
          icon: "el-icon-edit-outline",
          url: "/accounts"
        },
        { name: "思维导图", style: "", icon: "fa fa-sitemap", url: "/mindMap" },
        { name: "生活日记", style: "", icon: "fa fa-glass", url: "/lifeDays" },
        {
          name: "金融投资",
          style: "",
          icon: "fa fa-area-chart",
          url: "/financeMap"
        },
        { name: "首页事项", style: "", icon: "fa fa-fire", url: "/homeToDos" },
        { name: "工具辅助", style: "", icon: "fa fa-wrench", url: "/toolHelp" }
      ]
    };
  },
  mounted() {
    this.$message({
      message: "欢迎您的到来！",
      type: "success"
    });
  },
  methods: {
    cardClick(url, name) {
      if ("" === url) {
        alert("[" + name + "]建设中~~~");
      }
    }
  }
};
</script>
<style scoped>
.myMainBox {
  width: 100%;
  height: 100%;
}
.myMainBox .myCard {
  width: 100%;
  height: 24vh;
  float: left;
  margin-top: 20px;
  border-radius: 6px;
}
.myMainBox .myCard p {
  color: #fff;
  font-size: 20px;
  text-align: center;
  margin-top: 10vh;
}
.myMainBox .myCard:nth-child(1) {
  background: #62c1fe;
}
.myMainBox .myCard:nth-child(2) {
  background: #5ad5b6;
}
.myMainBox .myCard:nth-child(3) {
  background: #ff9233;
}
.myMainBox .myCard:nth-child(4) {
  background: #d87aec;
}
.myMainBox .myCard:nth-child(5) {
  background: #fe6464;
}
.myMainBox .myCard:nth-child(6) {
  background: #ff9233;
}
.myMainBox .myCard:nth-child(7) {
  background: #62c1fe;
}
.myMainBox .myCard:nth-child(8) {
  background: #fe6464;
}
</style>


