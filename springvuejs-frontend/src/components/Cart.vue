<template>
  <div class="wrapper">
    <div class="grid wide">
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
          <tr class="body">
            <th>
              <img
                src="data:image/png;base64,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"
                alt=""
              />
            </th>
            <th>Iphone 13 promax</th>
            <th>30000000đ</th>
            <th>
              <div class="quantity">
                <div class="decrease">-</div>
                1
                <div class="increase">+</div>
              </div>
            </th>
            <th>30000000đ</th>
            <th><i class="fa-solid fa-trash-can"></i></th>
            <th>Chờ lấy hàng</th>
          </tr>
          <tr class="body">
            <th>
              <img
                src="data:image/png;base64,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"
                alt=""
              />
            </th>
            <th>Iphone 13 promax</th>
            <th>30000000đ</th>
            <th>
              <div class="quantity">
                <div class="decrease">-</div>
                1
                <div class="increase">+</div>
              </div>
            </th>
            <th>30000000đ</th>
            <th><i class="fa-solid fa-trash-can"></i></th>
            <th>Chờ lấy hàng</th>
          </tr>
          <tr class="body">
            <th>
              <img
                src="data:image/png;base64,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"
                alt=""
              />
            </th>
            <th>Iphone 13 promax</th>
            <th>30000000đ</th>
            <th>
              <div class="quantity">
                <div class="decrease">-</div>
                1
                <div class="increase">+</div>
              </div>
            </th>
            <th>30000000đ</th>
            <th><i class="fa-solid fa-trash-can"></i></th>
            <th>Chờ lấy hàng</th>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import cartService from "@/service/cartService";
export default {
  name: "Cart",
  data() {
    return {
        cart: []
    }
  },
  mounted() {
    this.getCart();
  },
  methods: {
    async getCart() {
      try {
        const userid = this.$store.state.userid;
        const response = await cartService.getCart(userid);
        console.log(response)
      } catch (e) {
        alert(e.message);
      }
    },
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
}

.table {
  width: 100%;
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
  height: 60px;
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