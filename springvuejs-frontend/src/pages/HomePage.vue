<template>
  <div>
    <Header />
    <div class="homepage-wrapper">
      <div class="grid wide">
        <div class="homepage-inner">
          <div class="row">
            <div class="col l-2">
              <Category />
            </div>
            <div class="col l-10">
              <ProductList />
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Footer from "../components/Footer.vue";
import Category from "../components/Category.vue";
import ProductList from "../components/ProductList.vue";
import Header from "../components/Header.vue";
export default {
  name: "HomePage",
  components: {
    Header,
    Footer,
    Category,
    ProductList,
  },
};
</script>

<style>
.homepage-wrapper {
    margin-top: 60px;
}

.homepage-inner {
    padding-top: 40px;
}

</style>