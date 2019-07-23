<template>
  <div>
    <h1>Quiz</h1>


    <br>
    <br>

    <br>
    <span>{{staticQuiz[0].question}}</span>
    <br>
    <button v-on:click="choice1" :disabled='isDisabled'>{{staticQuiz[0].txt1}}</button>
    <button v-on:click="choice2" :disabled='isDisabled'>{{staticQuiz[0].txt2}}</button>


    <!--    <button v-on:click="confirm">Confirm</button>-->
  </div>
</template>


<script>
  import router from '../../router'
  import axios from 'axios'

  export default {
    name: "Quiz",
    data() {
      return {
        disabled: true, //todo change to false after implementing request for quizzes
        count: 0,
        staticQuiz: [
          { question: "sun or moon",src1: 'quizplaceholder.jpg', txt1: 'sun',
            src2: 'quizplaceholder.jpg', txt2: 'moon', key: 1},
          { question: "cake or pizza",src1: 'quizplaceholder.jpg', txt1: 'cake',
            src2: 'quizplaceholder.jpg', txt2: 'pizza', key: 2},
          { question: "smoker or non-smoker",src1: 'quizplaceholder.jpg', txt1: 'smoker',
            src2: 'quizplaceholder.jpg', txt2: 'non-smoker', key: 3},
          { question: "should be unreachable",src1: 'quizplaceholder.jpg', txt1: 'invalid',
            src2: 'quizplaceholder.jpg', txt2: 'question', key: 4},
        ]
      }
    },
    methods: {
      choice1: function (event) {
        this.updateQuiz(1)
      },
      choice2: function (event) {
        this.updateQuiz(2)
      },
      updateQuiz(choiceNr) {
        this.count += 1;
        if(this.count >= 3) {
          this.count = 0;
          router.push({name: "Browser"});
        }

        this.staticQuiz.shift();
      },
      init() {
        //todo quizzes from server
      }
    },
    mounted() {
      this.init();
    },
    computed: {
      isDisabled: function() {
        return !this.disabled
      }
    }
  }
</script>


<style scoped>

</style>
