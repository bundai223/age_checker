import Vue from 'vue'
import Vuex from 'vuex'
import MyModule from './store/date'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    date: MyModule
  }
})
