import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  sessionName: '',
  username: ''
}

const mutations = {
  setSession: function (state, name) {
    state.sessionName = name
  },
  setName: function (state, name) {
    state.username = name
  }
}

const actions = {
  setSession ({commit, state}, name) {
    commit('setSession', name)
  },
  setName ({commit, state}, name) {
    commit('setName', name)
  }
}

export default new Vuex.Store({
  state,
  actions,
  mutations
})
