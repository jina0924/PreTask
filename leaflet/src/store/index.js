import axios from 'axios'
import { createStore } from 'vuex'

export default createStore({
  state: {
    all_list: [],
    all_page: {},
    healthy_list: [],
    healthy_page: {},
    summer_fruit_list: [],
    summer_fruit_page: {},
    peacock_list: [],
    peacock_page: {},
    fresh_list: [],
    fresh_page: {},
    // item_list: []
  },
  getters: {
    all_list: state => state.all_list,
    all_page: state => state.all_page,
    healthy_list: state => state.healthy_list,
    healthy_page: state => state.healthy_page,
    summer_fruit_list: state => state.summer_fruit_list,
    summer_fruit_page: state => state.summer_fruit_page,
    peacock_list: state => state.peacock_list,
    peacock_page: state => state.peacock_page,
    fresh_list: state => state.fresh_list,
    fresh_page: state => state.fresh_page,
    // item_list: state => state.item_list
  },
  mutations: {
    SET_ALL_LIST: (state, all_object) => {
      state.all_page = {
        page: all_object.page,
        previous: all_object.previous,
        next: all_object.next,
      }
      if (state.all_page.page > 1) {
        for (const result of all_object.result) {
          state.all_list.push(result)
        }
      } else {
        state.all_list = all_object.result
      }
    },
    SET_HEALTHY_LIST: (state, healthy_object) => {
      state.healthy_page = {
        page: healthy_object.page,
        previous: healthy_object.previous,
        next: healthy_object.next,
      }
      if (state.healthy_page.page > 1) {
        for (const result of healthy_object.result) {
          state.healthy_list.push(result)
        }
      } else {
        state.healthy_list = healthy_object.result
      }
    },
    SET_SUMMER_FRUIT_LIST: (state, summer_fruit_object) => {
      state.summer_fruit_page = {
        page: summer_fruit_object.page,
        previous: summer_fruit_object.previous,
        next: summer_fruit_object.next,
      }
      if (state.summer_fruit_page.page > 1) {
        for (const result of summer_fruit_object.result) {
          state.summer_fruit_list.push(result)
        }
      } else {
        state.summer_fruit_list = summer_fruit_object.result
      }
    },
    SET_PEACOCK_LIST: (state, peacock_object) => {
      state.peacock_page = {
        page: peacock_object.page,
        previous: peacock_object.previous,
        next: peacock_object.next,
      }
      if (state.peacock_page.page > 1) {
        for (const result of peacock_object.result) {
          state.peacock_list.push(result)
        }
      } else {
        state.peacock_list = peacock_object.result
      }
    },
    SET_FRESH_LIST: (state, fresh_object) => {
      state.fresh_page = {
        page: fresh_object.page,
        previous: fresh_object.previous,
        next: fresh_object.next,    
      }
      if (state.fresh_page.page > 1) {
        for (const result of fresh_object.result) {
          state.fresh_list.push(result)
        }
      } else {
        state.fresh_list = fresh_object.result
      }
    },
    // SET_ITEM_LIST: (state, item_list) => state.item_list = item_list
  },
  actions: {
    fetchAllList({ commit }, page) {
      axios({
        url: `/all_list_${page}.json`,
        method: 'get',
      })
      .then(res =>
        commit('SET_ALL_LIST', res.data)
      )
      .catch(err => console.log(err.response))
    },

    fetchHealthyList({ commit }, page) {
      axios({
        url: `/healthy_list_${page}.json`,
        method: 'get',
      })
      .then(res =>
        commit('SET_HEALTHY_LIST', res.data)
      )
      .catch(err => console.log(err.response))
    },

    fetchSummnerFruitList({ commit }, page) {
      axios({
        url: `/fruit_list_${page}.json`,
        method: 'get',
      })
      .then(res =>
        commit('SET_SUMMER_FRUIT_LIST', res.data)
      )
      .catch(err => console.log(err.response))
    },

    fetchPeacockList({ commit }, page) {
      axios({
        url: `/peacock_list_${page}.json`,
        method: 'get',
      })
      .then(res =>
        commit('SET_PEACOCK_LIST', res.data)
      )
      .catch(err => console.log(err.response))
    },

    fetchFreshList({ commit }, page) {
      axios({
        url: `/fresh_list_${page}.json`,
        method: 'get',
      })
      .then(res =>
        commit('SET_FRESH_LIST', res.data)
      )
      .catch(err => console.log(err.response))
    },
  },
  // modules: {
  // }
})
