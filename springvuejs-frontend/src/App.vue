<template>
    <router-view></router-view>
</template>

<script>
import { ElNotification } from "element-plus";

export default {
    name: "App",
    watch: {
        '$store.state.globalEvent.status': function() {
            if(this.$store.state.globalEvent.status) ElNotification({
                title: "Thông báo",
                message: this.$store.state.globalEvent.message,
            });
            this.$store.dispatch("setGlobalEvent", {status: false, message: ""})
        },
    },
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
