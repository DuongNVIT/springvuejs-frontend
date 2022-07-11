<template>
  <header class="header">
    <div class="grid wide">
      <div class="wrapper">
        <div class="logo-navbar">
          <div class="logo">
            <h1 class="logo-name">ITShop</h1>
          </div>
          <nav class="navbar"></nav>
        </div>
        <div class="user">
          <span class="welcome">Welcome </span>
          <div class="user-name">Nguyen Van A</div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style>
.header {
  height: 60px;
  width: 100%;
  background-color: red;
}

.wrapper {
  widows: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
}

.logo-navbar {
	display: flex;
	align-items: center;
	justify-content: center;
}

.logo-name {
	font-size: 20px;
	margin: 0;
	padding: 0;
	color: #fff;
	font-weight: 400;
}

.user {
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 20px;
	color: #fff;
	font-weight: 400;
}

.welcome {
	margin-right: 10px;
}

</style>