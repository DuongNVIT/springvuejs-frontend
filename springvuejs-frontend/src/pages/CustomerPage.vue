<template>
  <div>
    <Header />
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
export default {
  name: "CustomerPage",
  components: {
    Header,
  },
};
</script>

<style scoped>
.content {
  margin-top: 60px;
}
</style>