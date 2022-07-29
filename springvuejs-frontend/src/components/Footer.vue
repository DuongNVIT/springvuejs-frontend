<template>
    <footer class="footer-wrapper">
        <div class="grid wide">
            <div class="footer-inner">
                <h1 class="headi">Đây là footer</h1>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: "Footer"
}
</script>

<style scoped>
.footer-wrapper {
    height: 60px;
    background-color: red;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
}

.footer-inner {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
}
</style>