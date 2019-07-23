<template>
  <div>
    <div>
      <h1>SWIVL.me</h1>
      <input v-model="email" placeholder="Email"  class="form-control" >
      <br>
      <input v-model="password" placeholder="Password" class="form-control">
      <br>

      <button v-on:click="login" type="button" class="btn btn-primary btn-lg">Login</button>
      <button v-on:click="register"  type="button" class="btn btn-secondary btn-lg">Register</button>
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
        if(this.validUsernamePassword()) {
          router.push({name: "Quiz"});
        } else {
          error = "Invalid email or password"
        }
      },

      validUsernamePassword() {
        return true;

        //todo change after endpoint
        // axios.post('http://localhost:8090/api/registration/checkEmailAvailable', {username: this.username,email: this.email})
        //   .then(response => {
        //     console.log(response.data)
        //     console.log("returned uname,email:" + response.data["username"] + " " + response.data["email"])
        //   })
        //   .catch(e => {
        //     console.log(e)
        //   })
      },

      register: function (event) {
        router.push({ name: "UsernamePasswordEmail" });
        //router.push({ name: "ImageUpload" });
        //router.push({ name: "AccCreated" });
        this.validUsernamePassword()
      }


    }
  }
</script>


<style scoped>

</style>
