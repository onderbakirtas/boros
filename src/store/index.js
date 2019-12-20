import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    activeBg: 'http://localhost:8080/img/wp1.86a93094.jpg',
    settingsBackgroundPos: {
      x: 0,
      y: 0
    }
  },
  getters: {
    pickedBg: state => state.activeBg,
    currentWindowPos: state => state.settingsBackgroundPos
  },
  mutations: {
    SET_BACKGROUND(state, load) {
      state.activeBg = load
    },
    SET_WINDOW_POS(state, pos) {
      state.settingsBackgroundPos.x = pos.x
      state.settingsBackgroundPos.y = pos.y
    }
  },
  actions: {
    setBg: ({ commit }, bg) => {
      commit('SET_BACKGROUND', bg)
    },
    setWindowPos: ({ commit }, pos) => {
      commit('SET_WINDOW_POS', pos)
    }
  },
  modules: {}
})
