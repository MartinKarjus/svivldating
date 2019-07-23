//The Vue build version to load with the `import` command
//(runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import storePlugin from "./storePlugin"
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
//import Datepicker from 'vuejs-datepicker'

Vue.config.productionTip = false
Vue.use(Vuex)
Vue.use(storePlugin)
//Vue.use(Datepicker)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App,
    //Datepicker
  },
  template: '<App/>'
})

