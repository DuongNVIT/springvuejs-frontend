<template>
    <div class="row">
        <ProductItem/>
        <ProductItem/>
        <ProductItem/>
        <ProductItem/>
        <ProductItem/>
        <ProductItem/>
        <ProductItem/>
        <ProductItem/>
    </div>
</template>

<script>
import ProductItem from './ProductItem.vue'
export default {
    name: "ProductList",
    components: {
        ProductItem
    }
}
</script>


<style>

</style>