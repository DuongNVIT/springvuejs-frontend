<template>
  <div>
    <Header @search="handleSearch"/>
    <div class="wrapper">
      <div class="grid wide">
        <div class="inner">
          <div class="row">
            <div class="col l-2">
              <Category @getProductList="getProductByCategory" />
            </div>
            <div class="col l-10">
              <ProductList :productss="products"/>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from "../components/Footer.vue";
import Category from "../components/Category.vue";
import ProductList from "../components/ProductList.vue";
import Header from "../components/Header.vue";
import productService from "../service/productService";
export default {
  name: "HomePage",
  data() {
    return {
      products: []
    }
  },
  components: {
    Header,
    Footer,
    Category,
    ProductList,
  },
  mounted() {
    this.getAllProducts();
  },
  methods: {
    handleSearch(response) {
      this.$data.products = [...response];
    },

    async getAllProducts() {
      try {
        const response = await productService.getAll(0, 10);
        console.log(response);
        this.$data.products = [...response];
      } catch (e) {
        alert(e.message);
      }
    },
    async getProductByCategory(categoryCode) {
      try {
        console.log("Vào getbycode")
        const response = await productService.getProductsByCategory(categoryCode);
        this.$data.products = [...response];
        console.log(response);
      } catch(error) {
        console.log(error.message);
        alert(error.message);
      }
    }
  }
};
</script>

<style scoped>
.wrapper {
  margin-top: 60px;
}

.inner {
  padding-top: 40px;
}
</style>