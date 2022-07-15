<template>
  <!-- <Header />
  <div class="category">
    <div class="grid wide">
      <div class="row">
        <div class="col l-2">
          <Category />
        </div>
        <div class="col l-10">
          <h1 class="product-heading">Danh sách sản phẩm</h1>
          <ProductList />
        </div>
      </div>
    </div>
  </div>
  <Login/>
  <Signup/>
  <Cart/>
  <Buy/>
  <Footer/> -->
  <!-- <HomePage/> -->
  <router-view></router-view>
</template>

<script>
// import Header from "./components/Header.vue";
// import Category from "./components/Category.vue";
// import ProductList from "./components/ProductList.vue";
// import Login from "./components/Login.vue";
// import Signup from "./components/Signup.vue";
// import Cart from "./components/Cart.vue";
// import Buy from "./components/Buy.vue";
// import Footer from "./components/Footer.vue";
import HomePage from "./pages/HomePage.vue";
export default {
  name: "App",
  components: {
    // Header,
    // Category,
    // ProductList,
    // Login,
    // Signup,
    // Cart,
    // Buy,
    // Footer
    HomePage
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
