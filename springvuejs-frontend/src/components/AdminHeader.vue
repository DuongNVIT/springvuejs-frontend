<template>
  <div class="wrapper">
    <h1 class="headingg">{{heading}}</h1>
  </div>
</template>

<script>
export default {
    name: 'AdminHeader',
    props: ['heading']
}
</script>

<style scoped>
.wrapper {
    height: 60px;
    background-color: red;
    position: fixed;
    top: 0;
    right: 0;
    left: calc(15%);
    display: flex;
    align-items: center;
    justify-content: center;
}

.headingg {
    font-size: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    margin: 0;
}

</style>