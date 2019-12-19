<template>
  <div class="mindMapList">
    <!-- <div class="searchOption">
      <el-radio-group v-model="isAll"
                      size="mini">
        <el-radio-button label="me">我的</el-radio-button>
        <el-radio-button label="all">全部</el-radio-button>
      </el-radio-group>
      <el-input placeholder="请输入内容"
                v-model="mapName"
                suffix-icon="el-icon-search"
                clearable>
      </el-input>
    </div>-->
    <div class="listOption">
      <ul>
        <li v-for="(item,index) in mindMapData"
            :key="index"
            class="listOptionLi">
          <div @click="viewGraph"
               style="height:60px;">
            <div class="mindMapImg"><i class="el-icon-picture"></i></div>
            <div class="mindMapInfo">
              <div class="infoName">{{item.name}} </div>
              <div class="infoDate">{{item.date}}</div>
            </div>
          </div>
          <span class="itemMore">
            <el-dropdown trigger="click"
                         @command="moreComm">
              <span class="el-dropdown-link">
                <i class="el-icon-more"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="reName"
                                  disabled
                                  icon="el-icon-picture">{{item.name}}</el-dropdown-item>
                <el-divider></el-divider>
                <el-dropdown-item command="reName"
                                  icon="el-icon-edit">重命名</el-dropdown-item>
                <el-dropdown-item command="reMove"
                                  icon="el-icon-guide">移动</el-dropdown-item>
                <el-dropdown-item command="copy"
                                  icon="el-icon-document-copy">复制</el-dropdown-item>
                <!-- el-icon-copy-document -->
                <el-dropdown-item command="share"
                                  icon="el-icon-share">分享</el-dropdown-item>
                <el-divider></el-divider>
                <el-dropdown-item command="encrypt"
                                  icon="el-icon-lock">加密</el-dropdown-item>
                <el-dropdown-item command="starTarget"
                                  icon="el-icon-collection-tag">标星</el-dropdown-item>
                <el-divider></el-divider>
                <el-dropdown-item command="del"
                                  icon="el-icon-delete">删除</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
            <!-- <el-popover placement="left"
                        width="160"
                        v-model="moreVisible">
              <p>这是一段内容这是一段内容确定删除吗？</p>
              <div style="text-align: right; margin: 0">
                <el-button size="mini"
                           type="text"
                           @click="visible = false">取消</el-button>
                <el-button type="primary"
                           size="mini"
                           @click="visible = false">确定</el-button>
              </div>
              <el-button type="text"
                         slot="reference"><i class="el-icon-more"></i></el-button>
            </el-popover> -->

          </span>
        </li>
      </ul>
    </div>

    <span class="addOption"
          @click="addGraph"><i class="el-icon-plus"></i></span>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isAll: "me",
      mapName: "",
      moreVisible: false,
      mindMapData: [
        { name: "欢迎使用思维导图1", date: "12月19日 20:47" },
        { name: "欢迎使用思维导图2", date: "12月19日 20:47" },
        { name: "欢迎使用思维导图3", date: "12月19日 20:47" },
        { name: "欢迎使用思维导图4", date: "12月19日 20:47" },
        { name: "欢迎使用思维导图5", date: "12月19日 20:47" }
      ]
    };
  },
  created() {},
  mounted() {},
  methods: {
    moreComm(val) {},
    viewGraph() {
      // this.addGraph();
      window.location.href = "./#/viewGraph";
    },
    addGraph() {
      this.$router.push("./mindMapManage");
    }
  }
};
</script> 

<style lang="less" scoped>
.mindMapList {
  position: relative;
  height: 100%;
  .listOption {
    .listOptionLi {
      width: 100%;
      height: 60px;
      line-height: 60px;
      list-style: none;
      position: relative;
      .mindMapImg {
        float: left;
        width: 60px;
        border-bottom: 1px solid transparent;
        text-align: center;
      }
      .mindMapInfo {
        float: left;
        width: calc(~"100% - 60px");
        border-bottom: 1px solid #e6e6e6;
        text-align: left;
        .infoName {
          height: 40px;
          line-height: 40px;
          margin-top: 5px;
          font-size: 14px;
        }
        .infoDate {
          margin-top: -5px;
          height: 20px;
          line-height: 20px;
          font-size: 10px;
          color: #c6c6c6;
        }
      }
      .itemMore {
        position: absolute;
        top: 1px;
        right: 20px;
        i {
          transform: rotate(90deg);
        }
      }
    }
  }

  .addOption {
    position: absolute;
    right: 40px;
    bottom: 20px;
    width: 50px;
    height: 50px;
    line-height: 50px;
    border-radius: 25px;
    background: #666;
    color: #fff;
    text-align: center;
    font-size: 20px;
  }
}
</style> 
