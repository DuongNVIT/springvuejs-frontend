<template>
  <div class="wrapper">
    <AdminHeader heading="Quản lý sản phẩm"/>
    <div class="content">
        <div class="heading">
            <h1 class="name">Danh sách sản phẩm</h1>
            <button class="heading-btn" @click="showAddProduct = !showAddProduct"><i class="fa-solid fa-square-plus"></i>Thêm</button>
            <!-- <button class="heading-btn" @click="showAddProduct = !showAddProduct"><i class="fa-solid fa-square-plus"></i>Thêm</button> -->
        </div>
        <div class="infor">

        </div>
    </div>
    <AddProduct v-if="showAddProduct" @closePopup="closePopup"/>
    <!-- <AddProduct v-if="showAddProduct" v-bind:close="showAddProduct"/> -->
  </div>
</template>
    
<script>
import AdminHeader from './AdminHeader.vue'
import AddProduct from './AddProduct.vue'
export default {
    name: 'AdminProduct',
    data() {
        return {
            showAddProduct: false
        }
    },
    methods: {
        closePopup(e) {
            this.showAddProduct = !this.showAddProduct;
        }
    },
    components: {
    AdminHeader,
    AddProduct,
    AdminHeader
}
}
</script>

<style scoped>

.wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
}
.content {
    margin-top: 60px;
    width: 80%;
    height: 200px;
    display: flex;
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
    color: white
}

.heading-btn:hover {
    cursor: pointer;
    opacity: 0.8;
}

.heading-btn i {
    width: 25px;
}
</style>