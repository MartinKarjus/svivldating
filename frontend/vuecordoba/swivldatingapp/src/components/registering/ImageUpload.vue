<template>
  <div>
    <h1>ImageUpload</h1>
    <button v-on:click="back">Back</button>
    <br>

    <input type="file" @change="fileSelected">
    <br>
    <br>

    <div id="preview">
      <img v-if="url" :src="url" alt="img"
           height="100px"
           width="150px"/>
    </div>
    <br>
    <button v-on:click="confirm">Confirm</button>

    <span>{{ error }}</span>

    <!--    <button v-on:click="confirm">Confirm</button>-->
  </div>
</template>


<script>
  import router from '../../router'
  import axios from 'axios'

  export default {
    name: "ImageUpload",
    data() {
      return {
        url: null,
        selectedFile: null,
        error: '',
        fd: null
      }
    },
    methods: {
      fileSelected(event) {
        this.selectedFile = event.target.files[0];
        this.url = URL.createObjectURL(this.selectedFile);
      },
      upload(event) { // poor wording, actual upload is done in AccCreated
        this.fd = new FormData();
        this.fd.append('file', this.selectedFile, this.selectedFile.name);
        this.$myStore.commit('registerGender', this.fd);

      },
      back: function (event) {
        router.push({name: "Location"});
      },
      confirm: function (event) {
        this.upload();
        if(fd == null) {
          this.error = "Please upload an image to continue."
        } else {
          this.error = ''
          router.push({name: "UserAgreement"});
        }
      }
    }
  }
</script>


<style scoped>

</style>
