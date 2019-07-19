<template>
  <div>
    <h1>UserLoginRegister</h1>
    <button v-on:click="men">Men</button>
    <button v-on:click="women">Women</button>
    <button v-on:click="both">Both</button>
    <button v-on:click="back">back</button>
    <router-link to="usernamepasswordemail">FirstRoute</router-link>
  </div>
</template>


<script>
  import router from '../../router'

  export default {
    name: "LookingFor",
    methods: {
      back: function (event) {
        router.push({ name: "GenderPicker" });
      },
      registerGender(gender) {
        this.$myStore.commit('registerGender', gender)
        router.push({ name: "AgePicker" });
      },
      men: function (event) {
        this.registerGender("men")
      },
      women: function (event) {
        this.registerGender("women")
      },
      both: function (event) {
        this.registerGender("both")
      }

    }
  }
</script>


<style scoped>

</style>
