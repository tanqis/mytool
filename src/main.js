// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import App from './App'
import router from './router'
import 'animate.css'
// import store from './store'
const $Mock = require('mockjs')

Vue.prototype.$axios = axios
Vue.prototype.$Mock = $Mock
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