<template>
  <div class="wrapper">
    <div class="grid wide">
      <div class="inner">
        <i class="fa-solid fa-circle-check"></i>{{ heading }}
      </div>
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
  right: 0;
}

.inner {
  position: absolute;
  top: 0;
  right: 200px;
  background-color: rgba(18, 121, 18, 0.2);
  display: flex;
  color: rgb(18, 121, 18);
  min-width: 200px;
  justify-content: center;
  align-items: center;
  padding: 4px
}
</style>