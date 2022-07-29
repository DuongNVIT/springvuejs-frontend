<template>
  <h1 class="product-heading">Danh sách sản phẩm</h1>
  <div class="row">
    <ProductItem v-for="(product, index) in productss" :key="index" :product="product"/>
    <!-- <pagination v-model="page" :records="500" @paginate="myCallback" /> -->
    
  </div>
  <b-pagination
      
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="my-table"
    ></b-pagination>
</template>

<script>
import ProductItem from "./ProductItem.vue";
import productService from "../service/productService.js";
export default {
  name: "ProductList",
  props: ['productss'],
  data() {
    return {
      page: 0,
      size: 3,
      products: [],
      perPage: 3,
        currentPage: 1,
        items: [
          { id: 1, first_name: 'Fred', last_name: 'Flintstone' },
          { id: 2, first_name: 'Wilma', last_name: 'Flintstone' },
          { id: 3, first_name: 'Barney', last_name: 'Rubble' },
          { id: 4, first_name: 'Betty', last_name: 'Rubble' },
          { id: 5, first_name: 'Pebbles', last_name: 'Flintstone' },
          { id: 6, first_name: 'Bamm Bamm', last_name: 'Rubble' },
          { id: 7, first_name: 'The Great', last_name: 'Gazzoo' },
          { id: 8, first_name: 'Rockhead', last_name: 'Slate' },
          { id: 9, first_name: 'Pearl', last_name: 'Slaghoople' }
        ]
    };
  },
  methods: {
    async getUsers() {
      const response = await productService.getAll(
        this.$data.page,
        this.$data.size
      );
      console.log("Xuống đây");
      console.log(response);
      this.$data.products = [...response];
    },
  },

  mounted() {
    // this.getUsers();
  },
  components: {
    ProductItem,
  },
};
</script>


<style scoped>
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