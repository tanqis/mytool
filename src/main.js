import Vue from 'vue'
import ElementUI from 'element-ui'
import "animate.css"
import "element-ui/lib/theme-chalk/index.css"
import "@/assets/css/main.css"
import App from './App'
import router from './router'

// @import "font-awesome";

import axios from './assets/js/axiosConfig.js'
import url from './assets/js/urlConfig'
// import store from './store'
// const $Mock = require('mockjs') 

Vue.prototype.$axios = axios
Vue.prototype.$url = url
// Vue.prototype.$Mock = $Mock
Vue.use(ElementUI)
Vue.config.productionTip = false

//引入mock

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // store,
  components: {
    App
  },
  template: '<App/>'
})