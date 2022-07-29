<template>
  <div class="wrapper">
    <div class="grid wide">
      <div class="row">
        <div class="l-o-1 l-10">
          <Cart/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Cart from './Cart.vue'
export default {
    name: 'CustomerCart',
    components: {
        Cart
    }
}
</script>

<style scoped>

</style>