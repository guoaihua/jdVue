import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  sessionName: ''
}

const mutations = {
  setSession (state, name) {
    state.sessionName = name
  }
}

const actions = {
  setSession ({commit, state}, name) {
    commit('setSession', name)
  }
}

export default new Vuex.Store({
  state,
  actions,
  mutations
})
