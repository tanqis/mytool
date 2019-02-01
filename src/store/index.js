import Vue from 'vue'
import Vuex from 'vuex'
// import actions from './actions'
// import mutations from './mutations'
// import car from './modules/car.js'

Vue.use(Vuex);

export default new Vuex.store({
  strict: process.env.NODE_ENV !== 'production',
  modules: {}
})
