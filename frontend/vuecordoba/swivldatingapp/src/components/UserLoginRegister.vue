<template>
  <div>
    <div>
      <h1>UserLoginRegister</h1>
      <input v-model="username" placeholder="Username">
      <input v-model="password" placeholder="Password">

      <button v-on:click="login">Login</button>
      <button v-on:click="register">Register</button>
    </div>
  </div>
</template>


<script>
  import axios from 'axios'

  export default {
    name: "UserLoginRegister",
    data() {
      return {
        username: "",
        password: "",
        error: ""
      }
    },
    methods: {

      sendReg() {
//        this.$http.post('http://localhost:8090/temp', {something: "string"})
//          .then((res) => console.log(res.body))
//          .catch((error) => console.log(error));
        axios.post('http://localhost:8090/temp', {username: "cake",password: "glory"})
          .then(response => {
            console.log("response:" + response.data.toString())
            console.log("response2:" + response.data["cake"])
            var cake = JSON.parse(response.data)
            console.log("cake is:" + cake)
            console.log(cake["cake"])
          })
          .catch(e => {
            console.log(e)
          })
      },

      /*sendReg: function (event) {
        this.$http.post('http://localhost:8090/temp', {something: "string"})
          .then ((res)=> console.log (res.body))
          .catch ((error)=> console.log(error));*/
      login: function (event) {
        console.log('sending reg with ' + this.message1 + ' and ' + this.message2)
        var namePass = {}
        namePass["username"] = this.message1
        namePass["password"] = this.message2
        this.$myStore.commit('setRegistrationField', namePass)
      },

      register: function (event) {
        this.sendReg()
      }


    }
  }
</script>


<style scoped>

</style>
