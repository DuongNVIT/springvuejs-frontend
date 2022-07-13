<template>
  <Header />
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
</template>

<script>
import Header from "./components/Header.vue";
import Category from "./components/Category.vue";
import ProductList from "./components/ProductList.vue";
import Login from "./components/Login.vue";

export default {
  name: "App",
  components: {
    Header,
    Category,
    ProductList,
    Login
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
  background-color: #ddd;
}

.product-heading {
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 8px;
  font-size: 20px;
  font-weight: 600;
  text-align: center;
  border-bottom: 1px solid #ccc;
  background-color: #fff;
  margin-bottom: 20px;
}

* {
  box-sizing: border-box;
}
</style>
