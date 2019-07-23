<template>
  <div>
    <h1>I'm into:</h1>
    <button v-on:click="men" class="btn btn-info btn-lg">Men</button>
    <br>
    <button v-on:click="women" class="btn btn-danger btn-lg">Women</button>
    <br>
    <button v-on:click="both" class="btn btn-lg btn ">Both</button>
    <br>
    <button v-on:click="back">back</button>
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
