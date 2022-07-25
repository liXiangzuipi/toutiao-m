import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const TOUTIAO_KEY = 'TOUTIAO_USER'

export default new Vuex.Store({
  state: {
    // user:null
    user: window.localStorage.getItem(TOUTIAO_KEY) ? JSON.parse(window.localStorage.getItem(TOUTIAO_KEY)) : null
  },
  getters: {},
  mutations: {
    setUser(state, data) {
      state.user = data
      //  刷新丢失
      window.localStorage.setItem(TOUTIAO_KEY, JSON.stringify(this.state.user))
    }
  },
  actions: {},
  modules: {}
})
