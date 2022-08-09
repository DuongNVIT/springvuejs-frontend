<template>
    <div class="wrapper">
        <div class="inner">
            <div class="success">
                <i class="fa-solid fa-circle-check success"></i>Thành công
            </div>
            <!-- <div class="failed">
                <i class="fa-solid fa-circle-xmark"></i>Thất bại
            </div> -->
        </div>
    </div>
</template>

<script>
export default {
    name: "Popup",
    data() {
        return {
            heading: "Thành công",
        };
    },
};
</script>

<style scoped>
.wrapper {
    position: fixed;
    top: 60px;
    left: 50%;
    transform: translateX(-50%);
}

.inner {
    position: absolute;
    top: 0;
    background-color: rgba(18, 121, 18, 0.2);
    display: flex;
    color: rgb(18, 121, 18);
    min-width: 200px;
    justify-content: center;
    align-items: center;
    padding: 10px 40px;
}
</style>