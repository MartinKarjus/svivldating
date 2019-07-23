<template>

  <div>
    <h1>Home</h1>

    <div class="alert alert-success alert-dismissible fade show" role="alert">
      Welcome to Swivl
      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>

    <div>
      <button v-on:click="browse">Browse matches</button>
    </div>
  </div>

</template>


<script>
  import router from '../../router'

  export default {
    name: "Home",
    methods: {
      browse: function(event) {
        router.push({name: "Browser"});
      }
    }
  }
</script>


<style scoped>

</style>
