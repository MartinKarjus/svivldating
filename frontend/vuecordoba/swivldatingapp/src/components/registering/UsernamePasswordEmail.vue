<template>
  <div>
    <h1>Sign up</h1>
    <input v-model="firstname" placeholder="First name" class="form-control" >
    <br>
    <input v-model="lastname" placeholder="Last name" class="form-control" >
    <br>
    <input v-model="eMail" placeholder="Email" class="form-control" >
    <br>
    <input v-model="password" placeholder="Password" class="form-control" >
    <br>
    <button v-on:click="confirm" class="btn-lg btn">Confirm</button>
    <br>
    <button v-on:click="back" class="btn btn-lg">Back</button>
    <br>
    <span>{{ error }}</span>
  </div>
</template>


  <script>
  import router from '../../router'
  import axios from 'axios'

  export default {
    //name: "UsernamePasswordEmail",
    name: "usernamepasswordemail",
    //components: {Datepicker},
    data() {
      return {
        firstname: "",
        lastname: "",
        password: "",
        error: "",
        eMail: ""
      }
    },
    methods: {

      //todo impl or check if theres a way in vue to do it automatically(fields cant be empty)
      //todo check if theres a way to make a vue form with a button thats conditional
      //      (maybe make it so it cant be pressed while fields not filled/valid)
      notEmptyOrInvalid() {
        return true;
      },

      addRegInfo() {
        let regInfo = {};
        regInfo["firstname"] = this.firstname;
        regInfo["lastname"] = this.lastname;
        regInfo["password"] = this.password;
        regInfo["email"] = this.eMail;
        this.$myStore.commit('registerGender', regInfo);
      },

      confirmUserDetails() {
        axios.post('http://localhost:8090/api/registration/checkEmailAvailable',
          {firstName: this.firstName, lastName: this.lastName, pass: this.password, email: this.eMail})
          .then(response => {
            //response.data["cake"]
            if (this.eMail !== response.data["email"]) {
              this.error = "Email already in use"
            } else {
              this.addRegInfo();
              router.push({name: "GenderPicker"});
            }
          })
          .catch(e => {
            console.log(e);
          })
        //.finally(() => this.loading = false)
      },

      confirm: function (event) {
        if(this.notEmptyOrInvalid()) {
          this.confirmUserDetails();
        }
        //router.push({name: "GenderPicker"});
      },
      back: function (event) {
        router.push({name: "UserLoginRegister"});
      }
    }
  }
</script>


<style scoped>

</style>
