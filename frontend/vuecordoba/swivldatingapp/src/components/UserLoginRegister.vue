<template>
  <div>
    <div>
      <h1>UserLoginRegister</h1>
      <input v-model="email" placeholder="Email">
      <input v-model="password" placeholder="Password">

      <button v-on:click="login">Login</button>
      <button v-on:click="register">Register</button>
      <router-link to="usernamepasswordemail">FirstRoute</router-link>
<!--      <datepicker :value="state.date"></datepicker>-->
    </div>
  </div>
</template>


<script>
  import axios from 'axios'
  import router from '../router'
  //import Datepicker from "vuejs-datepicker/src/components/Datepicker";

  export default {
    name: "UserLoginRegister",
    //components: {Datepicker},
    data() {
      return {
        email: "",
        password: "",
        error: ""
      }
    },
    methods: {
      /*sendReg: function (event) {
        this.$http.post('http://localhost:8090/temp', {something: "string"})
          .then ((res)=> console.log (res.body))
          .catch ((error)=> console.log(error));*/
      login: function (event) {
        this.validUsernamePassword()
        //todo Change after endpoint done
      },

      validUsernamePassword() {
        //todo impl
        return true;
      },

      register: function (event) {
        router.push({ name: "UsernamePasswordEmail" });
        this.validUsernamePassword()

        //todo change after endpoint
        axios.post('http://localhost:8090/temp', {username: this.username,password: this.password})
          .then(response => {
            console.log("is valid login:" + response.data["valid"])
          })
          .catch(e => {
            console.log(e)
          })
      }


    }
  }
</script>


<style scoped>

</style>
