<template>
  <section class="container">

    <div class="fixed header">
<!--      <i class="material-icons" @click="index = 0">refresh</i>-->
      <span>Browsing</span>
<!--      <i class="material-icons">tune</i>-->
    </div>


    <div
      v-if="current"
      class="fixed fixed--center"
      style="z-index: 3"
      :class="{ 'transition': isVisible }">

      <Vue2InteractDraggable
        v-if="isVisible"
        :interact-out-of-sight-x-coordinate="500"
        :interact-max-rotation="15"
        :interact-x-threshold="200"
        :interact-y-threshold="200"
        :interact-event-bus-events="interactEventBus"
        interact-block-drag-down
        @draggedRight="emitAndNext('match')"
        @draggedLeft="emitAndNext('reject')"
        @draggedUp="emitAndNext('skip')"
        class="card card--one">
        <div style="height: 100%">
          <img
            :src="require(`../assets/images/${current.src}`)"
            class=""/>
          <div class="text">
            <h2>{{current.name}}, <span>{{current.age}}</span></h2>
          </div>
        </div>
      </Vue2InteractDraggable>


    </div>

    <div
      v-if="next"
      class="card card--two fixed fixed--center"
      style="z-index: 2">
      <div style="height: 100%">
        <img
          :src="require(`../assets/images/${next.src}`)"
        class=""/>
        <div class="text">
          <h2>{{next.name}}, <span>{{next.age}}</span></h2>
        </div>
      </div>
    </div>

    <div
      v-if="index + 2 < cards.length"
      class="card card--three fixed fixed--center"
      style="z-index: 1">
      <div style="height: 100%">
      </div>
    </div>

    <div class="footer fixed">

      <div class="btn " @click="reject">
        <i class="material-icons">Like</i>
      </div>
      <div class="btn " @click="match">
        <i class="material-icons">Like</i>
      </div>

      <div class="btn " @click="matches">
        <i class="">Matches</i>
      </div>

    </div>

  </section>
</template>
<script>

  import { Vue2InteractDraggable, InteractEventBus } from 'vue2-interact'
  import axios from 'axios'
  import router from '../../router'

  const EVENTS = {
    MATCH: 'match',
    SKIP: 'skip',
    REJECT: 'reject'
  }

  export default {
    name: 'Browser',
    components: { Vue2InteractDraggable },
    data() {
      return {
        isVisible: true,
        index: 0,
        interactEventBus: {
          draggedRight: EVENTS.MATCH,
          draggedLeft: EVENTS.REJECT,
          draggedUp: EVENTS.SKIP
        },
        cards: [
          { src: 'karina.jpg', name: 'Catarina', age: 7 },
          { src: 'alexander.jpg', name: 'Alexcater', age: 5 },
          { src: 'bona.jpg', name: 'Bonacat', age: 3 },
          { src: 'ichi.jpg', name: 'Ichi', age: 7 },
          { src: 'lloyd.jpg', name: 'PurrLloyd', age: 4 },
          { src: 'luiza.jpg', name: 'Luiza', age: 9 },
          { src: 'max.jpg', name: 'Maxipuss', age: 6 },
          { src: 'mona.jpg', name: 'Mona', age: 3 },
          { src: 'naru.jpg', name: 'Naru', age: 7 },
          { src: 'ramdan.jpg', name: 'Ramdan', age: 8 },
          { src: 'rikki-austin.jpg', name: 'Rikki Catstin', age: 3 },
          { src: 'tucker.jpg', name: 'Tucker', age: 9 },
          { src: 'uriel.jpg', name: 'Uriel', age: 6 },
          { src: 'zoe.jpg', name: 'Zoe', age: 2 },
        ]
      }
    },
    computed: {
      current() {
        return this.cards[this.index]
      },
      next() {
        return this.cards[this.index + 1]
      }
    },
    methods: {
      matches: function (event) {
        router.push({name: "Matches"});
      },
      requestNewCards() {
        if(this.cards.length < 5) {
          axios.post('http://localhost:8090/api/content/getNewContent',
            {accessToken: this.$myStore.state.accessToken})
            .then(response => {
              //response.data["cake"]
              if (response.data["valid"] === true) {
                this.$myStore.commit('registerGender', this.fd);
              } else {
                this.$myStore.commit('clearLogin');
                router.push({name: "UserLoginRegister"});
              }
            })
            .catch(e => {
              console.log(e);
            })
        }
      },

      match() {
        InteractEventBus.$emit(EVENTS.MATCH)
      },
      reject() {
        InteractEventBus.$emit(EVENTS.REJECT)
      },
      skip() {
        InteractEventBus.$emit(EVENTS.SKIP)
      },
      emitAndNext(event) {
        console.log(event)
        console.log(this.current['name'])
        console.log(this.index)


        //console.log(this.cards[this.current()].name)
        this.$emit(event, this.index)
        setTimeout(() => this.isVisible = false, 200)
        setTimeout(() => {
          this.cards.shift()
          this.requestNewCards()
          //this.index++
          this.isVisible = true
        }, 200)
      },
      mounted() {
        this.requestNewCards();
      }
    }
  }
</script>

<style lang="scss" scoped>
  .container {
    background: #eceff1;
    width: 100%;
    height: 100vh;
  }

  .header {
    width: 100%;
    height: 60vh;
    z-index: 0;
    top: 0;
    left: 0;
    color: white;
    text-align: center;
    font-style: italic;
    background: #f953c6;
    background: -webkit-linear-gradient(to top, #b91d73, #f953c6);
    background: linear-gradient(to top, #b91d73, #f953c6);
    clip-path: polygon(0 1%, 100% 0%, 100% 76%, 0 89%);
    display: flex;
    justify-content: space-between;
    span {
      display: block;
      font-size: 4rem;
      padding-top: 2rem;
      text-shadow: 1px 1px 1px red;
    }
    i {
      padding: 24px;
    }
  }

  .footer {
    width: 77vw;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    padding-bottom: 25px;
    justify-content: space-around;
    align-items: center;
  }



  .flex {
    display: flex;
    &--center {
      align-items: center;
      justify-content: center;
    }
  }

  .fixed {
    position: fixed;
    &--center {
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
  }

  .card {
    width: 80vw;
    height: 60vh;
    color: white;
    img {
      object-fit: cover;
      display: block;
      width: 100%;
      height: 100%;
    }
    &--one {
      box-shadow: 0 1px 3px rgba(0,0,0,.2), 0 1px 1px rgba(0,0,0,.14), 0 2px 1px -1px rgba(0,0,0,.12);
    }
    &--two {
      transform: translate(-48%, -48%);
      box-shadow: 0 6px 6px -3px rgba(0,0,0,.2), 0 10px 14px 1px rgba(0,0,0,.14), 0 4px 18px 3px rgba(0,0,0,.12);
    }
    &--three {
      background: rgba(black, .8);
      transform: translate(-46%, -46%);
      box-shadow: 0 10px 13px -6px rgba(0,0,0,.2), 0 20px 31px 3px rgba(0,0,0,.14), 0 8px 38px 7px rgba(0,0,0,.12);
    }
    .text {
      position: absolute;
      bottom: 0;
      width: 100%;
      background:black;
      background:rgba(0,0,0,0.5);
      text-indent: 20px;
      span {
        font-weight: normal;
      }
    }
  }

  .transition {
    animation: appear 200ms ease-in;
  }

  @keyframes appear {
    from {
      transform: translate(-48%, -48%);
    }
    to {
      transform: translate(-50%, -50%);
    }
  }
</style>
