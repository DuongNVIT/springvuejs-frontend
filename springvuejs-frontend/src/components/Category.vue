<template>
  <div class="cate-wrapper">
    <h1 class="heading"><i class="fa-solid fa-bars"></i>Danh mục</h1>
    <ul class="list">
      <li
        class="item"
        :class="{active: isActive[index]}"
        v-for="(category, index) in categories"
        :key="index"
        @click="() => handleGetProductList(index)"
      >
        <router-link :to="`/products/${category.code}`">{{ category.name }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import categoryService from "../service/categoryService.js";
export default {
  name: "Category",
  data() {
    return {
      categories: [],
      isActive: []
    };
  },
  mounted() {
    this.getCategories();
  },
  methods: {
    handleGetProductList(index) {
      for(var i = 0; i<this.$data.categories.length; ++i) {
        this.isActive[i] = false;
      }
      this.isActive[index] = true;
    },
    async getCategories() {
      try {
        const response = await categoryService.getAll();
        console.response;
        this.$data.categories = response;
      } catch (error) {
        alert(error.message);
      }
    },
  },
};
</script>

<style scoped>
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
  font-size: 20px;
  font-weight: 600;
  text-align: left;
  border-bottom: 1px solid #ccc;
  color: #333;
}

.heading i {
  font-size: 15px;
  margin-right: 4px;
  color: #333;
}

.list {
  width: 100%;
  list-style: none;
  padding: 0;
  margin: 0;
}

.item {
  display: block;
  padding: 8px 24px;
  font-weight: 400;
  font-size: 15px;
  text-align: left;
  border-top: 1px solid rgba(0, 0, 0, 0.08);
  text-decoration: none;
}

.item a {
  text-decoration: none;
}

.item:hover, .active {
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.05);
}
</style>