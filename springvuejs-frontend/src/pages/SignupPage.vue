<template>
  <div>
    <Header />
    <div class="signuppage-content">
      <Signup />
    </div>
    <div class="signuppage-wrapper">
      <Footer />
    </div>
  </div>
</template>

<script>
import Signup from "../components/Signup.vue";
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "SignupPage",
  components: {
    Signup,
    Header,
    Footer,
  },
};
</script>

<style>
.signuppage-content {
  margin-top: 60px;
  height: 100%;
}

.signuppage-wrapper {
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
}

</style>