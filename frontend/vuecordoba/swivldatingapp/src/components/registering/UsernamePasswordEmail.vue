<template>
  <div>
    <h1>UsernamePasswordEmail</h1>
    <input v-model="firstname" placeholder="First name">
    <input v-model="lastname" placeholder="Last name">
    <input v-model="eMail" placeholder="Email">
    <input v-model="password" placeholder="Password">
    <button v-on:click="confirm">Confirm</button>
    <button v-on:click="back">Back</button>
    <span>{{ error }}</span>
  </div>
</template>


<script>
  import router from '../../router'

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
      notEmpty() {

      },

      addRegInfo() {
        regInfo = {};
        reginfo["firstname"] = this.firstname;
        reginfo["lastname"] = this.lastname;
        reginfo["password"] = this.password;
        reginfo["email"] = this.eMail;
        this.$myStore.commit('registerGender', gender)
      },

      confirmUserDetails() {
        axios.post('http://localhost:8090/temp',
          {firstName: this.username, lastName: this.lastName, pass: this.password, email: this.eMail})
          .then(response => {
            //response.data["cake"]
            if (response.data['valid'] === false) {
              this.error = "invalid information(this needs to be made specific)"
            } else {
              this.addRegInfo();
              router.push({name: "GenderPicker"});
            }
          })
          .catch(e => {
            console.log(e)
          })
        //.finally(() => this.loading = false)
      },

      confirm: function (event) {
        router.push({name: "GenderPicker"});
      },
      back: function (event) {
        router.push({name: "UserLoginRegister"});
      }
    }
  }
</script>


<style scoped>

</style>
