<template>

  <div>
    <h1>GenderPicker</h1>
    <button v-on:click="man">Man</button>
    <button v-on:click="woman">Woman</button>
    <button v-on:click="back">Back</button>
  </div>
</template>


<script>
  import router from '../../router'

  export default {
    name: "GenderPicker",
    methods: {
      back: function (event) {
        console.log('trying to go back')
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
