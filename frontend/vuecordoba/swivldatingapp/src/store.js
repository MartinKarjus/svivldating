import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
    registration: new Map(),
    accessToken: "",
  },
  mutations: {
    increment(state) {
      state.count++
    },
    setRegistrationField(state, userPass) {
      console.log('username ' + userPass["username"]);
      console.log('password ' + userPass["password"]);
      state.registration.set("username", userPass["username"]);
      state.registration.set("password", userPass["password"])
    },
    clearRegistrationFields(state) {
      state.registration.clear()
    },
    registerGender(state, gender) {
      state.registration.set("lookingFor", gender)
    },
    registerOwnGender(state, gender) {
      state.registration.set("gender", gender)
    },
    registerUserInformation(state, userInfo) {
      state.registration.set("firstname", userInfo["firstname"]);
      state.registration.set("lastname", userInfo["lastname"]);
      state.registration.set("password", userInfo["password"]);
      state.registration.set("email", userInfo["email"])
    }
    

  }

})
