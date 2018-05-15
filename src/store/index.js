import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  sessionName: '',
  userInfos: {
    name: ''
  }
}

const mutations = {
  setSession: function (state, name) {
    state.sessionName = name
  },
  setUserInfos: function (state, userInfos) {
    state.userInfos = userInfos
  }
}

const actions = {
  setSession ({commit, state}, name) {
    commit('setSession', name)
  },
  setUserInfos ({commit, state}, userInfos) {
    commit('setUserInfos', userInfos)
  }
}

export default new Vuex.Store({
  state,
  actions,
  mutations
})
