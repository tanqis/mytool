<template>
  <div class="myPage">
    <!-- <div class="myHeader">
      <Header></Header>
    </div> -->
    <div class="myMain">
      <div class="myContenter">
        <router-view></router-view>
      </div>
      <div class="myFooter">
        <Footer></Footer>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./Header.vue";
import Footer from "./Footer.vue";

export default {
  components: {
    Header,
    Footer
  },
  data() {
    return {};
  }
};
</script>

<style scope>
.myPage {
  background: #fff;
  font-size: 12px;
  width: 100%;
  overflow: hidden;
  padding: 0;
  margin: 0;
  border: 0;
  height: 100%;
}
.myHeader,
.myFooter {
  width: 100%;
  height: 48px;
  line-height: 48px;
  background: linear-gradient(#7c8df3, #83bbf5);
  /* text-align: center; */
}
.myHeader {
  position: fixed;
  z-index: 99;
}
.myMain {
  /* margin-top: 60px; */
  width: 100%;
  height: 100%; /*calc(100%);*/
}
.myMain > .myContenter {
  /* padding: 20px; */
  padding-top: 0;
  overflow: auto;
  height: calc(100% - 48px);
}
</style>