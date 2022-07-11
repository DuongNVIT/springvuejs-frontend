<template>
    <div class="cate-wrapper">
        <h1 class="heading"><i class="fa-solid fa-bars"></i>Danh mục sản phẩm</h1>
        <ul class="list">
            <li class="item">Giày dép</li>
            <li class="item">Quần áo</li>
            <li class="item">Ti vi</li>
            <li class="item">Tủ lạnh</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "Category"
}
</script>

<style>
.cate-wrapper {
    width: 100%;
    background-color: #fff;
    display: block;
}

.heading {
    margin: 0;
    display: flex;
    align-items: center;
    padding: 10px 8px;
    font-size: 25px;
    font-weight: 600;
    text-align: left;
    border-bottom: 1px solid #ccc;
}

.heading i {
    font-size: 20px;
    margin-right: 4px;
}

.list {
    width: 100%;
    list-style: none;
    padding: 0;
    margin: 0;
}

.item {
    display: block;
    padding: 10px 20px;
    font-weight: 400;
    font-size: 18px;
    text-align: left;
}

.item:hover {
    cursor: pointer;
    background-color: rgba(0,0,0,0.05);
}

</style>