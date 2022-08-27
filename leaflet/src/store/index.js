import axios from 'axios'
import { createStore } from 'vuex'

export default createStore({
  state: {
    // all_list: [],
    // healthy_list: [],
    // summer_fruit_list: [],
    // peacock_list: [],
    // fresh_list: [],
    item_list: []
  },
  getters: {
    // all_list: state => state.all_list,
    // healthy_list: state => state.healthy_list,
    // summer_fruit_list: state => state.summer_fruit_list,
    // peacock_list: state => state.peacock_list,
    // fresh_list: state => state.fresh_list,
    item_list: state => state.item_list
  },
  mutations: {
    // SET_ALL_LIST: (state, all_list) => state.all_list = all_list,
    // SET_HEALTHY_LIST: (state, healthy_list) => state.healthy_list = healthy_list,
    // SET_SUMMER_FRUIT_LIST: (state, summer_fruit_list) => state.summer_fruit_list = summer_fruit_list,
    // SET_PEACOCK_LIST: (state, peacock_list) => state.peacock_list = peacock_list,
    // SET_FRESH_LIST: (state, fresh_list) => state.fresh_list = fresh_list,
    SET_ITEM_LIST: (state, item_list) => state.item_list = item_list
  },
  actions: {
    fetchAllList({ commit }) {
      axios({
        url: '/all_list.json',
        method: 'get',
      })
      .then(res =>
        // commit('SET_ALL_LIST', res.data)
        commit('SET_ITEM_LIST', res.data)
      )
      .catch(err => console.log(err.response))
    },

    fetchHealthyList({ commit }) {
      axios({
        url: '/healthy_list.json',
        method: 'get',
      })
      .then(res =>
        commit('SET_ITEM_LIST', res.data)
      )
      .catch(err => console.log(err.response))
    },

    fetchSummnerFruitList({ commit }) {
      axios({
        url: '/fruit_list.json',
        method: 'get',
      })
      .then(res =>
        commit('SET_ITEM_LIST', res.data)
      )
      .catch(err => console.log(err.response))
    },

    fetchPeacockList({ commit }) {
      axios({
        url: '/peacock_list.json',
        method: 'get',
      })
      .then(res =>
        commit('SET_ITEM_LIST', res.data)
      )
      .catch(err => console.log(err.response))
    },

    fetchFreshList({ commit }) {
      axios({
        url: '/fresh_list.json',
        method: 'get',
      })
      .then(res =>
        commit('SET_ITEM_LIST', res.data)
      )
      .catch(err => console.log(err.response))
    },
  },
  // modules: {
  // }
})
