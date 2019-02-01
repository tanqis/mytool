<template>
  <div class="statisticalChart">
    <div ref="line"></div>
    <div ref="pie"></div>
    <div ref="map"></div>
  </div>
</template>
<script>
var echarts = require("echarts/lib/echarts");
// require("echarts/lib/chart/bar");
require("echarts/lib/chart/line");
require("echarts/lib/chart/pie");
// require("echarts/lib/chart/map");
// 引入提示框和标题组件
require("echarts/lib/component/tooltip");
require("echarts/lib/component/title");
// require("echarts/lib/component/dataRange");
export default {
  data() {
    return {
      financeData: []
    };
  },
  created() {
    this.getFinanceData();
  },
  mounted() {
    //挂载结束
    const _this = this;
    _this.setOption();
    _this.setOption2();
    _this.setOption3();
  },
  methods: {
    getFinanceData() {
      this.$axios("./static/fanance.json").then(msg => {
        this.financeData = msg.data;
      });
    },
    setOption() {
      var dom = this.$refs.line;
      console.log("aa", dom, document.getElementById("line"));
      let myChart = echarts.init(dom);
      // 绘制图表
      let option = {
        title: {
          text: "折线图"
        },
        // tooltip: {},
        xAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: "line"
          }
        ]
      };
      myChart.setOption(option, true);
    },
    setOption2() {
      let myChart = echarts.init(this.$refs.pie);

      let option = (option = {
        title: {
          text: "饼图",
          subtext: "数据纯属虚构"
          //   x: "center"
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          orient: "vertical",
          left: "left",
          data: ["直接访问", "邮件营销", "联盟广告", "视频广告", "搜索引擎"]
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: "55%",
            center: ["50%", "60%"],
            data: [
              { value: 335, name: "直接访问" },
              { value: 310, name: "邮件营销" },
              { value: 234, name: "联盟广告" },
              { value: 135, name: "视频广告" },
              { value: 1548, name: "搜索引擎" }
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
          }
        ]
      });

      myChart.setOption(option, true);
    },
    setOption3() {
      let myChart = echarts.init(this.$refs.map);
      let option = {
        title: {
          text: "2011全国GDP（亿元）"
        },
        legend: {
          x: "right",
          selectedMode: false,
          data: ["北京", "上海", "广东"]
        },
        series: [
          {
            name: "2011全国GDP分布",
            type: "map",
            mapType: "china",
            // selectedMode: "multiple",
            itemStyle: {
              normal: { label: { show: true } },
              emphasis: { label: { show: true } }
            },
            data: [
              { name: "西藏", value: 605.83 },
              { name: "青海", value: 1670.44 },
              { name: "宁夏", value: 2102.21 },
              { name: "海南", value: 2522.66 },
              { name: "甘肃", value: 5020.37 },
              { name: "贵州", value: 5701.84 },
              { name: "新疆", value: 6610.05 },
              { name: "云南", value: 8893.12 },
              { name: "重庆", value: 10011.37 },
              { name: "吉林", value: 10568.83 },
              { name: "山西", value: 11237.55 },
              { name: "天津", value: 11307.28 },
              { name: "江西", value: 11702.82 },
              { name: "广西", value: 11720.87 },
              { name: "陕西", value: 12512.3 },
              { name: "黑龙江", value: 12582 },
              { name: "内蒙古", value: 14359.88 },
              { name: "安徽", value: 15300.65 },
              { name: "北京", value: 16251.93, selected: true },
              { name: "福建", value: 17560.18 },
              { name: "上海", value: 19195.69, selected: true },
              { name: "湖北", value: 19632.26 },
              { name: "湖南", value: 19669.56 },
              { name: "四川", value: 21026.68 },
              { name: "辽宁", value: 22226.7 },
              { name: "河北", value: 24515.76 },
              { name: "河南", value: 26931.03 },
              { name: "浙江", value: 32318.85 },
              { name: "山东", value: 45361.85 },
              { name: "江苏", value: 49110.27 },
              { name: "广东", value: 53210.28, selected: true }
            ]
          }
        ]
      };
      myChart.setOption(option);
    }
  }
};
</script>
<style scoped>
.statisticalChart {
  width: 100%;
  overflow: auto;
}
.statisticalChart div {
  /* float: left; */
  height: 300px;
  margin: 20px 0;
  background: rgb(218, 235, 211);
  border-radius: 3px;
}
</style>

