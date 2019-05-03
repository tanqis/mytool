<template>
  <div>
    <div class="searchOption">
      <el-radio-group v-model="isAll"
                      size="mini">
        <el-radio-button label="me">我的</el-radio-button>
        <el-radio-button label="all">全部</el-radio-button>
      </el-radio-group>
      <el-input placeholder="请输入内容"
                v-model="mapName"
                clearable>
      </el-input>
    </div>
    <div class="listOption">
      <ul>
        <li @click="addGraph"
            class="minMapAdd"><i class="fa fa-plus"></i></li>
        <li v-for="(item,index) in [{},{},{},{},{}]"
            @click="viewGraph"
            :key="index">
          <div class="minMapImg"><i class="fa fa-sitemap"></i></div>
          <p class="minMapTitle">思维导图{{(index+1)}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isAll: "me",
      mapName: ""
    };
  },
  created() {},
  mounted() {},
  methods: {
    viewGraph() {
      // this.addGraph();
      window.location.href = "./#/viewGraph";
    },
    addGraph() {
      this.$alert("建设中...", "提示", {
        // showCancelButton: true,
        // cancelButtonText: "要脸(取消)",
        confirmButtonText: "ok",
        callback: action => {
          // if (action) {
          //   this.$message({
          //     type: "info",
          //     message: `臭不要脸`
          //   });
          // }
        }
      });
    }
  }
};
</script>
<style>
.searchOption {
  padding: 10px;
}
.searchOption .el-input {
  margin-top: 10px;
}
.listOption {
}

.listOption ul li {
  float: left;
  width: calc(50% - 2px);
  height: 180px;
  border: 1px solid #ddd;
  list-style: none;
}

.listOption ul li.minMapAdd i {
  background: #ddd;
  font-size: 80px;
  margin-top: 45px;
  color: #fff;
  width: 80px;
  height: 80px;
  line-height: 80px;
  text-align: center;
  border-radius: 40px;
}
.minMapImg {
  height: 150px;
  font-size: 80px;
}
.minMapImg i {
  margin-top: 40px;
  color: #ddd;
}
.minMapTitle {
  height: 30px;
  line-height: 30px;
  color: #fff;
  background: #ddd;
}
</style>
