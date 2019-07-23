<template>
  <div>
    <div>
      <h1>Location</h1>
      <span>todo if we have time / maybe just select country?</span>
      <br>

      <button v-on:click="back">Back</button>

      <button v-on:click="confirm">Confirm</button>
    </div>
  </div>
</template>


<script>
  import router from '../../router'

  export default {
    name: "Location",
    methods: {
      back: function (event) {
        router.push({name: "AgePicker"});
      },
      confirm: function(event) {
        router.push({name: "ImageUpload"})
      }
    }
  }
</script>


<style scoped>

</style>
