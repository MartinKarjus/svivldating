<template>

  <div>
    <div class="btn" style="background-color: lightcoral" @click="browser">
      <i class="material-icons">Browser</i>
    </div>


    <h1>Your matches</h1>


    <ul id="example-1" class="box2">
      <li v-for="item in items">
        <div class="container">
          <div class="row">
            <div class="col-xs-6 box">
              <img
                :src="require(`../assets/images/${item.src}`)"
                class="rounded-borders"/>
            </div>
            <div class="col-xs-6 box">
              {{ item.message }}
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
          {message: "Foo", src: 'karina.jpg'},
          {message: "Bar", src: 'alexander.jpg'}
        ]
      }
    },
    methods: {
      browser: function (event) {
        router.push({name: "Browser"});
      },
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
  .rounded-borders {
    border-radius: 12px;
    width: 150px;
    height: 150px;
  }
  .box2 {
    width: 500px;
    height: 500px;
  }


</style>
