<template>
  <header class="header">
    <div class="grid wide">
      <div class="wrapper">
        <div class="logo-navbar">
          <div class="logo">
            <i class="fa-solid fa-shop"></i>
            <h1 class="logo-name">ITShop</h1>
          </div>
        </div>
        <div class="search">
          <input
            type="text"
            class="form-search"
            placeholder="Nhập tên sản phẩm cần tìm kiếm"
          />
          <i class="fa-solid fa-magnifying-glass"></i>
        </div>
        <!-- <div class="user">
          <div class="user-noti">
            <i class="fa-solid fa-bell">
              <div class="noti-quantity">0</div>
            </i>
            Notification
          </div>
          <div class="user-cart">
            <i class="fa-solid fa-cart-shopping">
              <div class="cart-quantity">0</div>
            </i>
            My cart
          </div>
          <div class="user-name">
            <i class="fa-solid fa-circle-user"></i>
            duongnv
          </div>
        </div> -->
        <div class="account">
          <router-link to="/signup" class="logout">Sign Up</router-link>
          <router-link to="/login" class="login">Sign In</router-link>
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

<style scoped>
.header {
  height: 60px;
  width: 100%;
  background-color: red;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
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

.logo {
  display: flex;
  align-items: center;
  justify-content: center;
}

.logo i {
  color: white;
  font-size: 25px;
  margin-right: 8px;
}

.logo-name {
  font-size: 20px;
  margin: 0;
  padding: 0;
  color: #fff;
  font-weight: 400;
}

.search {
  background-color: #fff;
  padding: 4px;
  border-radius: 3px;
  display: flex;
  align-items: center;
}

.form-search {
  border: none;
  outline: none;
  width: 400px;
  font-size: 13px;
}

.search i {
  background-color: red;
  color: white;
  font-size: 10px;
  /* padding: 10px; */
  border-radius: 3px;
  padding: 6px 10px;
}

.search i:hover {
  opacity: 0.7;
  cursor: pointer;
}
.user {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  color: #fff;
  font-weight: 400;
}

.user-cart, .user-noti {
  margin-right: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.user-cart i, .user-noti i {
  position: relative;
  margin-right: 15px;
}

.user-cart i .cart-quantity, .user-noti i .noti-quantity {
  position: absolute;
  bottom: 50%;
  right: -40%;
  font-size: 10px;
  height: 15px;
  width: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  color: red;
  border-radius: 50%;
  border: 1px solid rgba(0, 0, 0, 0.05);
}

.account {
  display: flex;
  align-items: center;
  color: white;
}

.login, .logout {
  padding: 6px 16px;
  border: 1px solid white;
  border-radius: 3px;
}

.login {
  margin-left: 10px;
  background-color: #fff;
  color: red;
}

.logout:hover, .login:hover {
  background-color: #fff;
  color: red;
  cursor: pointer;
  opacity: 0.9;
}

</style>