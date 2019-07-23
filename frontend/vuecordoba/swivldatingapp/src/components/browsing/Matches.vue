<template>

  <div>
    <h1>GenderPicker</h1>
    <span>I am a</span><br>
    <button v-on:click="man">Man</button>
    <button v-on:click="woman">Woman</button>
    <br>
    <button v-on:click="back">Back</button>


    <ul id="example-1">
      <li v-for="item in items">
        <div class="container boxmid">
          <div class="row">
            <div class="col-xs-6 box">
              {{ item.message }}
            </div>
            <div class="col-xs-6 box">
              TWO
            </div>
          </div>
        </div>
      </li>
    </ul>

  </div>
</template>


<script>
  import router from '../../router'

  export default {
    name: "Matches",
    data() {
      return {
        items: [
          {message: "Foo"},
          {message: "Bar"}
        ]
      }
    },
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

  .box {
    display: flex;
    height: 50px;
    width: 50px;
    text-align: center;
  }
  .boxmid {
    position: absolute;
    left: 50%;
    top: 50%;
  }


</style>
