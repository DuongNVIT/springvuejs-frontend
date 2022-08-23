<template>
    <div class="wrapper">
        <div class="grid wide">
            <div class="inner">
                <div class="heading">Danh sách sản phẩm</div>
                <el-table
                    :data="cart"
                    style="width: 100%"
                    stripe
                    height="fit content"
                    :default-sort="{ prop: 'status', order: 'descending' }"
                >
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
                    <el-table-column prop="newPrice" label="Số lượng">
                        <div class="quantity">
                            <div class="decrease">-</div>
                            1
                            <div class="increase">+</div>
                        </div>
                    </el-table-column>
                    <el-table-column prop="newPrice" label="Tổng cộng" />
                    <el-table-column prop="id" label="Hành động">
                        <template class="userProductId" #default="scope">
                            <el-button
                                type="danger"
                                @click="
                                    () =>
                                        handleRemoveItem(
                                            scope.row.userProductId
                                        )
                                "
                                >Xóa</el-button
                            >
                        </template>
                    </el-table-column>
                </el-table>
                <div class="order-wrapper">
                    <el-button type="danger" @click="handleOrder">Đặt hàng</el-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import cartService from "@/service/cartService";
import router from "../router/index.js";
export default {
    name: "Cart",
    data() {
        return {
            cart: [],
        };
    },
    mounted() {
        this.getCart();
    },
    methods: {
        async getCart() {
            try {
                const response = await cartService.getCart();
                console.log(response);
                this.$data.cart = [...response];
            } catch (e) {
                alert(e.message);
            }
        },

        async handleRemoveItem(userProductId) {
            try {
                console.log(userProductId);
                const response = await cartService.removeItem(userProductId);
                this.$data.cart = this.$data.cart.filter(
                    (item) => item.userProductId != userProductId
                );
            } catch (error) {
                alert(error.message);
            }
        },

        async handleOrder() {
            try {
                const ids = this.$data.cart.map(item => item.userProductId);
                console.log(ids)
                const response = cartService.order(ids);
                this.$store.dispatch("setGlobalEvent", {status: true, message: "Đặt hàng thành công"})
                router.push("/user/bills")
            } catch(error) {
                alert(error.message);
            }
        }
    },
};
</script>

<style scoped>
.wrapper {
    margin-top: 100px;
}
.inner {
    background-color: #fff;
    border-radius: 3px;
    padding: 16px;
}

.heading {
    color: #333;
    font-size: 18px;
    font-weight: 600;
    text-align: left;
    margin: 0px 0 30px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    padding-bottom: 8px;
}
.quantity {
    display: flex;
    align-items: center;
    /* justify-content: center; */
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

.order-wrapper {
    width: 100%;
    margin-top: 20px;
    margin-right: 200px;
}
</style>