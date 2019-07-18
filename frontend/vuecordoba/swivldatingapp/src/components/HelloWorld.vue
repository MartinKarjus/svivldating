<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <div id='example-3'>
      <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
      <label for="jack">Jack</label>
      <input type="checkbox" id="john" value="John" v-model="checkedNames">
      <label for="john">John</label>
      <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
      <label for="mike">Mike</label>
      <br>
      <span>Checked names: {{ checkedNames }}</span>
    </div>
    <button v-on:click="increase">Increase by 1</button>
    <input v-model="message1" placeholder="username">
    <input v-model="message2" placeholder="password">
    <h1>data counter: {{count}}</h1>
    <h1>registration info: {{registration}}</h1>
    <button v-on:click="sendReg">submit registration info</button>
    <button v-on:click="clearReg">clear registration info</button>
    <h2> {{ temp }}</h2>
    <h2> {{ temp2 }}</h2>
    <h2> {{ temp3 }}</h2>

  </div>
</template>

<script>
  //import store from '../store'

  export default {
    name: 'HelloWorld',
    data() {
      return {
        message1 : "",
        message2 : "",
        temp: new Map(),
        temp2: "",
        temp3: "",
        checkedNames: [],
        msg: 'playground',
        //count: this.$myStore.state.count
      }
    },
    methods: {
      increase: function (event) {
        this.$myStore.commit('increment')
      },
      clearReg: function (event) {
        this.$myStore.commit('clearRegistrationFields')
      },
      sendReg: function (event) {
        console.log('sending reg with ' + this.message1 + ' and ' + this.message2)
        var namePass = {}
        namePass["username"] = this.message1
        namePass["password"] = this.message2
        this.$myStore.commit('setRegistrationField', namePass)
      }
    },
    computed: {
      count() {
        return this.$myStore.state.count
      },
      registration() {
        return this.$myStore.state.registration
      }

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
