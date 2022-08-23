<template>
    <div>
        <Header @search="handleSearch" />
        <div class="wrapper">
            <div class="grid wide">
                <div class="inner">
                    <div class="row">
                        <div class="col l-2">
                            <Category />
                        </div>
                        <div class="col l-10">
                            <ProductList
                                :productss="products"
                                @getNewPage="handleGetNewPage"
                            />
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
            products: [],
        };
    },
    components: {
        Header,
        Footer,
        Category,
        ProductList,
    },
    computed: {
        category() {
            return this.$route.params.category;
        },
    },
    watch: {
        category: {
            handler(newCategoryCode) {
                if (this.category) {
                    this.getProductByCategory(this.category);
                } else {
                    this.getAllProducts();
                }
            },
            immediate: true,
        },
    },
    methods: {
        async handleSearch(productName, newPage = 0) {
            try {
                console.log(productName);
                const response = await productService.getByName(
                    productName,
                    newPage
                );
                this.$data.products = response;
                console.log(response);
            } catch (e) {
                console.log(e.message);
                alert(e.message);
            }
        },

        handleGetNewPage(newPage) {
            this.category
                ? this.getProductByCategory(this.category, newPage)
                : this.getAllProducts(newPage);
        },

        async getAllProducts(newPage = 0) {
            try {
                const response = await productService.getAll(newPage, 3);
                this.$data.products = response;
            } catch (e) {
                alert(e.message);
            }
        },

        async getProductByCategory(categoryCode, newPage = 0) {
            try {
                const response = await productService.getProductsByCategory(
                    categoryCode,
                    newPage,
                    3
                );
                this.$data.products = response;
            } catch (error) {
                alert(error.message);
            }
        },
    },
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