import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
    registration: new Map()
  },
  mutations: {
    increment(state) {
      state.count++
    },
    setRegistrationField(state, userPass) {
      console.log('username ' + userPass["username"])
      console.log('password ' + userPass["password"])
      state.registration.set("username", userPass["username"])
      state.registration.set("password", userPass["password"])
    },
    clearRegistrationFields(state) {
      state.registration.clear()
    }

  }

})
