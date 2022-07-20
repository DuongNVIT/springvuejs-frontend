<template>
  <div class="admin-wrapper">
    <div class="admin-sidebar">
        <AdminSideBar/>
    </div>
    <div class="admin-content">
        <router-view/>
    </div>
  </div>
</template>

<script>
import AdminSideBar from './AdminSideBar.vue'
export default {
    name: 'Admin',
    components: {
        AdminSideBar
    }
}
</script>

<style scoped>
.admin-content {
    display: flex;
    justify-content: center;
    margin-left: 15%;
}
</style>