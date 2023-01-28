import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    searchVal:'',
    
  },
  mutations: {
    setSearch(state,date) {
      state.searchVal = date;
    },
   
  },
  actions:{
    setSearch(context, date) {
      context.commit('setSearch', date)
    }
  }

  
})