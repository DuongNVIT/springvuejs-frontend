<template>
    <h1 class="product-heading">Danh sách sản phẩm</h1>
    <div class="row">
        <ProductItem
            v-for="(product, index) in productss"
            :key="index"
            :product="product"
        />
        <!-- <pagination v-model="page" :records="500" @paginate="myCallback" /> -->
        <div class="pagination">
            <el-pagination
                background="true"
                layout="prev, pager, next"
                :current-page="currentPage"
                :page-size="itemPerPage"
                :total="
                    productss[0] && productss[0].totalItem
                        ? productss[0].totalItem
                        : 0
                "
                pager-count="5"
                @currentChange="handleCurrentChange"
            >
            </el-pagination>
        </div>
    </div>
</template>

<script>
import ProductItem from "./ProductItem.vue";
import productService from "../service/productService.js";
export default {
    name: "ProductList",
    props: ["productss"],
    data() {
        return {
            currentPage: 1,
            itemPerPage: 3
        };
    },
    watch: {
      currentPage(newPage) {
        this.$emit("getNewPage", newPage - 1);
      }
    },
    methods: {
        handleCurrentChange(val) {
            this.currentPage = val;
        },
    },

    mounted() {
        // this.getUsers();
        console.log("Đã mounte");
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

.pagination {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>