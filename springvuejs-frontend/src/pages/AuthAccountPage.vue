<template>
  <h1>IT Shop</h1>
  <h2>Xác thực tài khoản</h2>
  <div v-if="success" class="success">
    <div>Xác thực tài khoản thành công</div>
    <router-link to="/">Về trang chủ</router-link>
  </div>
</template>

<script>
import authService from '@/service/authService';
export default {
    name: "AuthAccountPage",
    data() {
        return {
            success: false
        }
    },
    created() {
        console.log(this.$route.query)
        this.activeAccount();
    },
    methods: {
        async activeAccount() {
            try {
                const username = this.$route.query.username;
                const code = this.$route.query.code;
                const response = await authService.active({username, code});
                this.$data.success = true;
            } catch(error) {
                alert(error.message);
            }
        }
    }
}
</script>

<style>

</style>