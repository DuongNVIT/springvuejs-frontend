<template>
  <div>
    <Header />
    <div class="loginpage-content">
      <Login />
    </div>
    <div class="loginpage-wrapper">
      <Footer />
    </div>
  </div>
</template>

<script>
import Login from "../components/Login.vue";
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "LoginPage",
  components: {
    Login,
    Header,
    Footer,
  },
};
</script>

<style>
.loginpage-content {
  margin-top: 60px;
  height: 100%;
}

.loginpage-wrapper {
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
}

</style>