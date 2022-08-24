<template>
    <Header />
    <div class="content">
        <router-view />
    </div>
    <Footer />
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
export default {
    name: "CustomerPage",
    components: {
        Header,
        Footer,
    },
};
</script>

<style scoped>
.content {
    margin-top: 60px;
}
</style>