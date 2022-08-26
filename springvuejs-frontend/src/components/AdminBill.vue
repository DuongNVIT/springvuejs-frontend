<template>
    <div class="wrapper">
        <AdminHeader heading="Quản lý sản phẩm" />
        <div class="content">
            <div class="heading">
                <h1 class="name">Danh sách đơn hàng</h1>
            </div>
            <el-table
                :status="status"
                :data="products"
                style="width: 100%;"
                stripe
                height="fit content"
            >
                <el-table-column prop="username" label="Khách hàng" />
                <el-table-column
                    prop="thumbnail"
                    label="Hình ảnh"
                    width="180"
                >
                    <template #default="scope">
                        <img
                            :src="scope.row.thumbnail"
                            class="product-thumbnail"
                        />
                    </template>
                </el-table-column>
                <el-table-column prop="name" label="Tên sản phẩm" />
                <el-table-column prop="newPrice" label="Giá" />
                <el-table-column prop="newPrice" label="Số lượng" />
                <el-table-column prop="statusId" label="Trạng thái" min-width="100">
                    <template #default="scope">
                        <el-select
                            v-model="scope.row.statusId"
                            placeholder="Select"
                            :disabled="false"
                            @change="() => handleUpdateStatus(scope.row.userProductId, scope.row.statusId)"
                        >
                            <el-option
                                v-for="item in status"
                                :key="item.id"
                                :label="item.name"
                                :value="item.id"
                            />
                        </el-select>
                    </template>
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>
    
<script>
import AdminHeader from "./AdminHeader.vue";
import AddProduct from "./AddProduct.vue";
import adminService from "../service/adminService.js";
export default {
    name: "AdminProduct",
    data() {
        return {
            products: [],
            status: []
        };
    },
    created() {
        this.getAllStatus();
        this.getAllProducts();
    },
    mounted() {
    },
    methods: {
        async handleUpdateStatus(userProductId, statusId) {
            try {
                console.log(userProductId, statusId);
                const response = await adminService.updateStatus(userProductId, statusId);
                console.log(response);
                this.$store.dispatch("setGlobalEvent", {
                    status: true, 
                    type: "success",
                    tittle: "Thành công",
                    message: "Cập nhật trạng thái thành công"
                })
            } catch (error) {
                console.log(error);
            }
        },
        async getAllStatus() {
            try {
                const response = await adminService.getAllStatus();
                this.$data.status  = response.filter(status => status.id !== 1);
                console.log(response);
            } catch (error) {
                alert(error.message);
            }
        },
        async getAllProducts() {
            try {
                const response = await adminService.getAllProducts();
                console.log(response);
                this.$data.products = [...response];
            } catch (error) {
                alert(error.message);
            }
        }
    },
    components: {
        AdminHeader,
        AddProduct,
        AdminHeader,
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
    padding: 20px
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

.table {
    width: 100%;
}

/* tr {
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
} */

.head {
    font-size: 16px;
    padding: 40px 0;
}
.body {
    font-size: 13px;
}

/* .body tr {
    padding: 100px 0;
} */

.body img {
    height: 40px;
    margin: 4px 0;
}
.quantity {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
}

.decrease,
.increase {
    width: 22px;
    height: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.05);
    border-radius: 3px;
    border: 1px solid rgba(0, 0, 0, 0.1);
}

.decrease:hover,
.increase:hover {
    opacity: 0.7;
    cursor: pointer;
}

.decrease {
    margin-right: 4px;
}

.increase {
    margin-left: 4px;
}

.product-thumbnail {
    height: 50px;
    width: 70px;
}
</style>