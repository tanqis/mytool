<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <hr>

    <span @click="testMock">{{testMockName}}</span>
    <template>
      <el-button @click="axiosFn">点我测试Axios跨域请求</el-button>
      <hr>
      <span v-if="isClick">result:{{result}}<el-button @click="closeFn">点我关闭结果</el-button></span>
    </template>

    <div class="block">
      <!-- <span class="demonstration">Click 指示器触发</span> -->
      <el-carousel trigger="click"
                   height="650px">
        <el-carousel-item v-for="item in 4"
                          :key="item"
                          loop>
          <div>{{item}}</div>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>

</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      isClick: false,
      msg: "Welcome to my toos",
      result: "",
      testMockName: "--tanqis--"
    };
  },
  methods: {
    liClickFn() {
      const elementArr = this.$refs;
      for (let elementObj in elementArr) {
        elementArr[elementObj][0].classList.remove("isActive");
      }
      event.srcElement.classList.add("isActive");
    },
    closeFn() {
      this.isClick = false;
    },
    axiosFn() {
      const par = {
        code: "utf-8",
        q: "充电宝"
      };
      this.$axios({ url: "./apiss/sug", params: par }).then(msg => {
        // debugger;
        const result = msg.data.result;
        this.isClick = true;
        this.result = result;
      });
    },
    testMock() {
      let random = this.$Mock.mock({
        "string|1-10": "★"
      });
      this.testMockName = random.string;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
