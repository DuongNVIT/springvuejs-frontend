<template>
    <div class="col l-2-4">
        <div class="item-wrapper">
            <div class="item-img">
                <img :src="product.thumbnail" alt="" />
            </div>
            <div class="item-infor">
                <div class="item-name">{{ product.name }}</div>
                <div class="item-price">
                    <div class="old-price">{{ product.oldPrice }}đ</div>
                    <div class="new-price">{{ product.newPrice }}đ</div>
                </div>
                <div class="rate-add">
                    <div class="rate">
                        <!-- <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i> -->
                    </div>
                    <div class="add" @click="handleAddToCart">Add to cart</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import cartService from "../service/cartService.js";
import router from "../router/index.js";
export default {
    name: "ProductItem",
    props: ["product"],
    methods: {
        async handleAddToCart() {
            try {
                const response = await cartService.add(this.$props.product.id);
                this.$store.dispatch("setGlobalEvent", {
                    status: true, 
                    type: "success",
                    tittle: "Thành công",
                    message: "Sản phẩm được thêm vào giỏ hàng"
                })
                router.push("/user/cart")
            } catch (error) {
                alert(error.message);
            }
        },
    },
};
</script>

<style scoped>
.item-wrapper {
    width: 100%;
    background-color: #fff;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    transition: all 0.2s ease-in-out;
    border-radius: 3px;
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.1);
}

.item-wrapper:hover {
    cursor: pointer;
    transform: translateY(-1px);
}

.item-img img {
    width: 100%;
    height: 150px;
}

.item-infor {
    padding: 8px;
    display: flex;
    flex-direction: column;
}

.item-name {
    font-size: 13px;
    text-align: left;
}

.item-price {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 8px 0;
}

.old-price {
    font-size: 12px;
    text-decoration: line-through;
    color: #333;
}

.new-price {
    font-size: 15px;
    color: orange;
}

.rate-add {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.rate {
    color: rgb(192, 192, 28);
    font-size: 12px;
}

.add {
    background-color: red;
    color: white;
    padding: 4px 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    border-radius: 3px;
}
</style>