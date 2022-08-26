<template>
    <div class="wrapper">
        <AdminHeader heading="Quản lý đơn hàng" />
        <div class="content">
            <div class="heading">
                <h1 class="name">Danh sách sản phẩm</h1>
                <button
                    class="heading-btn"
                    @click="
                        (showAddProduct = !showAddProduct), (isAdding = true)
                    "
                >
                    <i class="fa-solid fa-square-plus"></i>Thêm
                </button>
            </div>
            <el-table
                :data="products"
                style="width: 100%; z-index: 0"
                stripe
                height="fit content"
            >
                <el-table-column prop="thumbnail" label="Hình ảnh" width="180">
                    <template #default="scope">
                        <img
                            :src="scope.row.thumbnail"
                            class="product-thumbnail"
                        />
                    </template>
                </el-table-column>
                <el-table-column prop="name" label="Tên sản phẩm" />
                <el-table-column prop="oldPrice" label="Giá cũ" />
                <el-table-column prop="newPrice" label="Giá mới" />
                <el-table-column prop="id" label="Hành động">
                    <template class="Hihi" #default="scope">
                        <el-button
                            type="danger"
                            @click="handleDeleteProduct(scope.row.id)"
                            >Xóa</el-button
                        >
                        <el-button
                            type="primary"
                            @click="(showAddProduct = true), (isAdding = false), (updatedProduct = scope.row), isUpdatingProduct = {...scope.row}"
                            >Sửa</el-button
                        >
                    </template>
                </el-table-column>
            </el-table>
        </div>
        <AddProduct
            v-if="showAddProduct"
            :isAdding="isAdding"
            :updatedProduct="updatedProduct"
            :isUpdatingProduct="isUpdatingProduct"
            @closePopup="closePopup"
        />
    </div>
</template>

<script>
import AddProduct from "./AddProduct.vue";
import AdminHeader from "./AdminHeader.vue";
import productService from "@/service/productService";
export default {
    name: "AdminBill",
    data() {
        return {
            products: [],
            updatedProduct: {},
            isUpdatingProduct: {},
            isAdding: false,
            showAddProduct: false,
        };
    },
    components: {
        AdminHeader,
        AddProduct,
    },
    created() {
        this.getAllProducts();
    },
    methods: {
        async getAllProducts() {
            try {
                const response = await productService.getAll(0, 10);
                this.$data.products = response;
                console.log(this.$data.products);
            } catch (error) {
                alert(error.message);
            }
        },

        async handleDeleteProduct(productId) {
            try {
                console.log(productId);
                const response = await productService.delete(productId);
                this.$data.products = this.$data.products.filter((product) => {
                    return product.id !== productId;
                });
                console.log(response);
            } catch (error) {
                alert(error.message);
            }
        },

        closePopup(product) {
            if(product && this.$data.isAdding) {
                this.$data.products.push(product)
            } else if(product && !this.$data.isAdding) {
                
                this.$data.products.forEach((item) => {
                    if(item.id == product.id) {
                        item = product
                    }
                })
            }
            this.showAddProduct = !this.showAddProduct;
        },
    },
};
</script>

<style scoped>
.wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
}
.content {
    margin-top: 160px;
    width: 60%;
    display: flex;
    background-color: #fff;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    margin-bottom: 100px;
}

.heading {
    width: 100%;
    display: flex;
    margin-bottom: 20px;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    padding-bottom: 8px;
}

.name {
    font-size: 20px;
    color: #333;
}

.heading-btn {
    border: none;
    padding: 8px 20px;
    border-radius: 3px;
    background-color: red;
    color: white;
}

.heading-btn:hover {
    cursor: pointer;
    opacity: 0.8;
}

.heading-btn i {
    width: 25px;
}

.product-thumbnail {
    height: 50px;
    width: 70px;
}

.Hihi {
    display: flex;
}
</style>