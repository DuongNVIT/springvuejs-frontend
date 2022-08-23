<template>
    <div class="grid wide">
        <div class="row">
            <div class="l-o-1 l-10">
                <div class="inner">
                    <div class="heading">Danh sách đơn hàng</div>
                    <el-table
                        :data="bills"
                        style="width: 100%"
                        stripe
                        height="fit content"
                        :default-sort="{ prop: 'statusId', order: 'descending' }"
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
                        <el-table-column prop="newPrice" label="Số lượng" />
                        <el-table-column prop="newPrice" label="Tổng cộng" />
                        <el-table-column
                            prop="status"
                            label="Trạng thái"
                            min-width="100"
                        ></el-table-column>
                    </el-table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import billService from "../service/billService.js";

export default {
    name: "CustomerBill",
    data() {
        return {
            bills: [],
        };
    },
    created() {
        this.getBills();
    },
    methods: {
        async getBills() {
            try {
                const response = await billService.getAllBills();
                this.$data.bills = response;
            } catch (error) {
                alert(error.message);
            }
        },
    },
};
</script>

<style scoped>
.inner {
    background-color: #fff;
    border-radius: 3px;
    padding: 16px;
    margin-top: 100px;
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

.product-thumbnail {
    height: 50px;
    width: 70px;
}
</style>