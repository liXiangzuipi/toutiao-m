import Vue from 'vue'
import Vuex from 'vuex'
import {setItem,getItem} from '@/utils/storage'
Vue.use(Vuex)

const TOUTIAO_KEY = 'TOUTIAO_USER'

export default new Vuex.Store({
  state: {
    // user:null
    user: getItem(TOUTIAO_KEY)? getItem(TOUTIAO_KEY) : null
  },
  getters: {},
  mutations: {
    setUser(state, data) {
      state.user = data
      //  刷新丢失
      setItem(TOUTIAO_KEY,data)
    }
  },
  actions: {},
  modules: {}
})
