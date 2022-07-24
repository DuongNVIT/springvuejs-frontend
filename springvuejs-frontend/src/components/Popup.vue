<template>
    <div class="popup-wrapper">
        <div class="popup-inner">
            <i class="fa-solid fa-circle-check"></i>{{heading}}
        </div>
    </div>
</template>

<script>
export default {
    name: 'Popup',
    data() {
        return {
            heading: ""
        }
    }
}
</script>

<style scoped>
.popup-wrapper {
    position: fixed;
    top: 0;
    right: 0;
}

.popup-inner {
    position: absolute;
    top: 0;
    right: 0;
    background-color: red;
}
</style>