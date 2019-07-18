<template>
  <v-container text-xs-center>
    <div>
      <h1>UsernamePasswordEmail</h1>
      <v-btn @click="login"> Login </v-btn>
      <v-btn @click="register"> Register </v-btn>
      <span>{{ error }}</span>
      <input v-model="username" placeholder="Username">
      <input v-model="password" placeholder="Password">
    </div>
  </v-container>
</template>


<script>
  export default {
    name: "UsernamePasswordEmail",
    data() {
      return {
        username: "",
        password: "",
        error: ""
      }
    },
    methods: {
      login() {

      }
    }
  }
</script>


<style scoped>

</style>
