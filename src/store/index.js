import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  sessionName: '',
  userInfos: {
    name: ''
  },
  shops: []
}

const mutations = {
  setSession: function (state, name) {
    state.sessionName = name
  },
  setUserInfos: function (state, userInfos) {
    state.userInfos = userInfos
  },
  setShops: function (state, img) {
    state.shops.push(img)
  }
}

const actions = {
  setSession ({commit, state}, name) {
    commit('setSession', name)
  },
  setUserInfos ({commit, state}, userInfos) {
    commit('setUserInfos', userInfos)
  },
  setShops ({commit, state}, img) {
    commit('setShops', img)
  }
}

export default new Vuex.Store({
  state,
  actions,
  mutations
})
