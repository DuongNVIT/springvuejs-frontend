<template>
  <div class="login-wrapper">
    <div class="grid wide">
      <div class="login-inner">
      <div class="login-heading">Sign in</div>
      <div class="login-content">
        <input type="text" class="form-input" placeholder="Username" v-model="user.username"/>
        <input type="password" class="form-input" placeholder="Password" v-model="user.password"/>
        <div class="submit">
          <div class="btn-forget">Forget password</div>
          <button @click="handleLogin" class="btn-login">Sign in</button>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import authAPI from '../service/authAPI';
export default {
  name: "Login",
  data() {
    return {
      user: {
        username: "",
        password: "",
      }
    }
  },
  methods: {
    handleLogin() {
      console.log("vao login");
      console.log(this.username);
      console.log(this.password);
      const response = authAPI.login({...this.$data.user});
      console.log(response);
    }
  }
};
</script>

<style scoped>

.login-wrapper {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.1);
}
.login-inner {
  background-color: #fff;
  width: 350px;
  height: 300px;
  padding: 15px 20px;
  border-radius: 3px;
  /* display: flex;
  flex-direction: column;
  justify-content: space-between; */
}

.login-heading {
  color: #333;
  text-align: left;
  font-size: 24px;
  padding: 15px 0 40px 0;
}

.login-content {
  display: flex;
  flex-direction: column;
}

.form-input {
  padding: 6px 8px;
  font-size: 15px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  margin-bottom: 40px;
}

.form-input:focus {
  outline: 1px solid rgba(0, 0, 0, 0.8);
}

.submit {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.btn-forget {
  font-size: 13px;
  color: blue
}

.btn-forget:hover {
  opacity: 0.7;
  cursor: pointer;
}

.btn-login {
  border: none;
  border-radius: 3px;
  padding: 4px 12px;
  background-color: red;
  color: white;
  opacity: 0.7;
}

.btn-login:hover {
  opacity: 1;
  cursor: pointer
}

</style>