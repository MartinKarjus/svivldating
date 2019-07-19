<template>
    <div>
      <h1>AgePicker</h1>
      <button v-on:click="back">Back</button>
    </div>
</template>


<script>
  import router from '../../router'

  export default {
    name: "AgePicker",
    methods: {
      back: function (event) {
        console.log('trying to go back')
        router.push({name: "UsernamePasswordEmail"});
      },
    }
  }
</script>


<style scoped>

</style>
