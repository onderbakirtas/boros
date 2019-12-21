import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    activeBg: 'http://localhost:8086/img/wp3.d008edf3.jpg',
    settingsBackgroundPos: {
      x: 0,
      y: 0,
      z: 0
    },
    musicPlayerPos: {
      x: 0,
      y: 0,
      z: 0
    }
  },
  getters: {
    pickedBg: state => state.activeBg,
    currentWindowPos: state => state.settingsBackgroundPos,
    mpWinPos: state => state.musicPlayerPos
  },
  mutations: {
    SET_BACKGROUND(state, load) {
      state.activeBg = load
    },
    SET_WINDOW_POS(state, pos) {
      state.settingsBackgroundPos.x = pos.x
      state.settingsBackgroundPos.y = pos.y
      state.settingsBackgroundPos.z = pos.z
    },
    SET_MP_POS(state, pos) {
      state.musicPlayerPos.x = pos.x
      state.musicPlayerPos.y = pos.y
      state.musicPlayerPos.z = pos.z
    }
  },
  actions: {
    setMpPos: ({ commit }, pos) => {
      commit('SET_MP_POS', pos)
    },
    setBg: ({ commit }, bg) => {
      commit('SET_BACKGROUND', bg)
    },
    setWindowPos: ({ commit }, pos) => {
      commit('SET_WINDOW_POS', pos)
    }
  },
  modules: {}
})
