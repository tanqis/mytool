<template>
  <div class="myMainBox">
    <el-carousel trigger="click"
                 class="bounceIn"
                 height="180px">
      <el-carousel-item v-for="(arr,items) in carouselData"
                        :key="items">
        <div>
          <ul>
            <li v-for="(item,index) in arr"
                :key="index">{{item}}</li>
          </ul>
        </div>
      </el-carousel-item>
    </el-carousel>
    <div class="menuBoxs">
      <ul>
        <template v-for="(item,index) in cardsData">
          <router-link tag="li"
                       :key="index"
                       :to="item.url"
                       class="bounceIn"
                       :style="styles[index]"><i :class="item.icon"></i>
            <p>{{item.name}}</p>
          </router-link>
        </template>
      </ul>
    </div>

    <div class="newsBoxs">
      <p class="newsTitle">股市提醒</p>
      <div class="newsBody">
        <p class="left">当前市场股票由太多人为因素造成一波牛市，即人造牛市，请各位小伙伴谨慎入市。</p>
        <p class="left">目前应该采取观望的心态看待这波行情。</p>
        <p class="left">实在压抑不住内心的躁动，可以采取1/10仓位递增形式入市。</p>
        <p class="right">--苏谭琦</p>
      </div>
    </div>
    <div class="newsBoxs">
      <p class="newsTitle">外汇注册</p>
      <div class="newsBody">
        <p class="left">有要自己去玩外汇小伙伴，点下面链接注册</p>
        <p class="left"><a href="https://www.exness.com/a/t3vrm3vr">https://www.exness.com/a/t3vrm3vr</a></p>
      </div>
    </div>
    <div class="newsBoxs">
      <p class="newsTitle">小伙伴招募</p>
      <div class="newsBody">
        <p class="left">当前网站正在紧急开发中，有兴趣小伙伴可以加入一起完成。</p>
      </div>
    </div>
    <div class="newsBoxs">
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      styles: this.randomColor(),
      user: this.$user,
      cardsData: [],
      carouselData: []
    };
  },
  created() {
    this.getMainContent();
    this.getCarouselData();
  },
  mounted() {},
  methods: {
    getMainContent() {
      this.$axios("./static/mainMenu.json").then(msg => {
        this.cardsData = msg.data;
      });
    },
    getCarouselData() {
      this.$axios("./static/carousel.json").then(msg => {
        this.carouselData = msg.data;
      });
    },
    randomColor() {
      let styleArr = [];
      const colors = [
        "#62c1fe",
        "#5ad5b6",
        "#ff9233",
        "#d87aec",
        "#fe6464",
        "#ff9233",
        "#62c1fe",
        "#fe6464",
        "#5ad5b6"
      ];
      for (let i = 0; i < 10; i++) {
        const random = Math.random() * 10;
        styleArr.push("color:" + colors[parseInt(random)] + ";");
      }
      return styleArr;
    }
  }
};
</script>
<style scoped>
.newsBoxs {
  /* margin-top: 20px; */
  border-top: 20px solid #f2f3f8;
  padding: 10px;
  font-size: 12px;
  line-height: 18px;
  color: #8f8f8f;
}
.newsBoxs .newsTitle {
  text-align: left;
  height: 30px;
  line-height: 30px;
  text-indent: 15px;
  position: relative;
  border-bottom: 1px solid rgb(98, 193, 254);
}
.newsBoxs .newsTitle::before {
  content: "";
  background: rgb(98, 193, 254);
  width: 5px;
  height: 20px;
  position: absolute;
  top: 5px;
  left: 0;
  border-radius: 5px;
}
.newsBoxs .newsBody {
  padding: 10px;
  text-align: left;
}
.newsBoxs .newsBody a {
  color: rgb(98, 193, 254);
  text-decoration: none;
}
.newsBoxs .left {
  text-align: left;
  text-indent: 30px;
}
.newsBoxs .right {
  text-align: right;
}
.menuBoxs {
  height: 160px;
  padding: 10px 0;
  overflow: hidden;
}
.menuBoxs ul {
  width: 100%;
  height: 100%;
}
.menuBoxs ul li {
  list-style: none;
  float: left;
  width: 25%;
  margin-bottom: 10px;
}
.menuBoxs ul li:nth-child(1),
.menuBoxs ul li:nth-child(2),
.menuBoxs ul li:nth-child(3),
.menuBoxs ul li:nth-child(4) {
  margin-bottom: 10px;
}
.menuBoxs ul li i {
  display: block;
  font-size: 36px;
}
.menuBoxs ul li p {
  padding: 9px 0;
  color: #8f8f8f;
}
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
.myMainBox .myCard.miniWidth {
  width: 50%;
}
.el-carousel__item {
  padding: 0 20px;
}
.el-carousel__item li {
  text-align: left;
  font-size: 14px;
  height: 30px;
  line-height: 30px;
  color: #fff;
}
.el-carousel__item:nth-child(2n) {
  background-color: #d87aec;
}
.el-carousel__item:nth-child(2n + 1) {
  background-color: #62c1fe;
}
</style>


