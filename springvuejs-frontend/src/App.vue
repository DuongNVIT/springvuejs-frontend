<template>
  <router-view></router-view>
  <!-- <Popup/> -->
</template>

<script>
import Popup from './components/Popup.vue'
export default {
  name: "App",
  components: {
    Popup,
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.category {
  margin-top: 40px;
}

body {
  font-family: "Saira Condensed", sans-serif;
  background-color: rgb(240, 235, 235);
}

* {
  box-sizing: border-box;
}

</style>
