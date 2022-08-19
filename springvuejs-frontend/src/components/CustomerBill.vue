<template>
    <div class="grid wide">
        <div class="row">
            <div class="l-o-1 l-10">
                <div class="inner">
                    <div class="heading">Danh sách sản phẩm</div>
                    <table class="table">
                        <tr class="head">
                            <th></th>
                            <th>Sản phẩm</th>
                            <th>Giá</th>
                            <th>Số lượng</th>
                            <th>Tổng cộng</th>
                            <th>Thao tác</th>
                            <th>Trạng thái</th>
                        </tr>
                        <tr
                            class="body"
                            v-for="(item, index) in cart"
                            :key="index"
                        >
                            <th>
                                <img :src="item.thumbnail" alt="" />
                            </th>
                            <th>{{ item.name }}</th>
                            <th>{{ item.newPrice }}</th>
                            <th>
                                <div class="quantity">
                                    <div class="decrease">-</div>
                                    1
                                    <div class="increase">+</div>
                                </div>
                            </th>
                            <th>30000000đ</th>
                            <th>
                                <i
                                    class="fa-solid fa-trash-can"
                                    @click="
                                        () =>
                                            handleRemoveItem(item.userProductId)
                                    "
                                ></i>
                            </th>
                            <th>Chờ lấy hàng</th>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Cart from "./Cart.vue";

export default {
    name: "CustomerBill",
    data() {
        return {
            bill: []
        }
    },
    mounted() {

    },
    methods: {
        async getBill() {
            try {

            } catch(error) {

            }
        }
    }
};
</script>

<style scoped>

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