<template>
  <div class="sidebar-wrapper">
    <div class="sidebar-inner">
        <div class="sidebar-heading">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTymz8hEzCiURnEoQYnLTiehMAGb4xIeKWRDQ&usqp=CAU" alt="" class="admin-avatar">
            <div class="sidebar-name">Admin</div>
        </div>
        <div class="sidebar-content">
          <ul class="manage-list">
            <router-link to="/admin" class="manage-item"><i class="fa-solid fa-house"></i>Trang chủ</router-link>
            <router-link to="/admin/products" class="manage-item"><i class="fa-brands fa-product-hunt"></i>Sản phẩm</router-link>
            <router-link to="/admin/bills" class="manage-item"><i class="fa-solid fa-money-bill-1-wave"></i>Đơn hàng</router-link>
            <router-link to="/admin/users" class="manage-item"><i class="fa-solid fa-user"></i>Người dùng</router-link>
            <li class="manage-item"><i class="fa-solid fa-arrow-right-from-bracket"></i>Đăng xuất</li>
          </ul>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AdminSidebar'
}
</script>

<style scoped>
.sidebar-wrapper {
  position: fixed;
  width: 15%;
  top: 0;
  left: 0;
  bottom: 0;
  background-color: red;
}

.sidebar-heading {
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  color: white;
  padding: 30px;
}

.sidebar-heading img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 15px;
}

.manage-list {
  padding: 0;
  margin: 0;
  list-style: none;
  text-align: left;
}

.manage-item {
  color: white;
  padding: 16px 30px;
  font-size: 16px;
  display: flex;
  align-items: center;
  text-decoration: none;
}

.manage-item:hover {
  background-color: rgba(0, 0, 0, 0.1);
  cursor: pointer;
}

.manage-item i {
  width: 25px;
}

</style>