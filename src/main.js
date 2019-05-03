import Vue from 'vue'
import ElementUI from 'element-ui'
import axios from 'axios'
import App from './App'
import router from './router'

const url = require('../config/url')
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