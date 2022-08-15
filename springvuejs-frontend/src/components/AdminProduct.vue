<template>
    <div class="wrapper">
        <AdminHeader heading="Quản lý sản phẩm" />
        <div class="content">
            <div class="heading">
                <h1 class="name">Danh sách sản phẩm</h1>
                <button
                    class="heading-btn"
                    @click="showAddProduct = !showAddProduct"
                >
                    <i class="fa-solid fa-square-plus"></i>Thêm
                </button>
            </div>

            <div class="infor"></div>
            <table class="table">
                <tr class="head">
                    <th>Khách hàng</th>
                    <th>Sản phẩm</th>
                    <th>Tên sản phẩm</th>
                    <th>Giá</th>
                    <th>Tổng cộng</th>
                    <th>Trạng thái</th>
                </tr>
                <tr class="body" v-for="(item, index) in products" :key="index">
                    <td>{{item.username}}</td>
                    <td>
                        <img :src="item.thumbnail" alt="" />
                    </td>
                    <td>{{ item.name }}</td>
                    <td>{{ item.newPrice }}</td>
                    <td>30000000đ</td>
                    <td>
                        <select v-model="item.statusId" @change="() => handleUpdateStatus(item.userProductId, item.statusId)">
                            <option v-for="(item, index) in status" :key="index" :value="item.id">
                                {{item.name}}
                            </option>
                        </select>
                    </td>
                </tr>
            </table>
        </div>
        <AddProduct v-if="showAddProduct" @closePopup="closePopup" />
    </div>
</template>
    
<script>
import AdminHeader from "./AdminHeader.vue";
import AddProduct from "./AddProduct.vue";
import adminService from "../service/adminService.js"
export default {
    name: "AdminProduct",
    data() {
        return {
            products: [],
            status: [],
            showAddProduct: false,
        };
    },
    mounted() {
        this.getAllStatus();
        this.getAllProducts();
    },
    methods: {
        async handleUpdateStatus(userProductId, statusId) {
            try {
                console.log(userProductId, statusId)
                const response = await adminService.updateStatus(userProductId, statusId);
                console.log(response)
                alert("Cập nhật trạng thái thành công")
            } catch(error) {
                console.log(error);
            }
        },
        async getAllStatus() {
            try {
                const response = await adminService.getAllStatus();
                this.$data.status = [...response]
                console.log(response);
            } catch(error) {
                alert(error.message);
            }
        },
        async getAllProducts() {
            try {
                const response = await adminService.getAllProducts();
                console.log(response);
                this.$data.products = [...response];
            } catch(error) {
                alert(error.message);
            }
        },
        closePopup(e) {
            this.showAddProduct = !this.showAddProduct;
        },
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
    margin-top: 140px;
    width: 80%;
    height: 200px;
    display: flex;
    flex-direction: column;
    /* background-color: ; */
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

.table {
  width: 100%;
}

tr {
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}


.head {
  font-size: 16px;
  padding: 40px 0;
}
.body {
  font-size: 13px;
}

.body tr {
  padding: 100px 0;
}

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
</style>