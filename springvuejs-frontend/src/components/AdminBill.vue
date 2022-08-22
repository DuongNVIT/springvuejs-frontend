<template>
    <div class="wrapper">
        <AdminHeader heading="Quản lý đơn hàng" />
        <div class="content">
            <div class="heading">
                <h1 class="name">Danh sách đơn hàng</h1>
                <button
                    class="heading-btn"
                    @click="showAddProduct = !showAddProduct"
                >
                    <i class="fa-solid fa-square-plus"></i>Thêm
                </button>
            </div>
            <el-table
                :data="products"
                style="width: 80%; z-index: -1"
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
                        <el-button type="danger" @click="() => handleDeleteProduct(scope.row.id)">Danger</el-button>
                        <el-button type="primary" @click="handleEditProduct">Edit</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <div class="infor"></div>
        </div>
    </div>
</template>

<script>
import AdminHeader from "./AdminHeader.vue";
import productService from "@/service/productService";
export default {
    name: "AdminBill",
    data() {
        return {
            products: [],
        };
    },
    components: {
        AdminHeader
    },
    created() {
        this.getAllProducts(0, 10);
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
                const response = await productService.deleteProduct(productId);
            } catch(error) {
                alert(error.message);
            }
        }
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
    width: 80%;
    display: flex;
    /* background-color: ; */
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.heading {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
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
    display: flex
}
</style>