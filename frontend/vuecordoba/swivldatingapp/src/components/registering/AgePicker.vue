<template>
    <div>
      <h1>You are:</h1>
      <button v-on:click="back">Back</button>

      <form>
        <datepicker class="form-control" v-model="date"
                    @closed="registerDate"></datepicker>
      </form>

      <span>{{ error }}</span>

      <button v-on:click="confirm">Confirm</button>
    </div>
</template>


<script>
  import Datepicker from 'vuejs-datepicker';
  import router from '../../router'


  export default {
    name: "AgePicker",
    data() {
      return {
        selectedDate: '',
        error: '',
        openDate: new Date(),
        date: new Date(2001, 0, 1)
      }
    },
    components: {Datepicker},
    methods: {
      checkAge() {
        var compareAge = new Date(this.date.getFullYear() + 18,
          this.date.getMonth(),
          this.date.getDay());
        if( compareAge > new Date()) {
          this.error = "You need to be atleast 18 to register."
        } else {
          this.$myStore.commit('registerBirthDate', this.date)
          this.error = ''
        }
      },
      registerDate: function(event) {
        this.checkAge()
      },
      back: function (event) {
        router.push({name: "UsernamePasswordEmail"});
      },
      confirm: function(event) {
        router.push({name: "Location"})
      }
    }
  }
</script>


<style scoped>

</style>
