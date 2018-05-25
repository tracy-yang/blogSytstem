import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import user from './modules/user'
import page from './modules/page'


Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user,
    page
  },
  getters
})
