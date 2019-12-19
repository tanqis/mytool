<template>
  <div class="graphBox">
    <h3>标题</h3>
    <hr>
    <div class="graph"
         ref="graph">null</div>
  </div>
</template>
<script>
// let d3 = require("d3");
export default {
  data() {
    return {};
  },
  created() {
    console.log("created");
  },
  mounted() {
    this.viewGraph();
  },
  methods: {
    viewGraph() {
      // const svg = d3
      //   .select(".graph")
      //   .append("svg")
      //   .attr("width", "100%")
      //   .attr("height", "100%");
      // const circle = svg
      //   .append("circle")
      //   .attr("cx", "50%")
      //   .attr("cy", "50%")
      //   .attr("r", "30")
      //   .style("fill", "lightsteelblue");
      // circle.append("text").text("test");
      // const g=svg.append("g")
      // console.log(circle);
    }
  }
};
</script>
<style scoped>
.graphBox {
  margin: 10px;
  border: 1px solid #ccc;
}
.graph {
  width: 100%;
  height: 500px;
}
</style>
