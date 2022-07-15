<template>
  <h1 class="product-heading">Danh sách sản phẩm</h1>
  <div class="row">
    <ProductItem />
    <ProductItem />
    <ProductItem />
    <ProductItem />
    <ProductItem />
    <ProductItem />
    <ProductItem />
    <ProductItem />
    <ProductItem />
    <ProductItem />
    <ProductItem />
    <ProductItem />
    <ProductItem />
    <ProductItem />
    <ProductItem />
    <ProductItem />
    <ProductItem />
  </div>
</template>

<script>
import ProductItem from "./ProductItem.vue";
export default {
  name: "ProductList",
  components: {
    ProductItem,
  },
};
</script>


<style>

.product-heading {
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 8px;
  font-size: 20px;
  font-weight: 600;
  text-align: center;
  /* border-bottom: 1px solid #ccc; */
  background-color: #fff;
  margin-bottom: 20px;
}
</style>