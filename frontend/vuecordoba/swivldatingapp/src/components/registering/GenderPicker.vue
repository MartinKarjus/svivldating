<template>

  <div>
    <h1>You are:</h1>
    <div class="container"><button v-on:click="man" class="btn btn-lg btn-info" >Man</button>
    <button v-on:click="woman" class="btn btn-lg btn-danger">Woman</button>
    <br>
    </div>
    <button v-on:click="back" class="btn btn-lg btn-dark">Back</button>
  </div>
</template>


<script>
  import router from '../../router'

  export default {
    name: "GenderPicker",
    methods: {
      back: function (event) {
        router.push({name: "UsernamePasswordEmail"});
      },
      registerGender(gender) {
        this.$myStore.commit('registerOwnGender', gender)
        router.push({name: "LookingFor"});
      },
      man: function (event) {
        this.registerGender("man")
      },
      woman: function (event) {
        this.registerGender("woman")
      }
    }
  }
</script>


<style scoped>

</style>
