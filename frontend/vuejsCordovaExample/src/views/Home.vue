<template>
  <v-container text-xs-center>
    <div class="home">
      <img class="logo" src="vuejs.png" />
      <img class="logo" src="cordova_256.png" />
      <span>this is some random txt</span>
      <h1>this needs to show up!</h1>
      <h4>{{$t("title")}}</h4>
      <v-btn @click="openMenu">{{$t("showSample")}}</v-btn>
    </div>
  </v-container>
</template>

<script>
export default {
  name: 'home',
  methods: {
    openMenu: () => {
      // When user tap the button dispatch an event into the dom.
      // Its will trigger the drawer Open event in (componnents/Drawer.vue)
      document.dispatchEvent(new CustomEvent("toggleDrawer", {}));
    }
  }
}
</script>

<style scoped>
  img.logo{
    display: inline-block;
    width: 90px;
    padding: 10px;
  }
</style>
