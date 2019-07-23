<template>
  <div>
    <div>
      <h1>{{beingCreated}}</h1>
      <br>
      <button v-on:click="confirm">Continue</button>

      <br>
      <span>{{error}}</span>
    </div>
  </div>
</template>


<script>
  import router from '../../router'
  import axios from 'axios'

  export default {
    name: "AccCreated",
    data() {
      return {
        beingCreated: 'Please wait while your account is being created',
        error: ''
      }
    },
    methods: {
      confirm: function(event) {
        router.push({name: "Home"})
      },
      register() {
        console.log("registering account")
        this.beingCreated = 'Your account has been created!'
      }
    },
    mounted() {
      this.register()

      // axios.post('http://localhost:8090/api/registration/imageUpload', fd)
      //   .then(response => {
      //     console.log(response)
      //   })
      //   .catch(e => {
      //     console.log(e)
      //   })
    }
  }
</script>


<style scoped>

</style>
